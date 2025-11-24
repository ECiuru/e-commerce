import { createBrowserRouter } from "react-router";

import MainLayout from "./layouts/MainLayout";
import Product from "./pages/Product";
import Category from "./pages/Category";
import Order from "./pages/Order";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";

export const router = createBrowserRouter([

    {
        Component: MainLayout,
        children:[
            {
                index: true,
                Component: Home
            } ,
            {
                path: "product/:id",
                Component: Product
            }, 
            {
                path: "category/:id", 
                Component: Category
            } ,
            {
                path: "order", 
                Component: Order
            },
            {
                path: "cart",
                Component: Cart
            }, 
            {
                path: "contacts",
                Component: Contacts
            }
        ]
    }
])