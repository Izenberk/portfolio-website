import { Button } from "@/components/ui/button"
import { AnimatedGridPattern } from "./components/magicui/animated-grid-pattern"
import Header from "./components/Header"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Skills from "./sections/Skills"

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <Skills />
    </div>
  )
}

export default App
