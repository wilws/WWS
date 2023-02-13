<template>
    <section class="web-project-1" id="web-project-4">
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

import ProjectPageLayout from "../layout/ProjectPageLayout.vue";

export default {
    components:{
        ProjectPageLayout
    },
    data(){
        return {
            mainTitle : "JavaScript Project",
            subTitle: "2016 - Longlife Production Limited",
            linkToProjectDescription: "Go to the Web Page",
            projectIconUrl: require('@/assets/img/projects/web_project_4/logo.png'),
            FrontEndTechList: ['HTML/CSS','Javascript'],
            BackEndTechList: [],
            DesignStyleList: [],
            mediaType:"image",
            mediaDisplayUrl: require('@/assets/img/projects/web_project_4/cover.png'),
            backgroundColor:"rgb(255, 255, 255)",
            fontColor:"Black",
            buttonColor:"#F70007",
            id: "#web-project-4",
            projectDescription :
            "This is a pure HTML + CSS + Javascript webpage for a visual merchandising services company Longlife Production Limited.<br><br>My designer friend one day urgently asked for my assistance to make a website for the company. He gave me the web layout and picture and I made them online. Hence this simple web page is created."
        }
    },
    methods:{
        workDisplay(){
            window.open("http://www.longlifeproduction.com", '_blank');
        }
    }
}
</script>


<style lang="scss" scoped>
.web-project-4{
    background-color: rgb(0, 0, 0);
}

</style>