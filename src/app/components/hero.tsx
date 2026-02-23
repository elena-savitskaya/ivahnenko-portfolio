"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, fadeIn } from "@/utils/animations";

export default function Hero() {
  return (
    <section className="section md:mt-10 mt-0">
      <div className="container relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10">
          <div className="flex flex-col gap-5 max-w-2xl">
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
              {...fadeInUp}
              transition={{ delay: 0.3 }}
            >
              Привіт, мене звати
              <motion.span
                className="text-primary pl-2"
                {...fadeIn}
                transition={{ delay: 0.6 }}
              >
                Сергій!
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl font-medium text-gray-700 dark:text-gray-300"
              {...fadeInUp}
              transition={{ delay: 0.4 }}
            >
              Я створюю на замовлення скульптури, арт-об’єкти та предмети декору
              з гіпсу. Спеціалізуюсь на ліпнині, 3D панелях, кутових елементах.
            </motion.p>
            <motion.p
              className="uppercase text-gray-500 font-semibold"
              {...fadeInUp}
              transition={{ delay: 0.45 }}
            >
              <span className="pr-2 text-lg">15+</span>
              <span className="pr-2 text-sm">років досвіду</span>
            </motion.p>
            <motion.p
              className="uppercase text-gray-500 font-semibold"
              {...fadeInUp}
              transition={{ delay: 0.45 }}
            >
              <span className="pr-2 text-lg">200</span>
              <span className="pr-2 text-sm">реалізованих проєктів</span>
            </motion.p>
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.5 }}
              className="pt-2"
            >
              <Link href="/contact" className="btn">
                Зв’язатися зі мною
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="w-48 h-48 md:min-w-84 md:h-84 relative"
          >
            <div className="image-shadow" />
            <div className="w-full h-full overflow-hidden shadow-xl rounded-lg relative">
              <Image
                src="/profile.webp"
                alt="Сергій Івахненко"
                fill
                sizes="(max-width: 768px) 200px, 336px"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
