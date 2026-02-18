import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-800">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          <Link href="/" className="text-sm">
            <p className="flex flex-col md:items-start items-center leading-tight">
              <span className="font-bold">Ivahnenko Sergii</span>
              <span className="text-sm text-secondary">
                architect & sculptor
              </span>
            </p>
          </Link>
          <div className="flex gap-4 items-center">
            <a
              href="https://www.instagram.com/ivahnenko_serhii?igsh=aHVpN3IyYTgycWo0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Ivahnenko Sergii"
            >
              <Image
                src="/instagram.svg"
                alt=""
                width={22}
                height={22}
                className="object-cover object-center hover:scale-110 transition-transform"
                priority
              />
            </a>
            <a
              href="https://www.facebook.com/share/1EtGK6twdY/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Ivahnenko Sergii"
            >
              <Image
                src="/facebook.svg"
                alt="facebook"
                width={24}
                height={24}
                className="object-cover object-center hover:scale-110 transition-transform"
                priority
              />
            </a>
          </div>
        </div>
        <div className="pt-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <span className="text-sm text-secondary">
            © {new Date().getFullYear()}
          </span>
          <p className="text-sm text-secondary">Всі права захищені</p>
        </div>
      </div>
    </footer>
  );
}
