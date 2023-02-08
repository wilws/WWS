<template>
    <section class="web-project-5" id="web-project-5">
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
            mainTitle : "React Project",
            subTitle: "2023-NC GALLERY",
            linkToProjectDescription: "Go to the Web Page",
            projectIconUrl: require('@/assets/img/projects/nc_gallery_web_project_5/logo.png'),
            FrontEndTechList: ['ReactJs','SCSS'],
            BackEndTechList: [],
            DesignStyleList: ['REST API'],
            mediaType:"video",
            mediaDisplayUrl: require('@/assets/img/projects/nc_gallery_web_project_5/nc_gallery_videos.mp4'),
            projectDescription :
            "I built this website just for practising purpose after the completion of my NodeJs course."+
            "<br>"+
            "<br>"+
            "I ran the company 'Ellow Tradition', an e-commerce company selling interesting cultural handcraft, long time ago.  The original website of this company was built by PHP + AJAX + MySQL, after having learnt PHP from books on 2014. The website helped me to get an PHP web developer job in a radio-control (R/C) hobby Company - AsiaTees."+
            "<br>"+
            "<br>"+
            "To refresh web development technique, I re-design and re-built the website by using modern tools. Adobe XD is used to design the interface. VueJs is applied as frontend technology and NodeJs + ExpressJs framework with MongoDB are used in backend. Both ends are communicated by REST API. JWT is used for authentication. Stripe is adopted for payment gateway. The website is deployed on Heroku.",
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