<template>

  <div class="container" ref="mainContainer">
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
    
    this.disableIOSScalability();     // [mixins function]. to stop the ISO scalability during rotation
    this.setPagesOffsetTop();         // store the offsetY of each page.
    window.addEventListener('scroll',this.scrollEventHandler);
 
    this.screenSizeDetection_setWindowWidth()   // Store the window width for comparing the body's width to determine if rotation happen
    window.addEventListener('resize',this.resizeEventHandler); 
  },

  data(){
    return {
      showMenuBtn:true,
      currentPage:{id:"#index",offsetY:0},
      isResizeEffectOn:false,
      pagesOffsetTop:{}
    }
  },

  provide(){
    return {
      menuButtonOnOffSwitch: this.menuButtonOnOffSwitch,
    }
  },

  watch:{
    isResizeEffectOn(value){
      // When this.setIsResizeEffectOn is set to "true", "scrollEventHandler()" in scroll event will be supressed.
      // Reason: IOS when resize event is triggered, the change of height of pages will trigger scroll event
      // "scrollEventHandler()" will therefore unwantedly be triggered.
      // this.setIsResizeEffectOn is set back to "false" after 1s
      if(value){
        setTimeout(() => {
          this.setIsResizeEffectOn(false)
        },1000)
      }
    }
  },

  methods:{

    menuButtonOnOffSwitch(bool){
      this.showMenuBtn = bool;
    },

    setPagesOffsetTop(){
      // This is to store the offsetTop of each pages.
      this.pagesOffsetTop = {};
      this.$refs.mainContainer.querySelectorAll('.project').forEach((section) => {
          const id = `#${section.getAttribute("id")}`;
          this.pagesOffsetTop[section.offsetTop] = id;   
      });
    },

    setIsResizeEffectOn(bool){
      this.isResizeEffectOn = bool;
    },

    resizeEventHandler(){
       // this.defaultBoxes();     // [mixins function]. to turn all the boxex back to frontpage (slot1)  
       if(this.screenSizeDetection_checkIfRotate()){
          this.isResizeEffectOn = true
          this.setPagesOffsetTop();     // To reset each pages's offsetTop. because it changed after rotation
          document.querySelector(this.currentPage.id).scrollIntoView({behavior:'instant'})
          this.screenSizeDetection_setWindowWidth();
      }
    },

    scrollEventHandler(){
      // This function determine which page is currently on screen.
      // the "currently on screen page" will be stored in 
      // currentPage { 'id': STRING ,'offsetY': NUMBER}
        
      if (this.isResizeEffectOn) return;     

      const scrollDistanceFromTop = window.scrollY;
      const pagesOffsetTopValues = Object.keys(this.pagesOffsetTop);
      pagesOffsetTopValues.sort(function(a,b) { return (+a) - (+b)})

      for (let i =0; i < pagesOffsetTopValues.length; i++){
        if (scrollDistanceFromTop < +pagesOffsetTopValues[i]){
          if (this.pagesOffsetTop[pagesOffsetTopValues[i-1]] !== this.currentPage) {
            this.currentPage.id = this.pagesOffsetTop[pagesOffsetTopValues[i-1]];
            this.currentPage.offsetY = pagesOffsetTopValues[i-1];
          }
          break;
        }
      }
    }
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

body {
  position:relative;                  // necessary in ISO
    -webkit-text-size-adjust: 100%;
    -webkit-user-drag: none;
    overscroll-behavior: none;
    /* overflow: scroll; */
}

html{
    // font-size:62.5%;
    scroll-behavior: smooth;
    -webkit-user-drag: none;
    overscroll-behavior: none;
        -webkit-user-drag: none;
    overscroll-behavior: none;
    /* overflow: hidden; */
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
