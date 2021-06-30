import { createRouter, createWebHashHistory } from 'vue-router';
import { App } from 'vue';
import routes from './modules';
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

function useMyRouter(app: App) {
  app.use(router);
}
export default useMyRouter;
