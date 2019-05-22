

export const reducer = (state, {type, payload}) => {
    switch (type) {
        case 'username':
            return {
                state: username,
                playload
            }

        case 'pass':
            return {
                state: password,
                payload
            }
    
        default:
            return { ...state }
    }
}