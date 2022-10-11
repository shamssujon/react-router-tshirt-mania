import React from "react";

const ProductCard = ({ product, handleAddToCart }) => {
    const { name, picture, price } = product;
    return (
        <div className="flex flex-col justify-between space-y-4 overflow-hidden rounded-md bg-white shadow">
            <div className="aspect-square overflow-hidden px-4 pt-4">
                <img src={picture} alt="" className="h-full w-full object-contain" />
            </div>
            <div className="flex-1 px-4">
                <h4 className="text-2xl">{name}</h4>
                <p className="text-lg">
                    Price: <span className="font-medium text-yellow-600">${price}</span>
                </p>
            </div>
            <div className="">
                <button
                    onClick={()=>handleAddToCart(product)}
                    className="flex w-full items-center justify-center gap-2 bg-emerald-600 py-3 px-4 font-semibold uppercase text-white hover:bg-emerald-700 active:bg-emerald-800">
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
