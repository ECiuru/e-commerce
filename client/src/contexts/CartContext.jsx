import { createContext, useContext, useState } from "react";

const cartCtx = createContext();

export default function CartCtxProvider({ children })
{
    const [cart, setCart] = useState([]);

    const addToCart = (id) => {
        setCart((prev) => {
            const productExists = prev.find((product) => product.id === id);

            if (!productExists)
            {
                return [
                    ...prev,
                    {
                        id,
                        quantity: 1
                    }
                ];
            }
            else
            {
                return prev;
            }
        });
    };

    const changeQuantity = (id, type) => {
        setCart((prev) => {
            return prev.map((product) => {
                if (product.id === id)
                {
                    let quantity = product.quantity;

                    switch (type)
                    {
                        case "increment":
                            quantity += 1;
                            break;
                        case "decrement":
                            quantity = quantity > 1 ? quantity - 1 : quantity;
                            break;
                    }

                    return {
                        ...product,
                        quantity
                    }
                }
                else
                {
                    return product;
                }
            });
        });
    };

    const deleteFromCart = (id) => {
        setCart((prev) => {
            return prev.filter((product) => product.id !== id);
        });
    };

    return (<cartCtx.Provider value={{ cart, addToCart, changeQuantity, deleteFromCart }}>
        { children }
    </cartCtx.Provider>);
}

export const useCartCtx = () => useContext(cartCtx);