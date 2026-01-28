import React, { createContext, useContext, useState } from "react";
import colorData from "./color-data";
import { v4 } from "uuid";

const ColorContext = createContext();

export const useColors = () => useContext(ColorContext);

export function ColorProvider({ children }) {
    const [colors, setColors] = useState(colorData);

    const addColor = (title, color) =>
        setColors([
            ...colors,
            {
                id: v4(),
                rating: 0,
                title,
                color
            }
        ]);

    const rateColor = (id, rating) =>
        setColors(
            colors.map(c =>
                c.id === id ? { ...c, rating } : c
            )
        );

    const removeColor = id =>
        setColors(colors.filter(c => c.id !== id));

    return (
        <ColorContext.Provider
            value={{
                colors,
                addColor,
                rateColor,
                removeColor
            }}
        >
            {children}
        </ColorContext.Provider>
    );
}
