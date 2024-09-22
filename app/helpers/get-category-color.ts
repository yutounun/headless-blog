const categoryColorMap = new Map();

categoryColorMap.set("Product Reviews", "orange");
categoryColorMap.set("Travel Guides", "yellow");
categoryColorMap.set("Opinions", "green");

const getCategoryColor = (category: string) => {
  return categoryColorMap.get(category);
};

export default getCategoryColor;
