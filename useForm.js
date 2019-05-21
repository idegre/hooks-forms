import React, { useReducer } from 'react'
import { reducer } from './reducer'
import { types } from './types'

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

    
    return [hofUseField(dispatch), FormProvider, formState]
}