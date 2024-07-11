import { Children, createContext, useState } from "react";

export const context = createContext();


const ContextProvider = ({children}) => {

    const [cartNumber, setCartNumber] =  useState(0);
    const [cartedItems, setCartedItems] =  useState([]);
    const [loggin, setLoggin] =  useState(false);





    return(
        <context.Provider value={{cartNumber, setCartNumber,cartedItems, setCartedItems, loggin, setLoggin}}>
            {
                children
            }
        </context.Provider>
    )
}

export default ContextProvider;