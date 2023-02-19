<template>

    <!-- secction -->
    <div class="section" :style="{ color:fontColor, backgroundColor:backgroundColor}">

        <div class="line" :style="{backgroundColor:buttonColor}" />
        <left-part 
            :mainTitle = mainTitle
            :subTitle = subTitle
            :buttonColor = buttonColor
            :fontColor = fontColor
            :linkToProjectDescription = linkToProjectDescription
            :projectIconUrl = projectIconUrl
            :FrontEndTechList = FrontEndTechList
            :BackEndTechList = BackEndTechList
            :DesignStyleList = DesignStyleList
            :backgroundColor = backgroundColor
            :projectDescription = projectDescription
            :scrollToPage = scrollToPage
            :id = id
        />

        <right-part
            :mediaType= mediaType
            :mediaDisplayUrl= mediaDisplayUrl
        />

    </div>
    <!-- End of section -->
    

 



</template>


<script>

import RightPart from "../ProjectPageLayoutComponents/RightPart.vue";
import LeftPart from "../ProjectPageLayoutComponents/LeftPart.vue";
import screenSizeDetection from "../../mixins/screenSizeDetection.vue";

export default {
    components:{RightPart, LeftPart},
    mixins:[screenSizeDetection],
    props:[
        'mainTitle',
        'subTitle',
        'linkToProjectDescription',
        'projectIconUrl',
        'projectDescription',
        'FrontEndTechList',
        'BackEndTechList',
        'DesignStyleList',
        'mediaDisplayUrl',
        'mediaType',
        'backgroundColor',
        'fontColor',
        'buttonColor',
        'id'
    ],
    data(){
        return {
            scrollToPage : false
        }
    },
    mounted(){
        window.addEventListener("scroll",()=>{        
            this.scrollToPageDetection();
        });
    },
    provide(){
        return {
            workDisplay: this.workDisplay
        }
    },
    inject:['setViewPages'],
    watch:{
        scrollToPage(bool){
            this.setViewPages(this.id,bool);
        }
    },
    methods:{
        workDisplay(){
            this.$emit('work-display');
        },
        scrollToPageDetection(){
            // Tell child component that this page is being viewed
            const page = document.querySelector(this.id);
            const travelDistance = window.innerHeight + window.pageYOffset;
            const triggerPoint = page.offsetTop + page.offsetHeight/3.5;
            if (travelDistance > triggerPoint){
                this.scrollToPage = true;
            }  else {
                this.scrollToPage = false;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.section{
    position:relative;
    width:100%;
    height:100vh;
    display: flex;
    justify-content: start;
    border-top: rgb(0, 0, 0) thick solid;
    overflow: hidden;
    @include row-horizontal-center();

    .line{
        position: absolute;
        width:5px;
        height:100vh;
        left:0;
        right:0;
    }
}


</style>