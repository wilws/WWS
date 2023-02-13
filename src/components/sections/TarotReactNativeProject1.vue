<template>
    <section class="react-native-project-1" id="react-native-project-1">

        <rotation-layout ref="rotationLayoutReactNativeProject1">
            
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

            <!-- slot 3-->
            <template v-slot:slot3>
              
                <slot-three/>
            </template>
            <!-- end of slot 3 -->

        

        </rotation-layout>
    </section>
</template>


<script>

import SlotTwo from "../TarotReactNativeProject1Components/SlotTwo.vue";
import SlotThree from "../TarotReactNativeProject1Components/SlotThree.vue";
import description from "../TarotReactNativeProject1Components/description";


export default {
    components:{SlotTwo,SlotThree },
    mounted(){
        // pass proprs to "rotation-layout" slot
        this.$refs.rotationLayoutReactNativeProject1.buttonSetting = { 
            backgroundColor : "rgb(204, 153, 0)",
            color:"rgb(204, 153, 0)",
        }
        this.$refs.rotationLayoutReactNativeProject1.boxClass = ".react-native-project-1 .space .box";
    },
    provide(){
        return {
            updateRotateDeg:this.updateRotateDeg
        }
    },
    data(){
        return {
            mainTitle : "React Native Project",
            subTitle: "2023 - Tarot Journal",
            linkToProjectDescription: "View Project Details",
            projectIconUrl:"",
            FrontEndTechList: ['ReactNative','Tailwind', 'TypeScript'],
            BackEndTechList: ['NodeJs','TypeScript','PSQL',],
            DesignStyleList: ['Render (BE hosting)','Jest'],
            mediaType:"image",
            mediaDisplayUrl: require('@/assets/img/projects/tarot_react_native_project_1/cover_image.png'),
            projectDescription : description.background,
            backgroundColor:"rgb(15, 4, 30)",
            fontColor:"rgb(204, 153, 0)",
            buttonColor:"rgb(204, 153, 0)",
            id: "#react-native-project-1",
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
                this.$refs.rotationLayoutReactNativeProject1.rotate('forward');
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