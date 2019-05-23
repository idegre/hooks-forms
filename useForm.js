import React, { useReducer, Fragment } from 'react'
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

    FormProvider = ({ children }) => <Fragment> { children.map( Child => <Child {...store} />) } </Fragment>//this injects the form props into the component

    return [useField, FormProvider, store]
}