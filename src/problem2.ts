function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
  return items.filter(item => item.rating >= 4);
}

const books = [
  { title: "11 rules of life", rating: 4.5 },
  { title: "Auto biography of Avik", rating: 5.0 },
  { title: "Ego is the enemy", rating: 3.2 },
  { title: "How to talk with a tar chera Girl", rating: 5.0 },
  { title: "", rating: 3.2 },
];

console.log(filterByRating(books));
