const PROJECTS = [
    {
        slug: "hugpaw",
        title: "HugPaw Ecommerce",
        summary: "MERN + vite ecommerce store with catalog, cart, auth, admin, and mock payment.",
        stack: ["React", "Vite", "Tailwind", "Express", "MongoDB", "shadcn/ui"],
        links: { demo: "#", repo: "#" },
        image: "public/images/hugpaw_01.png",
        contributors: "JSD Bootcamp Team",
    },
    {
        slug: "devlink",
        title: "DevLink",
        summary: "Developer portfolio builder with CRUD and clean UI.",
        stack: ["React", "Node", "MongoDB", "Tailwind", "shadcn/ui"],
        links: { demo: "#", repo: "#" },
        image: "public/images/devlink_01.png",
        contributors: "Solo",
    },
]

export default function Projects() {
    return (
        <section id="projects" className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4">
            <h2 className="text-2xl md:text-3xl font-semibold">Projects</h2>
            <div className="mt-6 grid gap-6">
            {PROJECTS.map((p) => (
                <article key={p.slug} className="group rounded-2xl border border-border overflow-hidden bg-card">
                <div className="bg-surface border-b border-border"></div>
                    <img src={p.image} alt={p.slug} />
                <div className="p-4">
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm text-foreground/80">{p.summary}</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                        <li key={t} className="px-2 py-1 rounded bg-surface text-sm border border-border">{t}</li>
                    ))}
                    </ul>
                    <div className="mt-4 flex gap-3">
                    <a href={p.links.demo} className="text-accent hover:underline">Demo</a>
                    <a href={p.links.repo} className="text-accent hover:underline">Source</a>
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">Contributors: {p.contributors}</p>
                </div>
                </article>
            ))}
            </div>
        </div>
        </section>
    );
}