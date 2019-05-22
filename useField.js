import React, { useReducer } from 'react'
import reducer from './reducer'
import { addField } from './actions'

const [store, dispatch] = useReducer(reducer, initialState, init)

export const useField = (fieldName, validators) => {
    //function to add fields to the form
    dispatch(addField(fieldName))

    const changeDispatch = () => dispatch()

    return [ HOFonChange(fieldName, validators, changeDispatch) ]
}
