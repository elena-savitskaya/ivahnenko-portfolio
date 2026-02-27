"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import { processItems } from "@/contents/process";
import { useState } from "react";
import ProcessItem from "./process-item";
import type { Process } from "@/types";

export default function Process() {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setActiveIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

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
        <div className="flex flex-col">
          {processItems.map((item, index) => (
            <ProcessItem
              key={item.title}
              title={item.title}
              isOpen={activeIndexes.includes(index)}
              onClick={() => toggleItem(index)}
            >
              <ul className="list-disc pl-5 flex flex-col gap-2">
                {item.items.map((text) => (
                  <li key={text}>{text}</li>
                ))}
              </ul>
            </ProcessItem>
          ))}
        </div>
      </div>
    </section>
  );
}
