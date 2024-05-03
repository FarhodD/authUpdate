<script setup>
const { login } = useAuth()
const router = useRouter()

const email = ref('')
const password = ref('')
const loading = ref(false)

const onLogin = async () => {
    loading.value = true
    try {
        await login(email.value, password.value)
        router.push('/')
    } catch (error) {
        console.error(error)
    } finally {
        loading.value = false
    }
}
</script>

<template>
    <div class="flex flex-col items-center w-full">
        <div class="w-96 p-4 border-2 rounded-lg">
            <h2 class="text-4xl font-semibold mb-6 text-center text-primaryColor">
                Вход
            </h2>
            <form @submit.prevent="onLogin" class="flex flex-col gap-4">
                <input
                    class="border-2 p-2 outline-primaryColor text-lg text-primaryColor font-medium placeholder:font-normal"
                    placeholder="Email" type="email" v-model="email" />
                <input
                    class="border-2 p-2 outline-primaryColor text-lg text-primaryColor font-medium placeholder:font-normal"
                    placeholder="Пароль" type="password" v-model="password" />
                <button class="bg-primaryColor h-14 text-white rounded-md text-lg font-semibold flex items-center justify-center">
                    <template v-if="!loading">
                        Войти
                    </template>
                    <template v-else>
                        <Loader />
                    </template>
                </button>
            </form>
        </div>
    </div>
</template>