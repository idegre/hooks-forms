

export const reducer = (state, {type, payload}) => {
    switch (type) {
        case 'username':
            return {
                state: username,
                playload
            }
    
        default:
            return { ...state }
    }
}