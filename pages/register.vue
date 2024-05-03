<script setup>
const { register } = useAuth()
const router = useRouter()

const username = ref('')
const email = ref('')
const password = ref('')
const loading = ref(false)

const onRegister = async () => {
    loading.value = true
    try {
        await register(
            username.value,
            email.value,
            password.value
        )
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
                Регистрация
            </h2>
            <form @submit.prevent="onRegister" class="flex flex-col gap-4">
                <input
                    class="border-2 p-2 outline-primaryColor text-lg text-primaryColor placeholder:font-normal font-medium"
                    v-model="username" placeholder="Имя" type="text" />
                <input
                    class="border-2 p-2 outline-primaryColor text-lg text-primaryColor placeholder:font-normal font-medium"
                    v-model="email" placeholder="Email" type="email" />
                <input
                    class="border-2 p-2 outline-primaryColor text-lg text-primaryColor placeholder:font-normal font-medium"
                    v-model="password" placeholder="Пароль" type="password" />
                <button
                    class="bg-primaryColor h-14 text-white rounded-md text-lg font-semibold flex justify-center items-center">
                    <template v-if="!loading">
                        Зарегистрироваться
                    </template>
                    <template v-else>
                        <Loader />
                    </template>
                </button>
            </form>
        </div>
    </div>
</template>