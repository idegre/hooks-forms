export const addField = fieldName => ({type: 'ADD_FIELD', payload: fieldName})
export const changeValue = (value, name) => ({type: 'CHANGE_VALUE', payload: { value, name }})
export const setFieldErrors = (errors, name) => ({type: 'SET_ERROR', payload: { errors, name }})