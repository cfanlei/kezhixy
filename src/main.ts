import { createApp } from 'vue';
import App from './App.vue';
import useMyRouter from './router';
const app = createApp(App);
useMyRouter(app);

app.mount('#app');
