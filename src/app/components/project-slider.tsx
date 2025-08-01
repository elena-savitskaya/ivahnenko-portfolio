"use client";

import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

type ProjectSliderProps = {
  images: string[];
  startIndex: number;
  onClose: () => void;
};

export default function ProjectSlider({
  images,
  startIndex,
  onClose,
}: ProjectSliderProps) {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: startIndex,
    loop: true,
    slides: { perView: 1 },
  });

  return (
    <AnimatePresence>
      <motion.div
        key="modal"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed inset-0 bg-dark/95 bg-opacity-90 flex items-center justify-center z-50"
        onClick={onClose}
      >
        <motion.button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-6 right-6 p-2 rounded-lg hover:bg-gray-800 transition-colors"
          aria-label="Закрити галерею"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaTimes className="h-5 w-5 text-white" />
        </motion.button>

        <div
          key={startIndex}
          ref={sliderRef}
          className="keen-slider max-w-5xl w-full relative"
          onClick={(e) => e.stopPropagation()}
        >
          {images.map((src, idx) => (
            <div
              key={idx}
              className="keen-slider__slide flex justify-center items-center"
            >
              <Image
                src={src}
                alt={`Фото проекта ${idx + 1}`}
                width={1200}
                height={800}
                className="object-contain h-[80vh]"
              />
            </div>
          ))}

          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white dark:bg-dark text-dark dark:text-white p-3 rounded-full shadow-md hover:scale-110 transition z-10"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white dark:bg-dark text-dark dark:text-white p-3 rounded-full shadow-md hover:scale-110 transition z-10"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
