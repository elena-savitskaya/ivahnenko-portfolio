"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { projects } from "@/contents/projects";
import ProjectSlider from "@/app/components/project-slider";
import { motion } from "framer-motion";
import { fadeInDown, fadeInUp } from "@/utils/animations";
import { categories } from "@/contents/categories";
import { FaChevronLeft } from "react-icons/fa";

export default function PortfolioPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    if (category) {
      const filtered = projects.filter((p) => p.category === category);
      setFilteredProjects(filtered);
    }
  }, [category]);

  const images = filteredProjects.map((p) => p.image);

  return (
    <section className="section md:mt-10 mt-0">
      <div className="container flex flex-col gap-6">
        <motion.h1 className="text-4xl font-bold text-center" {...fadeInDown}>
          {category
            ? categories.find((c) => c.id === category)?.title || "Проекти"
            : "Проекти"}
        </motion.h1>
        {category ? (
          <>
            <div className="text-center">
              <Link
                href="/portfolio"
                className="text-primary hover:underline flex items-center gap-2"
              >
                <FaChevronLeft size={16} />
                Повернутись до категорій
              </Link>
            </div>
            {filteredProjects.length === 0 ? (
              <p className="text-center text-gray-500">
                Немає проєктів у цій категорії.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {filteredProjects.map((project, i) => (
                  <motion.div
                    key={i}
                    {...fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 50 }}
                    className="relative h-[320px] cursor-pointer rounded-lg shadow overflow-hidden"
                    onClick={() => setSelectedIndex(i)}
                  >
                    <Image
                      src={project.image}
                      alt={project.title || `Проект ${i + 1}`}
                      className="object-cover"
                      fill
                      priority
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/portfolio?category=${cat.id}`}
                className="group"
              >
                <motion.div
                  {...fadeInUp}
                  whileHover={{ scale: 1.03 }}
                  className="flex flex-col gap-3 rounded-lg bg-white dark:bg-dark/50 overflow-hidden shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="relative w-full md:h-[320px] h-[250px]">
                    <Image
                      src={cat.previewImage}
                      alt={cat.title}
                      fill
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                      className="object-cover brightness-90 group-hover:brightness-75 transition"
                    />
                  </div>
                  <p
                    className="text-lg font-semibold text-center p-2"
                    style={{
                      height: "80px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {cat.title}
                  </p>
                </motion.div>
              </Link>
            ))}
          </div>
        )}
      </div>
      {selectedIndex !== null && (
        <ProjectSlider
          images={images}
          startIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
        />
      )}
    </section>
  );
}
