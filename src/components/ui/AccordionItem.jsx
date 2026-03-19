import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function AccordionItem({ title, children, icon, isOpenDefault = false }) {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  return (
    <div className="rounded-xl border-0 shadow-sm mb-3 bg-white overflow-hidden">
      <button 
        className="w-full flex justify-between items-center px-5 py-4 text-left font-semibold text-lg border-b border-gray-100 hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        {isOpen ? <FaChevronUp className="text-gray-500 text-sm" /> : <FaChevronDown className="text-gray-500 text-sm" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="flex items-center p-5 pb-6">
              {icon && (
                <div className="hidden md:flex md:w-2/12 pt-3 pb-3 justify-center items-center">
                  <div className="inline-block">{icon}</div>
                </div>
              )}
              <div className={`text-stone-600 ${icon ? 'md:w-10/12' : 'w-full'} leading-relaxed`}>
                {children}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
