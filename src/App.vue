<template>

  <div class="container">
    <menu-page></menu-page>
    <index-page></index-page>
    <skill-set-page></skill-set-page>
    <web-project-1></web-project-1>
    <web-project-2></web-project-2>
    <web-project-3></web-project-3>
    <web-project-4></web-project-4>
    <graphic-design-project></graphic-design-project>
    <interior-design-project></interior-design-project> 
    <final-page></final-page>

  </div>


</template>

<script>
import MenuPage from "./components/sections/menuPage.vue";
import IndexPage from "./components/sections/IndexPage.vue";
import SkillSetPage from './components/sections/SkillSetPage.vue';
import WebProject1 from './components/sections/WebProject1.vue';
import WebProject2 from './components/sections/WebProject2.vue';
import WebProject3 from './components/sections/WebProject3.vue';
import WebProject4 from './components/sections/WebProject4.vue';
import GraphicDesignProject from './components/sections/GraphicDesignProject.vue';
import InteriorDesignProject from './components/sections/InteriorDesignProject.vue';
import FinalPage from './components/sections/FinalPage.vue';

import screenSizeDetection from "./mixins/screenSizeDetection.vue";


export default {
  name: 'App',
  components: {
    MenuPage,
    IndexPage,
    SkillSetPage,
    WebProject1,
    WebProject2,
    WebProject3,
    WebProject4,
    GraphicDesignProject,
    InteriorDesignProject,
    FinalPage,
    
  },
  mixins:[screenSizeDetection],
  mounted(){
      window.addEventListener('resize',()=>{
          this.defaultBoxes();
      });
  }
  
}
</script>

<style lang="scss">

/* Common Style */


* {
    margin:0;
    padding:0;
    outline:none;
    box-sizing:border-box;
    text-decoration:none;
    // scrollbar-width: none;  
}

// *::-webkit-scrollbar {
//   display: none;
// }

html{
    // font-size:62.5%;
    scroll-behavior: smooth;
}


.container{
  background:rgb(100, 83, 83);
}

section{
  position:relative;
  width:100vw;
  min-height:100vh;
  height:auto;
  background-color: green;
  overflow: hidden;
}

</style>
