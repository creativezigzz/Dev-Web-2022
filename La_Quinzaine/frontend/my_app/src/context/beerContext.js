import React, {createContext, useState} from 'react';

const BeerContext = createContext(null);
const {Provider} = BeerContext;

const BeerProvider = ({children}) => {
    const [beerList, setBeerList] = useState([]);
    const [typeList, setTypeList] = useState([])
    const [avis, setAvis] = useState([])

    return (
        <Provider value={{
            avis,
            setAvis,
            beerList,
            setBeerList,
            typeList,
            setTypeList
        }}>
            {children}
        </Provider>
    )
}
