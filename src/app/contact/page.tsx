"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { contactSchema } from "@/schemas/contactSchema";
import { sendContactForm } from "@/services/contactApi";
import {
  fadeInUp,
  fadeIn,
  slideInLeft,
  slideInRight,
} from "@/utils/animations";

type ContactFormData = z.infer<typeof contactSchema>;
type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      await sendContactForm(data);
      setStatus("success");
      reset();

      setTimeout(() => {
        router.push("/");
      }, 3000);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="section md:mt-10 mt-0">
      <div className="container flex flex-col gap-6">
        <motion.h1 className="text-4xl font-bold text-center" {...fadeInUp}>
          Найміть мене для вашого проекту
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 gap-6">
          <motion.div className="flex flex-col gap-6" {...slideInLeft}>
            <motion.div {...fadeInUp}>
              <h2 className="text-2xl font-semibold">Зв’яжіться зі мною</h2>
              <p className="text-secondary">
                Я завжди відкритий до обговорення нових проектів, креативних
                ідей або можливостей стати частиною ваших задумів.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col gap-4"
              variants={fadeIn}
              initial="initial"
              animate="animate"
            >
              <motion.div
                className="flex items-center gap-4"
                variants={fadeInUp}
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 50 }}
              >
                <a href="mailto:isergo436@gmail.com">
                  <FaEnvelope className="h-6 w-6 text-primary" />
                </a>
                <div>
                  <h3 className="font-semibold">Електронна адреса</h3>
                  <a
                    href="mailto:isergo436@gmail.com"
                    className="text-secondary hover:text-primary"
                  >
                    isergo436@gmail.com
                  </a>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center gap-4"
                variants={fadeInUp}
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 50 }}
              >
                <a href="tel:+380666324347">
                  <FaPhone className="h-6 w-6 text-primary" />
                </a>
                <div>
                  <h3 className="font-semibold">Телефон</h3>
                  <a
                    href="tel:+380666324347"
                    className="text-secondary hover:text-primary"
                  >
                    +380666324347
                  </a>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center gap-4"
                variants={fadeInUp}
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 50 }}
              >
                <FaMapMarkerAlt className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Місцезнаходження</h3>
                  <p className="text-secondary">Kyiv, Ukraine</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            {...slideInRight}
          >
            <motion.form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-6"
              variants={fadeIn}
              initial="initial"
              animate="animate"
            >
              <motion.div
                variants={fadeInUp}
                className="flex flex-col items-start gap-1"
              >
                <label htmlFor="name" className="text-sm font-medium">
                  Ім’я
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:outline-2 outline-primary"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="flex flex-col items-start gap-1"
              >
                <label htmlFor="phone" className="text-sm font-medium">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register("phone")}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:outline-2 outline-primary"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="flex flex-col items-start gap-1"
              >
                <label htmlFor="email" className="text-sm font-medium">
                  Електронна адреса
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:outline-2 outline-primary"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="flex flex-col items-start gap-1"
              >
                <label htmlFor="message" className="text-sm font-medium">
                  Повідомлення
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register("message")}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:outline-2 outline-primary"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">
                    {errors.message.message}
                  </p>
                )}
              </motion.div>
              <motion.button
                type="submit"
                disabled={status === "loading"}
                className="w-full btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {status === "loading"
                  ? "Відправка..."
                  : "Відправити повідомлення"}
              </motion.button>

              {status === "success" && (
                <motion.p
                  className="text-green-500 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Повідомлення надіслано успішно!
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  className="text-red-500 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Не вдалося надіслати повідомлення. Будь ласка, спробуйте ще
                  раз.
                </motion.p>
              )}
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
