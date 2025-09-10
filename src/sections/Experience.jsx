export default function Experience() {
    return (
      <section id="experience" className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Experience & Education</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-border p-4">
              <h3 className="font-medium">Junior Software Developer Bootcamp — Generation</h3>
              <p className="text-sm text-foreground/80 mt-1">Full‑stack MERN curriculum, Agile collaboration, capstone projects.</p>
            </div>
            <div className="rounded-xl border border-border p-4">
              <h3 className="font-medium">Derivatives Trader → Full‑Stack Developer</h3>
              <p className="text-sm text-foreground/80 mt-1">Translating rigor, speed, and systems thinking into software delivery.</p>
            </div>
          </div>
        </div>
      </section>
    );
}