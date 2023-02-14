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

import description from "../DockerWebProject6Components/description";

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
            projectDescription :description.background,
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