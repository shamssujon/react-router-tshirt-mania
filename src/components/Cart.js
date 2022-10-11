import React from "react";

const Cart = ({ cart, handleRemoveItem }) => {
    let message;
    if (cart.length === 0) {
        message = <p>No products in cart</p>;
    } else if (cart.length === 1) {
        message = <p>Buy One more item</p>;
    } else {
        message = <p>{cart.length} items selected</p>;
    }

    return (
        <div className="sticky top-0 rounded border bg-white p-6 shadow">
            <h5 className="mb-8 text-xl">Order quantity: {cart.length}</h5>

            <div className="grid gap-3">
                {/* {message} */}
                {/* {cart.length === 0 ? (
                    <p>No products in cart!!</p>
                ) : (
                    <p>{cart.length} products in cart</p>
                )} */}
                {cart.length === 0 && <p>No products in cart!!</p>}
                {cart.length === 0 || <p>some products in cart!!</p>}
                {cart.map((cartProduct) => (
                    <div
                        key={cartProduct._id}
                        className="flex gap-2 overflow-hidden rounded border bg-white">
                        <div className="w-12">
                            <img
                                src={cartProduct.picture}
                                alt=""
                                className="aspect-square h-full w-full object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <h5 className="font-medium">{cartProduct.name}</h5>
                            <p>Price: {cartProduct.price}</p>
                        </div>
                        <button
                            onClick={() => handleRemoveItem(cartProduct)}
                            className="bg-rose-700 p-2 text-white">
                            X
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;

/*
Conditional rendering
1. using if-else
2. Ternary operator -- condition ? true : false
3. && operator -- if condition is true, display an element
3. || operator -- if condition is false, display an element
*/
