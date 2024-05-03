import { isAuth } from "~/constants"


export default defineNuxtRouteMiddleware((to) => {
    const token = getTokenValue('token')
    if (!token) {
        return navigateTo('/login')
    }
    isAuth.value = true
})