import { useState, type ReactNode } from "react";
import { PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroVideoProps {
  /** Self-hosted video URL (public path). Preferred when set. */
  src?: string;
  /** Google Drive file ID (click-to-play embed) — used when `src` is absent. */
  videoId?: string;
  /** Poster image URL shown before playback. */
  posterSrc?: string;
  /** Poster node (e.g. course image) — fallback when no posterSrc. */
  poster?: ReactNode;
  /** Accessible label / caption. */
  title?: string;
  className?: string;
}

/**
 * Responsive 16:9 hero video with rounded corners.
 * - Self-hosted `src`: native <video> with controls, a poster, and no preload
 *   (lazy — only the poster loads until the visitor presses play). Never
 *   autoplays with sound.
 * - Drive `videoId`: click-to-play facade that swaps in the Drive preview iframe
 *   on click, so the heavy embed loads only on demand.
 */
export function HeroVideo({ src, videoId, posterSrc, poster, title = "Play video", className }: HeroVideoProps) {
  const [playing, setPlaying] = useState(false);

  const frame = "relative aspect-video w-full overflow-hidden rounded-card border border-line bg-linen";

  // Self-hosted video: native player, lazy (preload none), poster only until play.
  if (src) {
    return (
      <div className={cn(frame, className)}>
        <video
          className="absolute inset-0 h-full w-full object-cover"
          controls
          preload="none"
          poster={posterSrc}
          playsInline
          title={title}
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
    );
  }

  // Drive embed: click-to-play facade.
  return (
    <div className={cn(frame, className)}>
      {playing && videoId ? (
        <iframe
          src={`https://drive.google.com/file/d/${videoId}/preview`}
          title={title}
          allow="autoplay; fullscreen"
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={title}
          className="group absolute inset-0 flex items-center justify-center"
        >
          <span className="absolute inset-0">
            {posterSrc ? (
              <img src={posterSrc} alt="" className="h-full w-full object-cover" />
            ) : (
              poster ?? (
                <span className="flex h-full w-full items-center justify-center bg-linen">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                    Technique demonstration
                  </span>
                </span>
              )
            )}
          </span>
          <span className="absolute inset-0 bg-ink/10 transition-colors duration-200 group-hover:bg-ink/20" />
          <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-cta shadow-soft backdrop-blur transition-transform duration-200 group-hover:scale-105">
            <PlayCircle className="h-9 w-9" strokeWidth={1.5} />
          </span>
        </button>
      )}
    </div>
  );
}
