export default function Contact() {
    return (
        <section id="contact" className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4">
            <h2 className="text-2xl md:text-3xl font-semibold">Let’s Connect</h2>
            <p className="mt-2 text-foreground/80">Bangkok, Thailand • Available for junior full‑stack roles</p>
            <div className="mt-6 flex flex-wrap gap-3">
            <a href="mailto:you@email" className="inline-flex px-4 py-2 rounded-lg bg-primary text-primary-foreground">Email</a>
            <a href="https://github.com/Izenberk" className="inline-flex px-4 py-2 rounded-lg border border-border">GitHub</a>
            <a href="https://www.linkedin.com/in/korn-aphichit-ngaopan" className="inline-flex px-4 py-2 rounded-lg border border-border">LinkedIn</a>
            </div>
        </div>
        </section>
    );
}