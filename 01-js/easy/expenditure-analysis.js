/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let map = {};
  for(let i=0;i<transactions.length;i++){
    if(map[transactions[i]['category']]){
      map[transactions[i]['category']] += transactions[i]['price'];
    }else{
      map[transactions[i]['category']] = transactions[i]['price'];
    }
  }
  let ans = [];
  for(const key in map){
    ans.push({category:key,totalSpent:map[key]});
  }
  return ans;
}

module.exports = calculateTotalSpentByCategory;
