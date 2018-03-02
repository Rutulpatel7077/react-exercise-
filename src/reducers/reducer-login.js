const initialState = {
    inputUsername: '',
    inputPassword: '',
    fixedUsername: 'admin',
    fixedPassword: 'admin',
    isLoggedIn: false,
    isAdmin: false
}

export default function(state = initialState, action) {

    switch (action.type) {

        case 'USER_NAME_INSERT':
            return Object.assign(state, {
                inputUsername: action.inputUsername
            })
            break;
        case 'PASSWORD_INSERT':
            return Object.assign(state, {
                inputPassword: action.inputPassword
            })
            break;
        case 'IS_LOGGED_IN':
            return Object.assign(state, {
                isLoggedIn: action.isLoggedIn
            })
            break;
        case 'IS_LOGGED_OUT':
            return Object.assign(state, {
                isLoggedIn: action.isLoggedIn
            })

            break;
        default:

    }
    return state;


}
