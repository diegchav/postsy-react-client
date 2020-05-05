import AuthService from '../services/auth.service'

export default () => {
    const currentUser = AuthService.getCurrentUser()
    if (currentUser && currentUser.token) {
        return { Authorization: `Bearer ${currentUser.token}`}
    }
    return {}
}