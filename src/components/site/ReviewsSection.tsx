import { FormEvent, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, Upload, UserRound } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type Review = {
  id: string;
  name: string;
  rating: number;
  text: string;
  photo?: string;
  dateLabel: string;
};

const STORAGE_KEY = "karthikeya-reviews-v1";

const starterReviews: Review[] = [
  {
    id: "r1",
    name: "Priya S.",
    rating: 5,
    text: "Amazing South Indian flavours and very friendly service. The spice balance was perfect.",
    dateLabel: "Recently visited",
  },
  {
    id: "r2",
    name: "Arjun K.",
    rating: 5,
    text: "The biryani was full of flavour and the curries tasted fresh. Beautiful presentation too.",
    dateLabel: "12 Apr 2026",
  },
  {
    id: "r3",
    name: "Fatima R.",
    rating: 4,
    text: "Beautiful place for authentic Indian food in Luton. Great dine-in atmosphere.",
    dateLabel: "07 Apr 2026",
  },
  {
    id: "r4",
    name: "Daniel M.",
    rating: 5,
    text: "Loved the starters and the warm hospitality. Will be back for the Chicken Dum Biryani.",
    dateLabel: "29 Mar 2026",
  },
];

function RatingStars({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={15} className={i < value ? "fill-gold text-gold" : "text-gold/25"} />
      ))}
    </div>
  );
}

export function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>(starterReviews);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [text, setText] = useState("");
  const [photo, setPhoto] = useState<string | undefined>(undefined);
  const [errors, setErrors] = useState<{ name?: string; rating?: string; text?: string }>({});
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    try {
      const parsed = JSON.parse(raw) as Review[];
      if (Array.isArray(parsed) && parsed.length > 0) setReviews(parsed);
    } catch {
      // ignore invalid localStorage payloads
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
  }, [reviews]);

  const averageRating = useMemo(
    () =>
      reviews.length
        ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
        : "0.0",
    [reviews],
  );

  const onPhotoChange = (file?: File) => {
    if (!file) {
      setPhoto(undefined);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => setPhoto(typeof reader.result === "string" ? reader.result : undefined);
    reader.readAsDataURL(file);
  };

  const submitReview = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors: typeof errors = {};
    if (!name.trim()) nextErrors.name = "Name is required";
    if (!rating) nextErrors.rating = "Rating is required";
    if (!text.trim()) nextErrors.text = "Description is required";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    const dateLabel = new Date().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    const newReview: Review = {
      id: `${Date.now()}`,
      name: name.trim(),
      rating,
      text: text.trim(),
      photo,
      dateLabel,
    };

    setReviews((prev) => [newReview, ...prev]);
    setName("");
    setRating(0);
    setText("");
    setPhoto(undefined);
    setErrors({});
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2200);
  };

  return (
    <section
      id="reviews"
      className="scroll-mt-24 relative py-20 sm:py-24 px-5 sm:px-6 bg-gradient-to-b from-background to-background/85"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">Reviews</p>
          <h2 className="font-serif text-4xl sm:text-6xl text-gradient-gold mb-4">Guest Stories</h2>
          <div className="gold-divider w-40 mx-auto mb-4" />
          <p className="text-cream/70">
            Rated {averageRating}/5 from {reviews.length} reviews
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 grid sm:grid-cols-2 gap-4"
          >
            <AnimatePresence>
              {reviews.map((r) => (
                <motion.article
                  key={r.id}
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="glass rounded-2xl border border-gold/25 p-5"
                >
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2 min-w-0">
                      {r.photo ? (
                        <img
                          src={r.photo}
                          alt={r.name}
                          className="w-10 h-10 rounded-full object-cover border border-gold/50"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full border border-gold/40 bg-gold/10 flex items-center justify-center">
                          <UserRound size={16} className="text-gold" />
                        </div>
                      )}
                      <div className="min-w-0">
                        <p className="font-serif text-lg text-cream truncate">{r.name}</p>
                        <p className="text-[11px] uppercase tracking-[0.2em] text-cream/55">
                          {r.dateLabel}
                        </p>
                      </div>
                    </div>
                    <RatingStars value={r.rating} />
                  </div>
                  <p className="text-sm text-cream/80 leading-relaxed">{r.text}</p>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass rounded-2xl border border-gold/30 p-5 sm:p-6 h-fit"
          >
            <h3 className="font-serif text-3xl text-gradient-gold mb-2">Add Your Review</h3>
            <p className="text-sm text-cream/70 mb-5">
              Share your experience with Karthikeya Spice Kitchen.
            </p>

            <form onSubmit={submitReview} className="space-y-4">
              <div>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="border-gold/25 bg-background/60"
                />
                {errors.name ? <p className="text-xs text-red-300 mt-1">{errors.name}</p> : null}
              </div>

              <div>
                <p className="text-sm text-cream/80 mb-2">Rating</p>
                <div className="inline-flex rounded-full border border-gold/30 bg-background/40 px-3 py-2 gap-1">
                  {Array.from({ length: 5 }).map((_, i) => {
                    const v = i + 1;
                    return (
                      <button key={v} type="button" onClick={() => setRating(v)} className="p-1">
                        <Star
                          size={18}
                          className={
                            v <= rating ? "fill-gold text-gold" : "text-gold/35 hover:text-gold/60"
                          }
                        />
                      </button>
                    );
                  })}
                </div>
                {errors.rating ? (
                  <p className="text-xs text-red-300 mt-1">{errors.rating}</p>
                ) : null}
              </div>

              <div>
                <Textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Tell us about your meal"
                  rows={4}
                  className="border-gold/25 bg-background/60 resize-none"
                />
                {errors.text ? <p className="text-xs text-red-300 mt-1">{errors.text}</p> : null}
              </div>

              <div>
                <label className="text-sm text-cream/80 inline-flex items-center gap-2 mb-2">
                  <Upload size={14} className="text-gold" /> Upload photo (optional)
                </label>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => onPhotoChange(e.target.files?.[0])}
                  className="border-gold/25 bg-background/60 file:text-cream"
                />
                {photo ? (
                  <img
                    src={photo}
                    alt="Preview"
                    className="mt-3 w-20 h-20 rounded-lg object-cover border border-gold/40"
                  />
                ) : null}
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-gold text-primary-foreground hover:brightness-110"
              >
                Submit Review
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {showToast ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 14 }}
            className="fixed bottom-24 right-4 sm:right-6 z-[70] rounded-xl border border-gold/40 bg-background/95 px-4 py-3 text-sm text-cream shadow-deep"
          >
            Review added successfully.
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
