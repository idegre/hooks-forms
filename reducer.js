

export const reducer = (state, {type, payload}) => {

    switch (type) {
        case 'ADD_FIELD':
            return {
                ...state,
                fields: {
                    ...state.fields,
                    [payload]: {
                        touched: false
                    }
                }
            }

        case 'CHANGE_VALUE':
            return {
                ...state,
                fields: {
                    [payload.name]: {
                        value: payload.value,
                        touched: true
                    }
                },
                pristine: false
            }

        case 'SET_ERROR':
            return {
                ...state,
                fields: {
                    [payload.name]: {
                        ...state.fields[payload.name],
                        error: payload.errors
                    }
                },
                hasError: !!payload.errors
            }

        case 'CLEAR_FORM':
            const newState = { ...state }
            const fields = Object.keys(state.fields)
            fields.forEach(field => newState = {
                ...newState,
                fields: {
                    ...newState.fields,
                    [field]: {}
                }
            })
            return {
                ...newState
            }
    
        default:
            return { ...state }
    }
    return {}
}