
import { defineStore } from "pinia"
import { ref } from "vue"

export const useCkanApiStore = defineStore('ckanAPI', () => {
	const url = ref('')
	return { url }
})