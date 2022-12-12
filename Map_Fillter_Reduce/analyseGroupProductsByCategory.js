/* ---------------------------------- TASK ---------------------------------- */
// Implement the groupProductsByCategory() function, which takes an array of
// products as input and returns an array of products grouped by category,
// as given in EXPECTED OUTPUT section bellow

const products = [
	{
		code:1,
		name:"product1",
		category: "music",
		price:1
	},
	{
		code:2,
		name:"product2",
		category: "books",
		price:2
	},
	{
		code:3,
		name:"product3",
		category: "books",
		price:3
	},
	{
		code:4,
		name:"product4",
		category: "music",
		price:4
	}
]

/* -------------------------- EXPECTED OUTPUT ------------------------- */
// {
// 	music: [
// 		{ code: 1, name: 'product1', category: 'music', price: 1 },
// 		{ code: 4, name: 'product4', category: 'music', price: 4 }
// 	],
// 	books: [
// 		{ code: 2, name: 'product2', category: 'books', price: 2 },
// 		{ code: 3, name: 'product3', category: 'books', price: 3 }
// 	]
// }


/* -------------------------- Solution with forLoop ------------------------- */
function groupProductsByCategory_ForLoop(products) {
	let groupedProducts = [];

	for (let i = 0; i < products.length; i++) {
		const product = products[i];
		const category = product.category;

		if( !groupedProducts[category] ){
			groupedProducts[category] = []
		}

		groupedProducts[category].push(product);
	}

	return groupedProducts;
}

/* -------------------------- Solution with Reduce -------------------------- */
function groupProductsByCategory_Reduce(products) {
	return products.reduce((acc, product) => {
		const category = product.category;

		if( !acc[category] ){
			acc[category] = []
		}
		acc[product.category].push(product);
		return acc;
	}, {});
}


// TEST:
console.log( groupProductsByCategory_ForLoop(products) );
console.log( groupProductsByCategory_Reduce(products) );
