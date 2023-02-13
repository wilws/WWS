<template>
    <section class="data-project-1" id="data-project-1">

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
            projectDescription :  
            "This is an application to backtest the profitability of adopting different Technical Analysis (TA) strategies, like RSI, MACD, SMA,etc."+
            "<br>"+
            "The purpose of building this app is to see whether it is really profitable if trading disciplinarily  with those TA indicators."+
            "<br>"+
            "<br>"+
            "There is a video demo. By clicking  “View Video Demo” button above, you can see what will happen if buying stock “0002.hk” during RSI is lower than 20 and selling when it is higher than 70.  It showed that in the end it is a profitable strategy. But it doesn’t mean that we can have the same positive result if adopting the same strategy on other assets.",
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
/* .web-project-3{
    // width:100vw;
    // height: 100vh;
    background-color: rgb(0, 0, 0);
} */

/* 
.slot-wrapper{
    position: relative;
    width:100%;
    height:100%;
    padding: 1rem;
    background-color: black;
    color: white;
    @include column-horizontal-center();
    overflow: scroll;

    .title-wrapper{
        position:relative;
        width:100%;

        .title{
            @include OptionKatzeSubPageTitle();
            h1{
                @include OptionKatzeMainTitle();
            }
            h3{
                @include OptionKatzeSubTitle();
            }
        }
    }

    .content-wrapper{
 
        width:100%;
        height:80%;
        margin-top:1rem;

      

        .video-wrapper{
            position:relative;
            width:100%;
            height:100%;
            background-color: transparent;
            z-index: 1;
            text-align: center;
            video{
                height: 100%;
                width:100%;
                object-fit:contain
            }
        }

    }
}



#data-project-1.rotated div div div.face4 .slot-wrapper {

    @media(min-width:560px){
        padding:1rem 2rem;
    }
    .title-wrapper{
        .title{
            h1{
                @media(min-width:560px){
                    font-size:1.1rem;
                }
                @media(min-width:800px){
                    font-size:1.7rem;
                }
                @media(min-width:1300px){
                    font-size:2.2rem;
                }

            }
            h3{
                @media(min-width:560px){
                    font-size: 0.6rem;
                }
                @media(min-width:800px){
                    font-size:0.9rem;
                }
                @media(min-width:800px){
                    font-size:1.1rem;
                }
            }
        }
    }

    .content-wrapper{
        .video-wrapper{
            video{}
        }
    }
} */

</style>