import { createContext, useContext } from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";

export const OrderContext = createContext();

export const OrderProvider = ({
    children,
}) => {
    let [order, setOrder] = useLocalStorage('order', []);

    const newUser = () => {
        setOrder([]);
    }

    const addProduct = (orderData) => {
        setOrder([...order, orderData]);
    };

    const removeProduct = (orderData) => {
        const newOrder = order.filter(x => x.title !== orderData.title);
        setOrder(newOrder);
    }

    const removeOrder = () => {
        setOrder([]);
    };

    return (
        <OrderContext.Provider value={{
            order,
            addProduct,
            removeOrder,
            removeProduct,
            newUser
        }}>
            {children}
        </OrderContext.Provider>
    )
};

export const useOrderContext = () => {
    const context = useContext(OrderContext);
    return context;
};