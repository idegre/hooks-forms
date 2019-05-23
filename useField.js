import { useReducer } from 'react'
import { reducer } from './reducer'
import { addField, changeValue, setFieldErrors } from './actions'


export const useField = (fieldName, validators) => {
    const [state, dispatch] = useReducer(reducer)
    //function to add fields to the form
    !state.fields[fieldName] && dispatch(addField(fieldName))

    const validate = ( value ) => {
        validators.forEach( validator => {
            const error = validator(value)
            if (error) {
                return error
            }
        })
    }
    const onChange = ( value ) => {
        const errors = validate(value)
        if ( !errors ) {
            dispatch(changeValue(value, fieldName))
            dispatch(setFieldErrors({errors: null, fieldName}))
            //this has to change value & set touched
        } else {
            dispatch(changeValue(value, fieldName))
            dispatch(setFieldErrors(errors, fieldName))
            // changes value & sets errors
        }
    }

    return [ onChange ]
}
