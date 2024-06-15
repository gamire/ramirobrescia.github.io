import { createRouter, createWebHistory } from "vue-router";
import Projects from "../components/Projects.vue";
import Start from "../components/ckan-viewer/Start.vue";
import CKANBrowser from "../components/ckan-viewer/CKANBrowser.vue";

const routes = [
	{ path: '/', name: 'home', component: Projects },
	{ path: '/ckan-viewer', name: 'ckan-viewer-start', component: Start },
	{ path: '/ckan-viewer/browse', name: 'ckan-viewer-browse', component: CKANBrowser },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router