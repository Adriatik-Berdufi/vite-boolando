import { createApp } from 'vue'
import './styles/general.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(far,fas)



const app =createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')