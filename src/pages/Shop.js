import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../components/Cart";
import ProductCard from "../components/ProductCard";

const Shop = () => {
    const products = useLoaderData();
    const [cart, setCart] = useState([]);
    const handleAddToCart = (product) => {
        const exists = cart.find((selectedProduct) => selectedProduct._id === product._id);
        if (exists) {
            alert("already added this product");
        } else {
            const newCart = [...cart, product];
            setCart(newCart);
        }
    };

    const handleRemoveItem = (cartProduct) => {
        const remaining = cart.filter((selectedProduct) => selectedProduct._id !== cartProduct._id);
        setCart(remaining);
    };

    return (
        <div className="bg-slate-50 py-20">
            <div className="container">
                <h2 className="mb-8 text-4xl font-semibold">Latest Products</h2>
                <div className="grid grid-cols-4 gap-8">
                    <div className=" col-span-3  grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {products.map((product) => (
                            <ProductCard
                                key={product._id}
                                product={product}
                                handleAddToCart={handleAddToCart}></ProductCard>
                        ))}
                    </div>
                    <div className="">
                        <Cart cart={cart} handleRemoveItem={handleRemoveItem}></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
