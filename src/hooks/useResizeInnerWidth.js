import { useEffect, useState, useRef } from "react";
import { reCalculatePageSize } from "../utils/reCalculatePageSize";

export function useResizeInnerWidth(type) {
    const [innerWidth, setInnerWidth] = useState(null);
    const [pageSize, setPageSize] = useState(null);
    const debounceTimer = useRef(null);

    useEffect(() => {
        setInnerWidth(window.innerWidth);

        function handleResize() {
            if (debounceTimer.current) clearTimeout(debounceTimer.current);
            debounceTimer.current = setTimeout(() => {
                setInnerWidth(window.innerWidth)
            }, 300);
        }

        window.addEventListener('resize', handleResize);

        return (() => {
            clearTimeout(debounceTimer.current);
            window.removeEventListener('resize', handleResize);
        })
    }, []);

    useEffect(() => {
        if (innerWidth === null) return;

        const newPageSize = reCalculatePageSize(type, innerWidth)
        setPageSize(newPageSize)
    }, [innerWidth, type]);

    return [pageSize]
}

