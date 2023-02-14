<template>
    <section class="web-project-1" id="web-project-1">
        <project-page-layout

            :mainTitle = "mainTitle"
            :subTitle = "subTitle"
            :linkToProjectDescription = "linkToProjectDescription"
            :projectIconUrl = "projectIconUrl"
            :projectDescription = "projectDescription"
            :FrontEndTechList = "FrontEndTechList"
            :BackEndTechList = "BackEndTechList"
            :DesignStyleList = "DesignStyleList"
            :mediaDisplayUrl = "mediaDisplayUrl"
            :mediaType = "mediaType"
            :backgroundColor = "backgroundColor"
            :fontColor = "fontColor"
            :buttonColor = "buttonColor"
            :id = "id"
            @work-display = "workDisplay"

        ></project-page-layout>
    </section>
</template>

<script>

import description from "../EllowTraditionWebProject1Components/description";

export default {
    data(){
        return {
            mainTitle : "Vue Project",
            subTitle: "2022-ELLOW TRADITION",
            linkToProjectDescription: "Go to the Web Page",
            projectIconUrl: require('@/assets/img/projects/web_project_1/logo.png'),
            FrontEndTechList: ['Vue-CLI','Vuex'],
            BackEndTechList: ['NodeJs','TypeScript', 'ExpressJs', 'MongoDB'],
            DesignStyleList: ['REST API', 'JWT','Stripe API'],
            mediaType:"video",
            mediaDisplayUrl: require('@/assets/img/projects/web_project_1/ellow_video.mp4'),
            // mediaDisplayUrl: '/projects/web_project_1/ellow_video.mp4',
            projectDescription : description.background,
            backgroundColor:"rgb(255, 255, 255)",
            fontColor:"Black",
            buttonColor:"Black",
            id: "#web-project-1"
       }
    },
    methods:{
        workDisplay(){
            window.open("https://ellowtradition-vue.web.app/index", '_blank');
        }
    }
}
</script>


<style lang="scss" scoped>
.web-project-1{
    background-color: white;
}

</style>