"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLocalStorage = void 0;
const vue_1 = require("vue");
function useLocalStorage(key, defaultValue) {
    const storedValue = localStorage.getItem(key);
    const data = (0, vue_1.ref)(storedValue ? JSON.parse(storedValue) : defaultValue);
    (0, vue_1.watchEffect)(() => {
        localStorage.setItem(key, JSON.stringify(data.value));
    });
    return data;
}
exports.useLocalStorage = useLocalStorage;
