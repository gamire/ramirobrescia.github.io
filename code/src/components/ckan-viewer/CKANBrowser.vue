<script setup>
import { reactive, onMounted } from 'vue';
import CKANOrganizationList from './CKANOrganizationList.vue';
import { useCkanApiStore } from '../../stores/ckanApi';


// URL selection from Start component
const ckanApiStore = useCkanApiStore()

const ckanData = reactive({
	organizations: [],
})

onMounted(() => {
	loadOrganizations(ckanApiStore.url)
})

function loadOrganizations(ckanApiUrl){

  fetch(ckanApiUrl + '/action/organization_list?order_by=title&all_fields=True', {
		mode: 'cors'
	})
  .then(response => response.json())
  .then(data => {
		ckanData.organizations = data.result
	})
  .catch(error => console.error(error));
}

</script>

<template>
    <h1>Browsing {{ ckanApiStore.url }} </h1>
	<div>
		<v-btn class="text-none" color="primary" size="x-large" variant="flat" block
            @click="loadOrganizations">Tecnologia</v-btn>
	</div>
	<v-combobox label="Organización" item-value="name" 
		clearable multiple
		:items="ckanData.organizations"></v-combobox>
	<CKANOrganizationList :organizations="ckanData.organizations" />
</template>