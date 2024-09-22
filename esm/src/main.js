import { api } from "./utils/api.mjs";

for(const character in api) {
    for(const player in api[character]) {
        console.log(`${api[character][player]}`);
    };
};
