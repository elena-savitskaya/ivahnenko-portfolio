"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";
import { projects } from "@/contents/projects";
import { fadeInUp } from "@/utils/animations";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Projects() {
  const [pause, setPause] = useState<boolean>(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    drag: true,
    mode: "snap",
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 30 },
      },
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (!pause && instanceRef.current) {
        instanceRef.current.next();
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [pause, instanceRef]);

  return (
    <section className="section">
      <div className="container flex flex-col gap-6">
        <motion.h2 className="text-3xl font-bold text-center" {...fadeInUp}>
          Мої роботи
        </motion.h2>
        <div
          ref={sliderRef}
          className="keen-slider relative"
          onMouseEnter={() => setPause(true)}
          onMouseLeave={() => setPause(false)}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="keen-slider__slide bg-white dark:bg-dark/50 rounded-lg shadow-md overflow-hidden"
              variants={fadeInUp}
            >
              <motion.div
                className="aspect-video bg-gray-200 dark:bg-gray-800"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <div className="h-[400px] relative">
                  <Image
                    src={project.image}
                    alt="project"
                    className="object-cover"
                    fill
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
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
      </div>
    </section>
  );
}
