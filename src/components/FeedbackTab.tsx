import { useState, useRef, useEffect, type FormEvent } from "react"

export default function FeedbackTab() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false)
    }
    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleEsc)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEsc)
    }
  }, [isOpen])

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const trimmed = message.trim()
    if (!trimmed) {
      setError("Please enter your feedback.")
      return
    }
    if (trimmed.length < 5) {
      setError("Feedback should be at least 5 characters.")
      return
    }

    try {
      setIsSubmitting(true)
      setError("")
      setStatus("idle")

      const formData = new FormData()
      formData.append("access_key", import.meta.env.VITE_WEB3FORMS_API_KEY)
      formData.append("message", trimmed)
      formData.append("subject", "Site Feedback — ExpertDave.com")
      formData.append("from_name", "ExpertDave.com Feedback")
      formData.append("botcheck", "")

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const result = await response.json()

      if (result.success) {
        setStatus("success")
        setMessage("")
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div
      ref={containerRef}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex"
    >
      {/* Unified gradient border wrapping both panel and tab trigger */}
      <div className="rounded-l-2xl bg-linear-to-br from-primary/50 via-sky-500/40 to-purple-500/40 p-px transition-all duration-200 hover:from-primary/70 hover:via-sky-500/60 hover:to-purple-500/60">
        <div className="rounded-l-2xl bg-main/95 flex items-stretch transition-shadow hover:shadow-[0_0_20px_rgba(96,165,250,0.3)]">

          {/* Slide-out panel */}
          <div
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{ width: isOpen ? "264px" : "0px" }}
          >
            <div className="w-[264px] p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-primary">Leave Feedback</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer text-primary/50 hover:text-primary transition-colors text-xl leading-none"
                  aria-label="Close feedback"
                >
                  ×
                </button>
              </div>

              {status === "success" ? (
                <div className="text-center py-6 space-y-2">
                  <p className="text-3xl">🎉</p>
                  <p className="text-sm text-green-600 font-medium">Thanks for the feedback!</p>
                  <button
                    onClick={() => { setStatus("idle"); setIsOpen(false) }}
                    className="cursor-pointer block mx-auto mt-1 text-xs text-primary/50 hover:text-primary transition-colors"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3" noValidate>
                  <p className="text-xs text-primary/60">How&apos;s the site? Let me know!</p>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value)
                      setError("")
                      setStatus("idle")
                    }}
                    className={`w-full rounded-md border px-3 py-2 bg-main text-primary text-sm outline-none resize-none focus:ring-2 focus:ring-offset-1 focus:ring-primary/60 ${
                      error ? "border-red-500" : "border-border-nav"
                    }`}
                    placeholder="Share your thoughts about the site..."
                  />
                  {error && <p className="text-xs text-red-500">{error}</p>}
                  {status === "error" && !error && (
                    <p className="text-xs text-red-500">Something went wrong. Please try again.</p>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="cursor-pointer w-full inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium border bg-main text-primary disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-60 transition-colors"
                  >
                    {isSubmitting ? "Sending..." : "Submit Feedback"}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Divider line between panel and tab trigger */}
          {isOpen && <div className="w-px bg-primary/10 self-stretch" />}

          {/* Tab trigger */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="cursor-pointer flex items-center justify-center px-2.5 py-6"
            aria-label={isOpen ? "Close feedback panel" : "Open feedback panel"}
            aria-expanded={isOpen}
          >
            <span
              className="text-xs font-medium text-primary tracking-wider select-none"
              style={{ writingMode: "vertical-rl" }}
            >
              Feedback
            </span>
          </button>

        </div>
      </div>
    </div>
  )
}
