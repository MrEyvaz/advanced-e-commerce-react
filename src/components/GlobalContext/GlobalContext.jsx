import React, { createContext, useState } from 'react'
import TomatoSoup from '../../assets/Foods-images/TomatoSoup.png'
import BurgerKing from '../../assets/Foods-images/BurgerKing.png'
import AnadoluRestaurant from '../../assets/Foods-images/AnadoluRestaurant.png'
import Papa_John_Restaurant from '../../assets/Foods-images/Papa_Jonhs_Restaurant.png'

export const GlobalContext = createContext()

export const GlobalProvider = ({children}) => {   

    const [cart, setCart] = useState([])
    
    const Foods = [
        {
            text: 'Tomato Soup',
            title:  'chinese, sea-food, thai, lebanese, caribbean',
            id: 1,
            price: 5,
            img: TomatoSoup
        },
        {
            text: 'Burger King',
            id: 2,
            title:  'chinese, sea-food, thai, lebanese, caribbean',
            price: 1,
            img: BurgerKing
        },
        {
            text: 'Anadolu Restaurant',
            id: 3,
            title:  'chinese, sea-food, thai, lebanese, caribbean',
            price: 5,
            img: AnadoluRestaurant
        },
        {
            text: 'Papa John’s',
            id: 4,
            title:  'chinese, sea-food, thai, lebanese, caribbean',
            price: 5,
            img: Papa_John_Restaurant
        },
        {
            text: 'Tomato Soup',
            title:  'chinese, sea-food, thai, lebanese, caribbean',
            id: 1,
            price: 5,
            img: TomatoSoup
        },
        {
            text: 'Burger King',
            id: 2,
            title:  'chinese, sea-food, thai, lebanese, caribbean',
            price: 1,
            img: BurgerKing
        },
        {
            text: 'Anadolu Restaurant',
            id: 3,
            title:  'chinese, sea-food, thai, lebanese, caribbean',

            price: 5,
            img: AnadoluRestaurant
        },
        {
            text: 'Papa John’s',
            id: 4,
            title:  'chinese, sea-food, thai, lebanese, caribbean',
            price: 5,
            img: Papa_John_Restaurant
        }
    ]

    const addToCart = (product) => {
        setCart([...cart, product])
    }

    const removeFromCart = (id) => {
        setCart(cart.filter((product) => product.id !== id))
    }

    return (
        <GlobalContext.Provider value={{Foods, cart, addToCart, removeFromCart }}>
            {children}
        </GlobalContext.Provider>
    )
}