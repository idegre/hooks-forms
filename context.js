import React, { createContext, Fragment } from 'react'

const {Provider, Consumer} = createContext('formContext')

export const hofFormProvider = (form) => ({children}) => <Provider value={{...form}}>
    <Consumer>
        {children}
    </Consumer>
</Provider>