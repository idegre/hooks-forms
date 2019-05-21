export const HOFUseField = ( dispatch ) => ( name, validators ) => { // HOFUseField => useField
    const validate = ( value ) => {
        validators.forEach( validator => {
            const error = validator(value)
            if (error) {
                return error
            }
        })
    }
    return ( value ) => { // onchange
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
};
