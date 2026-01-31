import { useEffect, useState } from "react";

export function useStorageListener(key: string) {
    const [value, setValue] = useState(sessionStorage.getItem(key));

    useEffect(() => {
        const handleStorageChange = (event: StorageEvent) => {
            if (event.key === key) setValue(event.newValue);
        };

        const originalSetItem = sessionStorage.setItem;
        sessionStorage.setItem = function (k, v) {
            originalSetItem.apply(this, [k, v]);
            if (k === key) {
                window.dispatchEvent(
                    new StorageEvent("storage", { key, newValue: v })
                );
            }
        };

        window.addEventListener("storage", handleStorageChange);
        return () => {
            window.removeEventListener("storage", handleStorageChange);
            sessionStorage.setItem = originalSetItem; // Reset setItem override
        };
    }, [key]);

    return value;
}
