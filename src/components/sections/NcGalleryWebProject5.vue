<template>
    <section class="project web-project-5" id="web-project-5">
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

import description from "../NcGalleryWebProject5Components/description";

export default {
    data(){
        return {
            mainTitle : "React Project",
            subTitle: "2023-NC GALLERY",
            linkToProjectDescription: "Go to the Web Page",
            projectIconUrl: require('@/assets/img/projects/nc_gallery_web_project_5/logo.png'),
            FrontEndTechList: ['ReactJs','SCSS'],
            BackEndTechList: [],
            DesignStyleList: ['Firebase (BE Host)','REST API'],
            mediaType:"video",
            mediaDisplayUrl: require('@/assets/img/projects/nc_gallery_web_project_5/nc_gallery_videos.mp4'),
            projectDescription :description.background,
            backgroundColor:"rgb(255, 255, 255)",
            fontColor:"rgb(54, 54, 54);",
            buttonColor:"rgb(85, 136, 129)",
            id: "#web-project-5"
       }
    },
    methods:{
        workDisplay(){
            window.open("https://nc-gallery-49dca.web.app/", '_blank');
        }
    }
}
</script>


<style lang="scss" scoped>
.web-project-5{
    background-color: rgb(243, 243, 243);
}

</style>