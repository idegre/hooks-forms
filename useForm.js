import React, { useReducer, useContext } from 'react'
import { reducer } from './reducer'
import { useField } from './useField'

export const useForm = () => {

    const initialState = {
        fields: {},
        clear: () => {}, // TODO
        hasErrors: false,
        submit: () => {}, //TODO
        pristine: false,
    }
    
    const [store, dispatch] = useReducer(reducer, initialState)
    // The context must be in context folder cause should be global
    const Context = React.createContext( {form: { ...store }} );

    FormProvider = ({ children }) => <Context.Provider> { ...children } </Context.Provider>//this injects the form props into the component

    return [useField, FormProvider, store]
}