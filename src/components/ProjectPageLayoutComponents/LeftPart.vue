<template>
    
        <div class="left-wrapper">

            <header-component
                :scrollToPage= scrollToPage
                :id= id
                :mainTitle= mainTitle
                :subTitle= subTitle
                :fontColor = fontColor
                :buttonColor= buttonColor
                :linkToProjectDescription = linkToProjectDescription
                :projectIconUrl= projectIconUrl
            />

            <spec-component 
                :scrollToPage = scrollToPage
                :id = id
                :FrontEndTechList= FrontEndTechList
                :BackEndTechList= BackEndTechList
                :DesignStyleList= DesignStyleList
            />
  

            <background-component
                :scrollToPage = scrollToPage
                :id = id
                :backgroundColor = backgroundColor
                :projectDescription= projectDescription
                :fontColor = fontColor
            />


        </div>
  
</template>


<script>

import HeaderComponent from "./HeaderComponent.vue";
import SpecComponent from "./SpecComponent.vue";
import BackgroundComponent from "./BackgroundComponent.vue";




export default {
    components:{HeaderComponent,SpecComponent, BackgroundComponent},
    props:['mainTitle','subTitle','buttonColor','linkToProjectDescription','projectIconUrl','FrontEndTechList','BackEndTechList','DesignStyleList','projectDescription','scrollToPage','id','fontColor','backgroundColor'],
}
</script>

<style lang="scss" scoped>

.left-wrapper{
    position: relative;
    padding:30px;
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;

    @media(min-width: 1134px){
        width:60%;
    }
}
</style>