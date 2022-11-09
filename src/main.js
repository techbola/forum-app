import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";

const forumApp = createApp(App);
forumApp.use(router);

const requireComponent = require.context(
  // The relative path of the components folder
  "./components",
  // Whether or not to look in subfolders
  false,
  // The regular expression used to match base component filenames
  /App[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach((fileName) => {
  let baseComponentConfig = requireComponent(fileName);
  // Look for the component options on `.default`, which will
  // exist if the component was exported with `export default`,
  // otherwise fall back to module's root.
  baseComponentConfig = baseComponentConfig.default || baseComponentConfig;

  const baseComponentName =
    baseComponentConfig.name ||
    fileName.replace(/^.+\//, "").replace(/\.\w+$/, "");

  // Register component globally
  forumApp.component(baseComponentName, baseComponentConfig);
});

forumApp.mount("#app");
