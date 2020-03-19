import React from 'react';

const Item = ({ book, removeItem }) => {
	console.log(book)
	return (
		<div className="shopping-cart_item">
			<img src={book.image} alt={`${book.title} book`} />


			<div>
				<h1>{book.title}</h1>
				<p>$ {book.price}</p>
				<button onClick={() => removeItem(book)}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
