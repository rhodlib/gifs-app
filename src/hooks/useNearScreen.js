import { useEffect, useState, useRef } from "react";

export function useNearScreen({ distance = "100px" } = {}) {
    const [isNearScreen, setShow] = useState(false);
    const fromRef = useRef();

    useEffect(() => {
        const onChange = (entries, observer) => {
            const element = entries[0];
            if (element.isIntersecting) {
                setShow(true);
                observer.disconnect();
            }
        };
        const observer = new IntersectionObserver(onChange, {
            rootMargin: distance,
        });

        observer.observe(fromRef.current);

        return () => observer.disconnect();
    });

    return { isNearScreen, fromRef };
}
