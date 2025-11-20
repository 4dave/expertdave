import { handleScrollDown } from "@/utils/Helpers"
import type { RefObject } from "react"

export function ScrollIndicator({
    skillsRef,
}: {
    skillsRef: RefObject<HTMLDivElement | null>
}) {
    return (
        <button
            type="button"
            onClick={() => handleScrollDown(skillsRef)}
            className="hidden sm:flex flex-col items-center gap-2 absolute bottom-6 left-1/2 -translate-x-1/2 text-primary/70 hover:text-primary focus:outline-none group"
            aria-label="Scroll to see more"
        >
            {/* Mouse shape */}
            <div className="h-10 w-6 rounded-full border border-primary/30 flex items-start justify-center p-1">
                <div className="h-2 w-1 rounded-full bg-primary/70 animate-bounce" />
            </div>
            {/* Text + chevron */}
            <span className="text-[11px] tracking-[0.2em] uppercase">Scroll</span>
            <svg
                className="w-4 h-4 animate-bounce group-hover:translate-y-0.5 transition-transform"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
            >
                <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </button>
    )
}
