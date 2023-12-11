/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  
  const categoryTotal = {};

  for (let i = 0; i < transactions.length; i++) {
    const { category, price } = transactions[i];
    
    console.log(category + ","+price + ","+JSON.stringify(transactions[i])  );
    
   
    console.log("pujith : "+categoryTotal);
    // console.log(categoryTotal);
      // If the category is not in the object, initialize it with the current transaction's price
      if (!categoryTotal[category]) {
        categoryTotal[category] = price;
      } else {
        // If the category is already in the object, add the current transaction's price to the existing total
        categoryTotal[category] += price;
      }
    };
  
    // Convert the object to an array of objects for the desired output format
    let result = [];
    let resultIndex = 0;
    const categories = Object.keys(categoryTotal);
    for (let i = 0; i < categories.length; i++) {
      const category = categories[i];
      const totalSpent = categoryTotal[category];
      const categoryObject = {
        category: category,
        totalSpent: totalSpent
      };
      result[resultIndex++] = categoryObject;
    }
   
      
    console.log(JSON.stringify(result) + " result"); // format notcorrect
    return result;
}
// calculateTotalSpentByCategory();
module.exports = calculateTotalSpentByCategory;
