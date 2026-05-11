import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { drivePreview } from "../data/site";

export default function VideoLightbox({ video, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (video) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [video, onClose]);

  return (
    <AnimatePresence>
      {video && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md grid place-items-center p-4 md:p-8"
          onClick={onClose}
          data-testid="video-lightbox"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-6xl bg-[#050505] border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_120px_rgba(0,229,255,0.15)]"
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#00E5FF]">
                  {video.category}
                </p>
                <p className="font-heading text-base md:text-lg font-medium tracking-tight">
                  {video.title}
                </p>
              </div>
              <button
                onClick={onClose}
                data-testid="video-lightbox-close"
                aria-label="Close video"
                className="w-10 h-10 rounded-full border border-white/10 grid place-items-center hover:border-[#00E5FF]/50 hover:text-[#00E5FF] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="relative aspect-video bg-black">
              <iframe
                title={video.title}
                src={drivePreview(video.driveId)}
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
