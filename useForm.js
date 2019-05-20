import React, { useReducer } from 'react'
import { reducer } from './reducer'
import { types } from './types'
import { addField } from './actions'

export const useForm = () => {
    
    const initialState = {
        form: {
            fields: {},
            clear: () => {} // TODO
            
        }
    }
    
    const [store, dispatch] = useReducer(reducer, initialState)
    
    const Context = React.createContext( {form: { ...store }} );

    FormProvider = ({children}) => <Context>{...children}</Context>//this injects the form props into the component

    const useField = (fieldName, validators) => { // esto tendria que estar en un contructor o importado
        //function to add fields to the form
        dispatch(addField(fieldName))
    }

    return [useField, FormProvider]
}