<template>
    <section class="web-project-7" id="web-project-7">
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
import description from "../NcNewsWebProject7Components/description";


export default {
    data(){
        return {
            mainTitle : "React Project",
            subTitle: "2023 - NC-NEWS",
            linkToProjectDescription: "Go to the Web Page",
            projectIconUrl: require('@/assets/img/projects/nc_news_web_project_7/logo.png'),
            FrontEndTechList: ['ReactJs','SCSS','Redux'],
            BackEndTechList: ['NodeJs + ExpressJs','PSQL','Jest'],
            DesignStyleList: ['REST API','Netlify (FE-host)','Render (BE-host)'],
            mediaType:"video",
            mediaDisplayUrl: require('@/assets/img/projects/nc_news_web_project_7/nc_news_video.mp4'),
            projectDescription : description.background,
            backgroundColor:"rgb(255, 255, 255)",
            fontColor:"rgb(54, 54, 54);",
            buttonColor:"red",
            id: "#web-project-7"
       }
    },
    methods:{
        workDisplay(){
            window.open("https://glittering-pegasus-3b6e85.netlify.app/", '_blank');
        }
    }
}
</script>


<style lang="scss" scoped>
.web-project-5{
    background-color: rgb(243, 243, 243);
}

</style>