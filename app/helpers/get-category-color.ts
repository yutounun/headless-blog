const categoryColorMap = new Map();

categoryColorMap.set("Technology", "orange");
categoryColorMap.set("Life", "yellow");
categoryColorMap.set("LeetCode", "green");

const getCategoryColor = (category: string) => {
  return categoryColorMap.get(category);
};

export default getCategoryColor;
