import { createApp } from 'vue'
// import SButton from './button'
// import SFCButton from './SFCButton.vue'
// import JSXButton from './JSXButton'
// console.log(JSXButton)
// const app = createApp(JSXButton)
import SmartyUI from './entry'
import App from './App.vue'

createApp(App).use(SmartyUI).mount('#app')
