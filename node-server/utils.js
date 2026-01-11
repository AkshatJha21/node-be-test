import path from "path";
const __dirname = import.meta.dirname;
import fs from "fs";

export const add = (a, b) => {
    return a + b;
}

export const pathBatao = () => {
    console.log(path.join(__dirname, "files", "text.txt"));
}

export const fileSystum = () => {
    // sync:
    fs.writeFileSync("fs1.txt", "hello sync fs1");

    // async:
    fs.writeFile("fs2.txt", "hello async fs2", err => {
        if (err) console.error(err);
    })
}