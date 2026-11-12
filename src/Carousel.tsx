import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface CarouselProps {
  images: string[];
  title?: string;
  onExpand?: (imageSrc: string, index: number) => void;
}

const Carousel: React.FC<CarouselProps> = ({ images, title, onExpand }) => {
  const [current, setCurrent] = useState(0);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((prevIdx) => (prevIdx === 0 ? images.length - 1 : prevIdx - 1));
  };

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((prevIdx) => (prevIdx === images.length - 1 ? 0 : prevIdx + 1));
  };

  return (
    <div className="group/carousel relative w-full h-52 bg-slate-100 dark:bg-slate-950/70 overflow-hidden border-b border-slate-200/80 dark:border-slate-800">
      <img
        src={images[current]}
        alt={title ? `${title} screenshot ${current + 1}` : `Project preview ${current + 1}`}
        loading="lazy"
        onClick={() => onExpand?.(images[current], current)}
        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/carousel:scale-[1.03] cursor-pointer"
      />

      {/* Subtle gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/15" />

      {/* Counter & Expand button */}
      <div className="absolute top-3 right-3 flex items-center gap-1.5">
        <span className="px-2 py-0.5 rounded-md text-[11px] font-mono font-medium bg-slate-950/70 text-slate-200 backdrop-blur-sm border border-white/10">
          {current + 1}/{images.length}
        </span>
        {onExpand && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onExpand(images[current], current);
            }}
            className="p-1.5 rounded-md bg-slate-950/70 text-white hover:bg-indigo-600 transition-colors backdrop-blur-sm border border-white/10"
            aria-label="Expand image"
            title="View full size"
          >
            <Maximize2 size={13} />
          </button>
        )}
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-slate-950/70 text-white hover:bg-indigo-600 transition-all opacity-0 group-hover/carousel:opacity-100 backdrop-blur-sm border border-white/10"
            aria-label="Previous screenshot"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-slate-950/70 text-white hover:bg-indigo-600 transition-all opacity-0 group-hover/carousel:opacity-100 backdrop-blur-sm border border-white/10"
            aria-label="Next screenshot"
          >
            <ChevronRight size={16} />
          </button>
        </>
      )}

      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/55 backdrop-blur-sm">
          {images.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setCurrent(idx);
              }}
              aria-label={`Go to screenshot ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                idx === current ? 'w-4 bg-indigo-400' : 'w-1.5 bg-white/45 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
