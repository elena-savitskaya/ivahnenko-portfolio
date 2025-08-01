import { FaPhone } from "react-icons/fa";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="section bg-white/80 dark:bg-dark/50 overflow-hidden animate-slide-up">
      <div className="container">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 items-start">
            <h2 className="text-3xl font-bold text-dark dark:text-white">
              Якщо у вас виникли питання
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Зв’яжіться зі мною будь-яким зручним способом для обговорення
              деталей.
            </p>
          </div>
          <div className="flex md:flex-row flex-col md:items-center gap-3 md:justify-between items-start">
            <div className="flex md:flex-col flex-row items-start gap-3">
              <div className="lg:h-20 lg:w-20 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <Image
                  src="/gmail.svg"
                  alt="gmail"
                  width={32}
                  height={32}
                  className="w-8 h-8 lg:w-12 lg:h-12 object-cover object-center"
                  priority
                />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-[16px] text-secondary">
                  Напишіть мені
                </span>
                <a
                  href="mailto:isergo436@gmail.com"
                  className="hover:text-primary transition-colors font-bold text-[20px]"
                >
                  isergo436@gmail.com
                </a>
              </div>
            </div>
            <div className="flex md:flex-col flex-row items-start gap-3">
              <div className="lg:h-20 lg:w-20 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <FaPhone className="w-6 h-6 lg:w-10 lg:h-10 dark:text-black" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-[16px] text-secondary">
                  Подзвоніть мені
                </span>
                <a
                  href="tel:+380666324347"
                  className="hover:text-primary transition-colors font-bold text-[20px]"
                >
                  +380666324347
                </a>
              </div>
            </div>
            <div className="flex md:flex-col flex-row items-start gap-3">
              <div className="lg:h-20 lg:w-20 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <Image
                  src="/instagram.svg"
                  alt="instagram"
                  width={32}
                  height={32}
                  className="w-6 h-6 lg:w-10 lg:h-10 object-cover object-center"
                  priority
                />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-[16px] text-secondary">
                  Знайдіть мене в інстаграм
                </span>
                <a
                  href="https://www.instagram.com/ivahnenko_serhii?igsh=aHVpN3IyYTgycWo0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold hover:text-primary transition-colors text-[20px]"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
