"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import { process } from "@/contents/process";

export default function Process() {
  return (
    <section className="section">
      <div className="container flex flex-col gap-6">
        <div className="flex flex-col gap-4 items-center justify-center">
          <motion.h2
            className="text-3xl font-bold text-dark dark:text-white text-center"
            {...fadeInUp}
          >
            Процес створення
          </motion.h2>
          <p className="text-center text-lg text-gray-700 dark:text-gray-300">
            Кожен проєкт проходить кілька важливих етапів — від ідеї до
            фінального монтажу.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {process.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-dark/30 border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow hover:shadow-lg transition-all flex flex-col items-center text-center gap-4"
              whileHover={{ scale: 1.05 }}
              {...fadeInUp}
            >
              <Image
                src={item.icon}
                alt={`Іконка категорії ${item.title}`}
                style={{
                  width: "80px",
                  height: "80px",
                }}
                width={80}
                height={80}
                loading="lazy"
              />
              <div className="flex flex-col gap-2">
                <p className="text-md font-bold">{item.title}</p>
                <p className="text-md font-medium">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
