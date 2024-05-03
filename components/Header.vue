<script setup>
import { isAuth } from '../constants'
const router = useRouter()
const { logout } = useAuth()

function onLogout() {
    logout()
    router.push('/login')
    isAuth.value = false
}
</script>

<template>
    <header class="bg-primaryColor min-h-12 w-full flex items-center">
        <nav class="flex justify-end w-3/4 mx-auto">
            <ul v-if="!isAuth" class="flex gap-5 text-white font-medium text-lg">
                <li>
                    <NuxtLink to="/register">Регистрация</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/login">Вход</NuxtLink>
                </li>
            </ul>
            <button v-else @click="onLogout" class="flex items-center gap-4">
                <NuxtLink class="text-white font-medium text-lg">
                    Выйти
                </NuxtLink>
            </button>
        </nav>
    </header>
</template>
