function processValue(value: string | number): number {
  return typeof value === "string" ? value.length : value * 2;
}


console.log(processValue("hello")); 
console.log(processValue(10));      
console.log(processValue("Avik")); 