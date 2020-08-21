import { useEffect, useState, useRef } from "react";

export function useNearScreen({
    distance = "100px",
    externalRef,
    once = true,
} = {}) {
    const [isNearScreen, setShow] = useState(false);
    const fromRef = useRef();

    useEffect(() => {
        const element = externalRef ? externalRef.current : fromRef.current;

        const onChange = (entries, observer) => {
            const element = entries[0];
            if (element.isIntersecting) {
                setShow(true);
                once && observer.disconnect();
            } else {
                !once && setShow(false);
            }
        };

        const observer = new IntersectionObserver(onChange, {
            rootMargin: distance,
        });

        if (element) observer.observe(element);

        return () => observer.disconnect();
    });

    return { isNearScreen, fromRef };
}
