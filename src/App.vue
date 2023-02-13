<template>

  <div class="container">
    <menu-page :showMenuBtn="showMenuBtn" />
    <index-page/>
    <skill-set-page/>
    <nc-news-web-project-7/>
    <tarot-react-native-project-1/>
    <nc-gallery-web-project-5/>
    <docker-web-project-6/>
    <python-data-project-1/>
    <web-project-1/>
    <web-project-3/>
    <web-project-2/>
    <web-project-4/>
    <graphic-design-project/>
    <interior-design-project/>
    <final-page/>

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
import NcGalleryWebProject5 from './components/sections/NcGalleryWebProject5.vue';
import DockerWebProject6 from './components/sections/DockerWebProject6.vue';
import NcNewsWebProject7 from "./components/sections/NcNewsWebProject7.vue";
import PythonDataProject1 from "./components/sections/PythonDataProject1.vue";
import TarotReactNativeProject1 from "./components/sections/TarotReactNativeProject1.vue"


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
    NcGalleryWebProject5,    
    DockerWebProject6,
    NcNewsWebProject7,
    PythonDataProject1,
    TarotReactNativeProject1
  },

  mounted(){
    this.disableIOSScalability();            // [mixins function]. to stop the ISO scalability during rotation
    window.addEventListener('resize',()=>{   
        this.defaultBoxes();                // [mixins function]. to turn all the boxex back to homepage
    });
  },
  data(){
    return {
      showMenuBtn:true
    }
  },
  provide(){
    return {
      menuButtonOnOffSwitch: this.menuButtonOnOffSwitch,
    }
  },
  methods:{
    menuButtonOnOffSwitch(bool){
      this.showMenuBtn = bool;
    },
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

// body {-webkit-text-size-adjust: none;}

body {
  position:relative;                  // necessary in ISO
    -webkit-text-size-adjust: 100%;
}

html{
    // font-size:62.5%;
    scroll-behavior: smooth;
}


.container{
  background:rgb(100, 83, 83);
  /* max-width:1700px; */
}

section{
  position:relative;
  width:100%;
  min-height:100vh;
  height:auto;
  background-color: transparent;
  overflow: hidden;
}

</style>
