const data = [
    {
        id: 1,
        title: "Stranger Scrims", 
        duration: 40, 
        tags: ["supernatural", "horror", "drama"], 
    },
    {
        id: 2,
        title: "The Scrim of the Dragon", 
        duration: 60, 
        tags: ["drama", "fantasy"], 
    },
    {
        id: 3,
        title: "Scrim Hunters", 
        duration: 22, 
        tags: ["reality", "home improvement"], 
    },
    {
        id: 4,
        title: "This Old Scrim", 
        duration: 30, 
        tags: ["reality", "home improvement"], 
    },
    {
        id: 5,
        title: "What We Do in the Scrim", 
        duration: 55, 
        tags: ["drama", "comedy", "supernatural"], 
    },
    {
        id: 6,
        title: "The Scrimdalorian", 
        duration: 58, 
        tags: ["fantasy", "sci-fi", "adventure"], 
    },
];
 // Create an empty Set to store unique tags
function getUniqueTags(data) {
  const uniqueTagsSet = new Set();
  // loop through the data array and add tags to the Set we created
  data.forEach((item) => {
    item.tags.forEach((tag) => {
      uniqueTagsSet.add(tag);
    });
  });
  // Convert the Set back to an array and return the result
  return Array.from(uniqueTagsSet);
}

const uniqueTags = getUniqueTags(data);
console.log(uniqueTags);