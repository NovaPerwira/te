"use client";

import { useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Globe } from "lucide-react";

export function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-full border border-border bg-background hover:bg-muted transition-colors text-xs font-bold uppercase tracking-widest text-foreground"
            >
                <Globe size={14} />
                <span>{language === 'en' ? 'EN' : 'ID'}</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop to close when clicking outside */}
                        <div
                            className="fixed inset-0 z-40 bg-transparent"
                            onClick={() => setIsOpen(false)}
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute right-0 mt-2 w-32 bg-popover border border-border rounded-xl shadow-xl overflow-hidden z-50 flex flex-col p-1"
                        >
                            <button
                                onClick={() => { setLanguage('en'); setIsOpen(false); }}
                                className={`text-left px-4 py-2 text-sm font-bold rounded-lg transition-colors flex items-center justify-between
                  ${language === 'en' ? 'bg-primary/10 text-primary' : 'hover:bg-muted text-muted-foreground hover:text-foreground'}
                `}
                            >
                                <span>English</span>
                                {language === 'en' && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
                            </button>
                            <button
                                onClick={() => { setLanguage('id'); setIsOpen(false); }}
                                className={`text-left px-4 py-2 text-sm font-bold rounded-lg transition-colors flex items-center justify-between
                  ${language === 'id' ? 'bg-primary/10 text-primary' : 'hover:bg-muted text-muted-foreground hover:text-foreground'}
                `}
                            >
                                <span>Indonesia</span>
                                {language === 'id' && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
                            </button>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
