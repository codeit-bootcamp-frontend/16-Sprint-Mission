import { useEffect, useState, useRef } from "react";
import { reRequestByInnerWidth } from "../utils/responsivePageSize";

export function useResizeRequest(type) {
    const [innerWidth, setInnerWidth] = useState(null);

    const [pageSize, setPageSize] = useState(1);
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
        const newPageSize = reRequestByInnerWidth(type, innerWidth)
        setPageSize(newPageSize)
    }, [innerWidth]);

    return [pageSize]
}

