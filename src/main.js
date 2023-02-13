import { createApp } from 'vue'
import App from './App.vue'
import screenSizeDetection from "./mixins/screenSizeDetection.vue";
import ProjectPageLayout from "./components/layout/ProjectPageLayout.vue";
import RotationLayout from "./components/layout/rotationLayout.vue";
import pageWheeler from "./mixins/pageWheeler";

const app = createApp(App)

app.mixin(pageWheeler);
app.mixin(screenSizeDetection);
app.component('ProjectPageLayout', ProjectPageLayout);
app.component('RotationLayout', RotationLayout);
app.mount('#app')
