import { useState, useCallback, useMemo } from "react";

export const useIterator = (items = [], initialValue = 0) => {
    const [i, setIndex] = useState(initialValue);

    const prev = useCallback(() => {
        setIndex(i === 0 ? items.length - 1 : i - 1);
    }, [i, items.length]);

    const next = useCallback(() => {
        setIndex(i === items.length - 1 ? 0 : i + 1);
    }, [i, items.length]);

    const item = useMemo(() => items[i], [i, items]);

    return [item || items[0], prev, next];
};
