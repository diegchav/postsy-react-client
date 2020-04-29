import AuthenticationService from '../services/authentication.service'

export default () => {
    const currentUser = AuthenticationService.getCurrentUser()
    if (currentUser && currentUser.token) {
        return { Authorization: `Bearer ${currentUser.token}`}
    }
    return {}
}