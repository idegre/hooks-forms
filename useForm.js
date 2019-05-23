import React, { useReducer } from 'react'
import { reducer } from './reducer'
import { HOFUseField } from './hofUseField'
import { hofFormProvider } from './context'

export const useForm = () => {

    const initialState = {
        fields: {},
        hasErrors: false,
        pristine: false,
    }
    
    const [store, dispatch] = useReducer(reducer, initialState)

    console.log('store', store)

    const FormProvider = hofFormProvider(store)//this injects the form props into the component

    const useField = HOFUseField(dispatch, store)

    return [useField, FormProvider, store]
}