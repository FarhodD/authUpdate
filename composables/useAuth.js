export const useAuth = () => {
    const BASE_URL = useRuntimeConfig().public.BASE_URL

    async function login(email, password) {
        const response = await $fetch('auth',
            {
                baseURL: BASE_URL,
                method: 'POST',
                body: {
                    email,
                    password
                }
            }
        )
        const { data, token } = response
        saveToStorage('token', token)
        saveToStorage('user', data)
    }

    async function register(username, email, password) {
        const response = await $fetch('register',
            {
                baseURL: BASE_URL,
                method: 'POST',
                body: {
                    username,
                    email,
                    password,
                }
            }
        )
        const { data, token } = response
        saveToStorage('token', token)
        saveToStorage('user', data)
    }

    async function getUsers() {
        const token = getTokenValue('token')
        if (token) {
            const response = await $fetch('users',
                {
                    baseURL: BASE_URL,
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            )
            return response
        }
    }

    function logout() {
        removeFromStorage('token')
        removeFromStorage('user')
    }

    return {
        login,
        register,
        getUsers,
        logout
    }
}