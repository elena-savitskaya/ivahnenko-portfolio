"use client";

import clsx from "clsx";
import { useEffect, useRef } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

type ProcessItemProps = {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
};

export default function ProcessItem({
  title,
  children,
  isOpen,
  onClick,
}: ProcessItemProps) {
  const answerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = answerRef.current;
    if (!el) return;

    if (isOpen) {
      el.style.maxHeight = el.scrollHeight + 24 + "px";
      el.style.paddingTop = "24px";
      el.style.opacity = "1";
    } else {
      el.style.maxHeight = "0";
      el.style.paddingTop = "0";
      el.style.opacity = "0";
    }
  }, [isOpen]);

  return (
    <div
      className={clsx(
        "py-6 border-t-1 border-t-gray-200 dark:border-t-gray-800 shadow-md",
        isOpen && "active",
      )}
    >
      <button
        onClick={onClick}
        className="cursor-pointer flex w-full items-center justify-between gap-2 text-left"
      >
        <h5 className="text-md font-bold">{title}</h5>
        <span className="hover:bg-gray-100 dark:hover:bg-gray-800 w-10 h-10 min-w-10 min-h-10 flex items-center justify-center rounded-full transition-transform">
          <ChevronDownIcon
            className={clsx(
              "h-6 w-6 transition-transform duration-500 ease-in-out",
              isOpen && "rotate-180",
            )}
          />
        </span>
      </button>
      <div
        ref={answerRef}
        className="overflow-hidden max-h-0 opacity-0 transition-[max-height,padding,opacity] duration-500 ease-in-out"
      >
        <div className="text-base text-tertiary">{children}</div>
      </div>
    </div>
  );
}
