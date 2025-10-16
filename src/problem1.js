function formatString(input, toUpper) {
    if (toUpper === void 0) { toUpper = true; }
    return toUpper ? input.toUpperCase() : input.toLowerCase();
}
console.log(formatString("Hello"));
console.log(formatString("Hello", true));
console.log(formatString("Hello", false));
