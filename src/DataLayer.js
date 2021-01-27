import 
    React,
    {   
        createContext,
        useContext,
        useReducer
    } 
from 'react'

//1 - creamos el contexto, preparamos la dataLayer
export const DataLayerContext = createContext()

//2 - creamos el dataLayer
//children en este caso es lo que esta encerrado por el DataLayer, es decir APP
export const DataLayer = ({ initialState, reducer, children }) => (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
)

//3 - Necesito algo para ganar acceso al DataLayer
export const useDataLayerValue = () => useContext(DataLayerContext)
