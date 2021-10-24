import fs from "fs";
import path from "path";

export default function getScopes(): string[] {
    var scopes: string[] = [];
    fs.readdirSync("roogle-index/set")
        .map(file => path.parse(file).name)
        .sort()
        .forEach(file => scopes.push(`set:${file}`));
    fs.readdirSync("roogle-index/crate")
        .map(file => path.parse(file).name)
        .sort()
        .forEach(file => scopes.push(`crate:${file}`));

    return scopes;
}
