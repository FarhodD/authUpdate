import { useStorage } from '@vueuse/core'

export const saveToStorage = (key, value) => useStorage(key, value)

export const removeFromStorage = (key) => useStorage(key).value = null

export const getTokenValue = (key) => useStorage(key).value