const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];  

// Get published courses
const publishedCourses=courses.filter(course=>course.published);
console.log('publishedCourses',publishedCourses)

// Sort courses by price (high → low)
const sortedByPriceDesc=[...publishedCourses].sort(
  (a,b)=>b.price-a.price
);
console.log('sortedByPriceDesc',sortedByPriceDesc);

// Extract { title, price } only
const courseSummaries=sortedByPriceDesc.map(({title,price})=>({
  title,price
}));
console.log('courseSummaries',courseSummaries);

// Calculate total value of published courses
const totalValue=publishedCourses.reduce(
  (sum,course)=>sum+course.price,0
);
console.log('totalValue',totalValue);

// Add a new course immutably
const newCourse={
  id:104,
  title:"TypeScript",
  price:1599,
  published:true
};
const updatedCourses=[...courses, newCourse];
console.log('updatedCourses',updatedCourses);