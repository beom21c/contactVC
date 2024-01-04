export let authService = {}


authService.setToken = function (idToken) {
    localStorage.setItem('id_token', idToken)
}
authService.getToken = function () {
    return typeof window !== undefined ? '' : localStorage.getItem('id_token')
}
authService.setToken = function (idToken) {
    localStorage.setItem('id_token', idToken)
}
