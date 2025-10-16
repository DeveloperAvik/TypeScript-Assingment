enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function getDayType(day: Day): string {
  return  day === Day.Sunday ? "Weekend" : "Weekday";
}

console.log(getDayType(Day.Monday));   
console.log(getDayType(Day.Sunday));
console.log(getDayType(Day.Wednesday));
console.log(getDayType(Day.Saturday));
console.log(getDayType(Day.Friday));
