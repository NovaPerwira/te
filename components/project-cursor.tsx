"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useSpring, useMotionValue } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

export function ProjectCursor({ children }: { children: React.ReactNode }) {
    const [isHovered, setIsHovered] = useState(false)
    const cursorRef = useRef<HTMLDivElement>(null)
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const springConfig = { damping: 25, stiffness: 150, mass: 0.5 }
    const cursorX = useSpring(mouseX, springConfig)
    const cursorY = useSpring(mouseY, springConfig)

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX)
            mouseY.set(e.clientY)
        }
        window.addEventListener("mousemove", moveCursor)
        return () => window.removeEventListener("mousemove", moveCursor)
    }, [mouseX, mouseY])

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative cursor-none" // Hide default cursor
        >
            {/* The actual content */}
            {children}

            {/* Custom Cursor Element */}
            <motion.div
                ref={cursorRef}
                style={{
                    x: cursorX,
                    y: cursorY,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    pointerEvents: "none",
                    zIndex: 9999,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                    scale: isHovered ? 1 : 0,
                    opacity: isHovered ? 1 : 0,
                }}
                className="flex items-center justify-center bg-sky-500 text-white w-24 h-24 rounded-full font-bold uppercase tracking-widest text-xs shadow-xl backdrop-blur-sm -translate-x-1/2 -translate-y-1/2"
            >
                <div className="text-center flex flex-col items-center gap-1">
                    <span>View</span>
                    <ArrowUpRight size={16} />
                </div>
            </motion.div>
        </div>
    )
}
