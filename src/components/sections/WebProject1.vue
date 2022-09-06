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



export default {
    data(){
        return {
            mainTitle : "Web Project 1",
            subTitle: "2022-ELLOW TRADITION",
            linkToProjectDescription: "Go to the Web Page",
            projectIconUrl: require('@/assets/img/projects/web_project_1/logo.png'),
            FrontEndTechList: ['HTML/CSS','Javascript','VueJs/Vue-Cli'],
            BackEndTechList: ['NodeJs / ExpressJs', 'MongoDB'],
            DesignStyleList: ['RESTFul API', 'JWT Authentication','Stripe API Payment Gateway'],
            mediaType:"video",
            mediaDisplayUrl: require('@/assets/img/projects/web_project_1/ellow_video.mp4'),
            // mediaDisplayUrl: '/projects/web_project_1/ellow_video.mp4',
            projectDescription :
                "This is a \"just for fun\" re-build website. The original website of this company was built by PHP + AJAX + MySQL. The company is no longer operating" +
                "<br>"+               
                "<br> In 2014 autumn after quitting my job, I self-learnt PHP from books and built my first e-commerce website “Ellow Tradition”. It was an online shop selling interesting cultural handcraft from different part of the world."+
                "<br>"+
                "<br> It was out of my expectation that the website eventually helped me to get an PHP web developer job in a radio-control (R/C) hobby Company - AsiaTees.  I had worked in this company for not more than a month before switching back to be a civil servant due to salary consideration."+
               "<br>"+
               "<br> To refresh my web development skills, I re-design and re-built the website by using modern tools. Adobe XD was used to draft and design the interface. VueJs is applied as frontend technology, and NodeJs + ExpressJs framework with MongoDB are used in backend. Both ends are communicated by RESTful API and JWT is used for authentication. Stripe is adopted for payment gateway.",
            backgroundColor:"White",
            fontColor:"Black",
            buttonColor:"Black",
            id: "#web-project-1"
       }
    },
    methods:{
        workDisplay(){
            window.open("https://ellowtradition-vue.herokuapp.com/", '_blank');
        }
    }
}
</script>


<style lang="scss" scoped>
.web-project-1{
    background-color: white;
}

</style>