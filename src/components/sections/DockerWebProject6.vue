<template>
    <section class="web-project-6" id="web-project-6">

        <rotation-layout ref="rotationLayoutRef6">
            
            <!-- slot 1-->
            <template v-slot:slot1>
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
            </template>
            <!-- end of slot 1 -->

            <!-- slot 2-->
            <template v-slot:slot2>
                 <slot-two
                    :isShow="slotTwoIsShow"
                 />
            </template>
      
        

        </rotation-layout>
    </section>
</template>


<script>

import SlotTwo from "../DockerWebProject6Components/SlotTwo.vue";

export default {
    components:{SlotTwo},
    mounted(){
        // pass proprs to "rotation-layout" slot
        this.$refs.rotationLayoutRef6.buttonSetting = { 
            backgroundColor : "rgb(39, 39, 39)",
            color:"rgb(0, 0, 0)",
        }
        this.$refs.rotationLayoutRef6.boxClass = ".web-project-6 .space .box";
    },
    provide(){
        return {
            updateRotateDeg:this.updateRotateDeg
        }
    },
    data(){
        return {
            mainTitle : "Docker Project",
            subTitle: "2022 - PHP Server (Cross Containers)",
            linkToProjectDescription: "View Project Details",
            projectIconUrl: require('@/assets/img/projects/docker_web_project_6/logo.png'),
            FrontEndTechList: ['Vue-Cli','SCSS'],
            BackEndTechList: ['PHP','MySQL','Ngnix'],
            DesignStyleList: ['Docker Composer', 'Docker Bind Mounts'],
            mediaType:"image",
            mediaDisplayUrl: require('@/assets/img/projects/docker_web_project_6/cover_image.png'),
            projectDescription :
            "I built this website just for practising purpose after the completion of my NodeJs course."+
            "<br>"+
            "<br>"+
            "I ran the company 'Ellow Tradition', an e-commerce company selling interesting cultural handcraft, long time ago.  The original website of this company was built by PHP + AJAX + MySQL, after having learnt PHP from books on 2014. The website helped me to get an PHP web developer job in a radio-control (R/C) hobby Company - AsiaTees."+
            "<br>"+
            "<br>"+
            "To refresh web development technique, I re-design and re-built the website by using modern tools. Adobe XD is used to design the interface. VueJs is applied as frontend technology and NodeJs + ExpressJs framework with MongoDB are used in backend. Both ends are communicated by REST API. JWT is used for authentication. Stripe is adopted for payment gateway. The website is deployed on Heroku.",
            backgroundColor:"rgb(212, 228, 246)",
            fontColor:"rgb(0, 0, 0)",
            buttonColor:"rgb(39, 39, 39)",
            id: "#web-project-6",
            rotateDeg:0,
            slotTwoIsShow:false,
            slotThreeIsShow:false,
            slotFourIsShow:false,
       }
    },
    methods:{
        workDisplay(){
            document.querySelector(this.id).scrollIntoView();
            setTimeout(() => {
                this.$refs.rotationLayoutRef6.rotate('forward');
              
            }, 200);
        },
        updateRotateDeg(deg){
            this.rotateDeg = deg;
            this.unsetSlotIsSHow();
            console.log(deg,"<< deg")
            switch (deg){
                case 0:
                    this.unsetSlotIsSHow();
                    break;
                case -90:
                    this.slotTwoIsShow = true;
                    break;
                case -180:
                    this.slotThreeIsShow = true;
                    break;
                case -270:
                    this.slotFourIsShow = true;
                    break;
            }
        },
        unsetSlotIsSHow(){
            this.slotTwoIsShow = false
            this.slotThreeIsShow = false
            this.slotFourIsShow = false
        }

    }
}
</script>


<style lang="scss" scoped>
/* .web-project-5{
    background-color: rgb(243, 243, 243);
} */

</style>