import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import React from "react";

export default function AccordionItem({
  title,
  children,
  icon,
  isOpenDefault = false,
}) {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  return (
    <div className="rounded-lg bg-white border border-gray-200 shadow-sm mb-3 overflow-hidden">
      {/* Header */}
      <button
        className="w-full flex justify-between items-center px-5 py-4 text-left hover:bg-gray-50 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-base font-semibold text-[#1F2937]">{title}</span>

        {isOpen ? (
          <FaChevronUp className="text-gray-400 text-sm" />
        ) : (
          <FaChevronDown className="text-gray-400 text-sm" />
        )}
      </button>

      {/* Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="flex items-start px-5 pb-6 gap-4">
              {/* Icon */}
              {icon && (
                <div className="hidden md:flex items-start justify-center">
                  <div
                    className="w-16 h-16 flex items-center justify-center rounded-full 
                                  bg-linear-to-br from-[#7C5CFC] to-[#6366F1] 
                                  text-white shadow-sm"
                  >
                    {React.cloneElement(icon, { size: 28 })}
                  </div>
                </div>
              )}

              {/* Text */}
              <div className="text-sm text-gray-600 leading-relaxed">
                {children}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
