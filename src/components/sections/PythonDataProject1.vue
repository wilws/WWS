<template>
    <section class="project data-project-1" id="data-project-1">

        <rotation-layout ref="rotationLayoutRefDataProject1">
            
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
            <!-- end of slot 2 -->

        </rotation-layout>
    </section>
</template>

<script>
import SlotTwo from "../PythonDataProject1Components/SlotTwo.vue";
import description from "../PythonDataProject1Components/description";
export default {
   
   components:{SlotTwo},

    mounted(){
        // pass proprs to "rotation-layout" slot
        this.$refs.rotationLayoutRefDataProject1.buttonSetting = { 
            backgroundColor : "#0a69a2",
            color:"White",
        }
        this.$refs.rotationLayoutRefDataProject1.boxClass = ".data-project-1 .space .box";
    },
    provide(){
        return {
            updateRotateDeg:this.updateRotateDeg
        }
    },
    data(){
        return {
            // pass proprs to "project-page-layout" child component
            mainTitle : "Python Project",
            subTitle: "2022-Company Data Scrapper",
            linkToProjectDescription: "View Video Demo",
            projectIconUrl: require('@/assets/img/projects/python_data_project_1/logo.png'),
            FrontEndTechList: [],
            BackEndTechList: ['Python','Selenium'],
            DesignStyleList: [],
            mediaType:"image",
            mediaDisplayUrl: require('@/assets/img/projects/python_data_project_1/coverImg.svg'),
            backgroundColor:"rgb(255, 255, 255)",
            fontColor:"Black",
            id: "#data-project-1",
            buttonColor:"#0a69a2",
            projectDescription:description.background,
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
                this.$refs.rotationLayoutRefDataProject1.rotate('forward');
            }, 300);
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