import React, { useReducer } from 'react'
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
    
    const Context = React.createContext( {form: { ...store }} );

    FormProvider = ({ children }) => <Context> { ...children } </Context>//this injects the form props into the component

    return [useField, FormProvider, store]
}