<script setup>
definePageMeta({
    middleware: 'auth'
})

const { getUsers } = useAuth()
const users = ref([])

const showUsers = async () => {
    const userData = await getUsers()
    users.value = userData
    return userData
}

</script>

<template>
    <div>
        <div class="flex flex-col items-center text-center gap-2 text-primaryColor">
            <h1 class="text-4xl font-semibold uppercase">Welcome to main page!</h1>
            <p class="text-3xl font-medium">
                ID:
            </p>
            <p class="text-3xl font-medium">
                Email:
            </p>
        </div>

        <div class="flex justify-center">
            <button @click="showUsers" class="bg-primaryColor text-white rounded-md py-2 px-4 text-lg my-4">
                Показать список пользователей
            </button>
        </div>

        <div class="py-5">
            <h2>User List</h2>
            <ul>
                <li class="flex border justify-between p-2 text-xl" v-for="user in users" :key="user.id">
                    <span class="font-medium">{{ user.username }}</span>
                    <span>{{ user.email }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
