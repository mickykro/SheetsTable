import { PieDataComponent } from "../entities/PieDataComponent";

export const countOccurrences = (data) => {
    const headers = data[0];
    const counts = {};

    for (let i = 0; i < headers.length; i++) {
        counts[headers[i]] = {};
    }

    for (let i = 1; i < data.length; i++) {
        for (let j = 0; j < headers.length; j++) {
            const header = headers[j];
            const value = data[i][j];
            if (!counts[header][value]) {
                counts[header][value] = new PieDataComponent(1,value)
            } else {
                counts[header][value].raiseCount()
            }
        }
    }

    const resultArray = Object.entries(counts).map(([key, value]) => {
        return {
            [key]: value,
        };
    });

    return resultArray;
};





export function randomColor() {
    // Generate random values for red, green and blue channels
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // Combine the channels into a CSS color string
    return `rgb(${r}, ${g}, ${b})`;
}