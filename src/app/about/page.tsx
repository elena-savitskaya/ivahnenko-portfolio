"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, fadeInDown } from "@/utils/animations";

export default function AboutPage() {
  return (
    <section className="section md:mt-10 mt-0">
      <div className="container flex flex-col gap-6">
        <motion.h1 className="text-4xl font-bold text-center" {...fadeInDown}>
          Кілька слів про мене
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="relative w-full">
            <div className="image-shadow" />
            <motion.div
              className="w-full md:h-[700px] h-[600px] relative overflow-hidden rounded-lg"
              {...fadeInUp}
            >
              <Image
                src="/about.webp"
                alt="image"
                className="object-cover"
                fill
                style={{
                  width: "100%",
                  height: "100%",
                }}
                priority
              />
            </motion.div>
          </div>
          <motion.div
            className="flex flex-col gap-6 text-lg leading-relaxed py-5"
            {...fadeInUp}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-primary">
              Скульптура, керована інноваціями
            </h2>
            <p className="text-md font-bold">
              Я — Сергій Івахненко, архітектор і скульптор. Створюю унікальні
              проєкти, поєднуючи архітектуру з художнім баченням. Моя практика
              охоплює повний цикл робіт: від концепції — до реалізації
              резиденцій, громадських просторів та артоб’єктів.
            </p>
            <p className="text-secondary">
              Якщо вам близький мій підхід — буду радий обговорити майбутній
              проєкт!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
