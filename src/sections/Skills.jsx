/* eslint-disable no-unused-vars */
import { CICDIcon, DockerIcon, ExpressIcon, GitIcon, MongoDBIcon, NodeIcon, PostgreSQLIcon, ReactIcon, RESTAPIsIcon, ShadcnIcon, TailwindCSSIcon } from "@/assets/icons.jsx";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SKILLS = {
    Frontend: [
        { name: "React", icon: ReactIcon },
        { name: "TailwindCSS", icon: TailwindCSSIcon },
        { name: "shadcn/ui", icon: ShadcnIcon },
    ],
    Backend: [
        { name: "Node.js", icon: NodeIcon },
        { name: "Express", icon: ExpressIcon },
        { name: "REST APIs", icon: RESTAPIsIcon },
    ],
    Database: [
        { name: "MongoDB", icon: MongoDBIcon },
        { name: "PostgreSQL", icon: PostgreSQLIcon },
    ],
    Infra: [
        { name: "Docker", icon: DockerIcon },
        { name: "Git", icon: GitIcon },
        { name: "CI/CD basics", icon: CICDIcon },
    ],
}


export default function Skills() {
    return (
        <section id="skills" className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4">
            <h2 className="text-2xl md:text-3xl font-semibold">Skills</h2>

            {/* Force 2 columns on md+; roomy gap; single column on mobile */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(SKILLS).map(([group, items]) => (
                <Card
                key={group}
                className="hover:shadow-xl transition-all border-border/80 bg-card/80"
                >
                <CardHeader className="pb-2 md:pb-3">
                    {/* Bigger title for emphasis */}
                    <CardTitle className="text-xl md:text-2xl">{group}</CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                    {/* Bigger rows, roomier spacing */}
                    <ul className="flex flex-col gap-4 md:gap-5">
                    {items.map(({ name, icon: Icon }) => (
                        <li
                        key={name}
                        className="flex items-center gap-4 md:gap-5 text-base md:text-lg font-medium"
                        >
                        {/* No className on SVG; color/size from wrapper + props */}
                        <span className="inline-flex items-center justify-center rounded-lg bg-primary/10 text-primary w-11 h-11 md:w-12 md:h-12">
                            <Icon size={22} />
                        </span>
                        <span>{name}</span>
                        </li>
                    ))}
                    </ul>
                </CardContent>
                </Card>
            ))}
            </div>
        </div>
        </section>
    );
}