import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { AuroraText } from "@/components/magicui/aurora-text";

export default function Hero() {
    return (

        <section id="home" className="pt-20 md:pt-28 min-h-[100dvh]">
        <div className="mx-auto max-w-5xl px-4 grid gap-8 pt-4 justify-center items-center">
            <div>
            <span className="text-foreground/80 text-sm py-2 flex justify-center">BUILDING END-TO-END WEB SOLUTIONS</span>
            <h1 className="text-3xl md:text-5xl text-center font-bold leading-tight">Transforming Ideas into 
                <br /> Seamless 
                <AuroraText colors={["#18337D", "#2C5DE3", ]}>Full-Stack Experiences</AuroraText>
            </h1>
            <p className="mt-4 text-foreground/80">Hi! I'm Korn, a Full Stack Developer crafting fast, responsive UIs and robust, scalable backends.</p>
            <div className="mt-6 flex gap-3 justify-center">
                <a href="#projects" className="inline-flex items-center px-5 py-3 rounded-lg bg-primary text-primary-foreground">View Projects</a>
                <a href="/BB_CV.pdf" className="inline-flex items-center px-5 py-3 rounded-lg border border-border">Download CV</a>
            </div>
            </div>
            
        </div>
        </section>
    );
}