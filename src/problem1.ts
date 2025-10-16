function formatString(input: string, toUpper: boolean = true): string {
  return toUpper ? input.toUpperCase() : input.toLowerCase();
}

console.log(formatString("Avik"));        
console.log(formatString("avik", true));  
console.log(formatString("avik", false)); 