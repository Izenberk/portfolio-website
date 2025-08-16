import { useEffect, useState } from "react";

export default function useSectionObserver(ids = []) {
    const [active, setActive] = useState(ids[0] || null);

    useEffect(() => {
        const elems = ids
        .map((id) => document.getElementById(id))
        .filter(Boolean);

        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setActive(entry.target.id);
            }
            });
        },
        {
            // tweak these numbers to control when a section is "active"
            rootMargin: "-40% 0px -55% 0px",
            threshold: [0, 0.25, 0.5, 1],
        }
        );

        elems.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [ids.join(",")]);

    return active;
}
