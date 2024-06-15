import { createApp } from 'vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { createPinia } from 'pinia'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Components
import router from './router'
import App from './App.vue'

const vuetify = createVuetify({
  components,
  directives,
});
const pinia = createPinia()

createApp(App)
  .use(vuetify)
  .use(pinia)
  .use(router)
  .mount('#app');