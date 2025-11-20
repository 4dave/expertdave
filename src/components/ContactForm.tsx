import { useState, useEffect, useRef, type FormEvent } from "react"

type FormValues = {
  name: string
  email: string
  message: string
}

type FormErrors = Partial<FormValues>

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    message: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const formRef = useRef<HTMLFormElement>(null)

  // Disable scroll-snap when form is focused
  useEffect(() => {
    const handleFocus = () => {
      document.documentElement.classList.add("no-scroll-snap")
      document.body.classList.add("no-scroll-snap")
    }
    const handleBlur = (e: FocusEvent) => {
      // Only remove if focus is moving outside the form
      const form = formRef.current
      if (form && !form.contains(e.relatedTarget as Node)) {
        document.documentElement.classList.remove("no-scroll-snap")
        document.body.classList.remove("no-scroll-snap")
      }
    }

    const form = formRef.current
    if (!form) return

    form.addEventListener("focusin", handleFocus)
    form.addEventListener("focusout", handleBlur)

    return () => {
      form.removeEventListener("focusin", handleFocus)
      form.removeEventListener("focusout", handleBlur)
      document.documentElement.classList.remove("no-scroll-snap")
      document.body.classList.remove("no-scroll-snap")
    }
  }, [])

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    // Clear error for this field as user types
    setErrors((prev) => ({ ...prev, [name]: undefined }))
    setStatus("idle")
  }

  function validate(values: FormValues): FormErrors {
    const newErrors: FormErrors = {}

    if (!values.name.trim()) {
      newErrors.name = "Name is required."
    }

    if (!values.email.trim()) {
      newErrors.email = "Email is required."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      newErrors.email = "Please enter a valid email."
    }

    if (!values.message.trim()) {
      newErrors.message = "Message is required."
    } else if (values.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters."
    }

    return newErrors
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const validationErrors = validate(values)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    try {
      setIsSubmitting(true)
      setStatus("idle")

      // 👉 Build the form data for Web3Forms
      const formData = new FormData()
      formData.append("access_key", import.meta.env.VITE_WEB3FORMS_API_KEY)
      formData.append("name", values.name)
      formData.append("email", values.email)
      formData.append("message", values.message)
      formData.append("botcheck", "")

      // Optional but recommended:
      formData.append("subject", "New message from ExpertDave.com")
      formData.append("from_name", "ExpertDave.com Contact")

      // 👉 Send to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setStatus("success")
        setValues({ name: "", email: "", message: "" })
      } else {
        console.error(data)
        setStatus("error")
      }
    } catch (err) {
      console.error(err)
      setStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-6 pb-8"
      noValidate
    >
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-primary"
        >
          Name
        </label>
        {/* honeypot field to prevent spam - Web3Forms will flag 
        as spam if filled (bots fill, humans don't)*/}
        <input
          type="text"
          name="botcheck"
          className="hidden"
          style={{ display: "none" }}
          onChange={() => { }} // prevents React warnings
          tabIndex={-1}
        />
        <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          className={`w-full rounded-md border px-3 py-2 bg-main text-primary outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary/60 ${errors.name ? "border-red-500" : "border-border-nav"
            }`}
          placeholder="Your name"
        />
        {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-primary"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          className={`w-full rounded-md border px-3 py-2 bg-main text-primary outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary/60 ${errors.email ? "border-red-500" : "border-border-nav"
            }`}
          placeholder="you@example.com"
        />
        {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-primary"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          className={`w-full rounded-md border px-3 py-2 bg-main text-primary outline-none resize-y focus:ring-2 focus:ring-offset-1 focus:ring-primary/60 ${errors.message ? "border-red-500" : "border-border-nav"
            }`}
          placeholder="Tell me a bit about your project or question..."
        />
        {errors.message && (
          <p className="text-xs text-red-500">{errors.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={isSubmitting}
          className="cursor-pointer inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium border bg-main text-primary disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-60 transition-colors"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-sm text-green-600">
            Thanks! Your message has been sent.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-500">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </form>
  )
}
