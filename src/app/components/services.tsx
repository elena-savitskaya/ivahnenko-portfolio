"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import { categories } from "@/contents/categories";

export default function Services() {
  return (
    <section className="section">
      <div className="container flex flex-col gap-6">
        <div className="flex flex-col gap-4 items-center justify-center">
          <motion.h2
            className="text-3xl font-bold text-dark dark:text-white text-center"
            {...fadeInUp}
          >
            Послуги
          </motion.h2>
          <p className="text-center text-lg text-gray-700 dark:text-gray-300">
            Послуги з виготовлення та монтажу виробів з гіпсу для вашого
            інтер’єру:
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link key={index} href={`/portfolio?category=${category.id}`}>
              <motion.div
                key={index}
                className="h-full bg-white dark:bg-dark/30 border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow hover:shadow-lg transition-all flex flex-col items-center text-center gap-4"
                whileHover={{ scale: 1.05 }}
                {...fadeInUp}
              >
                <Image
                  src={category.icon}
                  alt={`Іконка категорії ${category.title}`}
                  style={{
                    width: "60px",
                    height: "60px",
                  }}
                  width={60}
                  height={60}
                  loading="lazy"
                />
                <div className="flex flex-col gap-2">
                  <h3 className="text-md font-bold">{category.title}</h3>
                  <p className="text-md font-medium">{category.description}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
