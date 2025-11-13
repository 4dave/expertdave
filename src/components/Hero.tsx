import Nerd from "../assets/nerd-600.png"

export default function HomeHero() {
  return (
    <section className="min-h-[70vh] px-4 py-24 bg-slate-950 text-slate-100">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LEFT COLUMN */}
        <div className="space-y-6">
          {/* Super Nerd Card */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-lg flex items-center gap-4">
            <div className="relative shrink-0">
              {/* Replace src with your own image */}
              <img
                src={Nerd}
                alt="Super nerd at the keyboard"
                className="size-12 rounded-2xl object-cover border border-slate-700"
              />
              <span className="absolute -top-2 -right-2 bg-emerald-500 text-xs font-semibold px-2 py-0.5 rounded-full shadow-md">
                Available for work
              </span>
            </div>

            <div>
              <h2 className="text-lg font-semibold flex items-center gap-2">
                Super Nerd Mode
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              </h2>
              <p className="mt-1 text-sm text-slate-300">
                I design and build robust, performant web experiences from UI to
                backend.
              </p>
              <p className="mt-2 text-xs uppercase tracking-wide text-slate-400">
                React • TypeScript • Next.js • Go • PostgreSQL
              </p>
            </div>
          </div>

          {/* Bullet Points / What I Do Card */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-lg">
            <h3 className="text-base font-semibold mb-3">
              What I can help with
            </h3>
            <ul className="space-y-2 text-sm text-slate-200">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  Frontend engineering with React, TypeScript, and modern
                  tooling.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  Building fast, accessible, and responsive UI for web apps.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  Full-stack solutions: APIs, databases, and deployment
                  pipelines.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  Technical deep-dives, debugging, and performance tuning.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT COLUMN – CONTACT FORM */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-lg flex flex-col">
          <h3 className="text-base font-semibold mb-1">Let’s work together</h3>
          <p className="text-sm text-slate-300 mb-4">
            Have a project, role, or idea you&apos;d like to talk about? Drop a
            note and I&apos;ll get back to you.
          </p>

          <form
            className="space-y-4 mt-2"
            onSubmit={(e) => {
              e.preventDefault()
              // TODO: wire this up to email / backend / form service
              alert(
                "Thanks for reaching out! (Hook this up to something real 🙂)"
              )
            }}
          >
            <div className="space-y-1">
              <label
                htmlFor="name"
                className="block text-xs font-medium uppercase tracking-wide text-slate-300"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                className="w-full rounded-xl bg-slate-950/80 border border-slate-700 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Jane Doe"
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="email"
                className="block text-xs font-medium uppercase tracking-wide text-slate-300"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full rounded-xl bg-slate-950/80 border border-slate-700 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="you@example.com"
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="message"
                className="block text-xs font-medium uppercase tracking-wide text-slate-300"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                required
                className="w-full rounded-xl bg-slate-950/80 border border-slate-700 px-3 py-2 text-sm outline-none resize-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Tell me a bit about what you're looking for..."
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center w-full mt-2 rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition-colors"
            >
              Send message
            </button>
          </form>

          <p className="mt-4 text-xs text-slate-400">
            Prefer email?{" "}
            <a
              href="mailto:you@example.com"
              className="underline underline-offset-2 hover:text-emerald-400"
            >
              you@example.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
