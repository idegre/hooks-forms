import React, { useReducer } from 'react'
import { addField, changeValue, setFieldErrors } from './actions'

export const HOFUseField = ( dispatch, state ) => ( fieldName, validators = [] ) => { // HOFUseField => useField
    !state.fields[fieldName] && dispatch( addField( fieldName ))

    const validate = ( value ) => {
        validators && validators.forEach( validator => {
            const error = validator(value)
            if (error) {
                return error
            }
        })
    }

    return ( value ) => { // onchange
        const errors = validators ? validate( value ) : null
        if ( !errors ) {
            dispatch( changeValue( value, fieldName ))
            dispatch( setFieldErrors( [], fieldName ))
            //this has to change value & set touched
        } else {
            dispatch( changeValue( value, fieldName ))
            dispatch( setFieldErrors( errors, fieldName ))
            // changes value & sets errors
        }
    }
};
