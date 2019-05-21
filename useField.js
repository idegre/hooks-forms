import { useReducer } from 'react'
import reducer from './reducer'
import { addField } from './actions'

const [, dispatch] = useReducer(reducer)

export const useField = (fieldName, validators) => {
    //function to add fields to the form
    dispatch(addField(fieldName))

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
            dispatch(changeValue({value, name}))
            dispatch(setFieldErrors({errors: null, name}))
            //this has to change value & set touched
        } else {
            dispatch(changeValue({value, name}))
            dispatch(setFieldErrors({errors, name}))
            // changes value & sets errors
        }
    }

    return [ onChange ]
}
