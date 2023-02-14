<template>
    <section class="web-project-2" id="web-project-2">
        
        <rotation-layout ref="rotationLayoutRef2">

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

import SlotTwo from "../OptionalKatzeWebProject2Components/SlotTwo.vue";
import description from "../OptionalKatzeWebProject2Components/description";


export default {
    components:{SlotTwo},

    mounted(){
        // Pass esential variable to rotation layout slot
        this.$refs.rotationLayoutRef2.buttonSetting = 
            {  
            backgroundColor : "#0099AF",   // assign style to rotation layout slot
            color:"White",  
        },
            // tell rotation layout which page it is
        
        this.$refs.rotationLayoutRef2.boxClass = ".web-project-2 .space .box"  
    },
    provide(){
        return {
            updateRotateDeg:this.updateRotateDeg
        }
    },
    data(){
        return {
            // data to projectPage layout slot
            mainTitle : "Django Project",
            subTitle: "2018-OPTION KATZE",
            linkToProjectDescription: "View Project Description",
            projectIconUrl: require('@/assets/img/projects/web_project_2/logo.png'),
            FrontEndTechList: ['HTML+CSS','Javascript'],
            BackEndTechList: ['Python','Django', 'MySQL'],
            DesignStyleList: ['Bootstrap','JQuery','BeautifulSoup'],
            mediaType:"image",
            mediaDisplayUrl: require('@/assets/img/projects/web_project_2/cover.png'),
            backgroundColor:"rgb(0, 0, 0)",
         
            fontColor:"white",
            buttonColor:"#0099AF",
            id: "#web-project-2",
            projectCode:'Web_Project_2',
            projectDescription :description.background,
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
                this.$refs.rotationLayoutRef2.rotate('forward');
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
        },



        showImageInFullScreen(id,slot,filename){  
            console.log(slot)
            // 1st para: "true" = open the image screen
            // 2nd para: tell the app which project is working on. app will search photo on the relative path
            switch(slot){
                case 2:
                    // console.log('in 2')
                    this.$refs.ImageInFullScreen2Slot2.screenController(true,id,this.projectCode,filename)  
                    break;
                case 3:
                    // console.log('in 3')
                    this.$refs.ImageInFullScreen2Slot3.screenController(true,id,this.projectCode,filename)  
                    break;
            }
        }
    }
}
</script>


<style lang="scss" scoped>
/* .web-project-2{
    background-color: rgb(0, 0, 0);
    // z-index: 1;
} */

/* 
// Slot 3 //
.slot2-wrapper,
.slot3-wrapper{
    
    position: relative;
    width:100%;
    height:auto;
    min-height:100vh;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;


    padding: 1rem 1.8rem 0 1.8rem;;
    background-color: black;
    color: white;
    z-index: 1;

    overflow:scroll;
  

    

    @media(min-width:760px){
        padding: 2.2rem;
    }
    @media(min-width:1020px){
        padding: 2.5rem;
    }

    .background-logo{
        @include vertical-center();
        opacity: 0.2;
        width:50%;
        height:50%;
        object-fit: contain;
        z-index: 0;
    }

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
        display: flex;
        flex-direction: column; 
        justify-content: center;   
        align-items: center;
        width:100%;
        height:100%;
        row-gap: 1rem;

        @media(min-width:800px){
            // margin-top:4rem;
            row-gap: 3rem;
        }

        .wrapper{
            position: relative;
            width:100%;
            height:100%;
            display: flex;
            flex-direction: column;  
            justify-content: center;   
            align-items: center;
            gap:1rem;

            div{
                position:relative;
 
                padding:1rem;
                min-width:260px;
                min-height:200px;
            }

            .description{
                min-height:unset;
                h6{
                    @include titleSetting();
                    margin-bottom:1rem;
                 
                }
                p{
                    width:100%;
                    color:white;
                    @include contentFontSetting_320px;
                    // @media(min-width:320px){
                    //     @include contentFontSetting_320px;
                    // }
                    @media(min-width:760px){
                        @include contentFontSetting_760px;
                    }
                }
            }

            .img{
         
                width:100%;
                img{
                    width:100%;
                    height:100%;
                    object-fit: cover;
                    border:4px rgba(255, 255, 255, 0.74) solid;
                }
                p{
                    position: absolute;
                    z-index: 2;
                    bottom: 16px;
                    left: 16.6px;
                    height: 1.7rem;
                    line-height: 1.9rem;
                    color: white;
                    font-size: 0.8rem;
                    padding: 0 1rem;
                    letter-spacing: 0.2rem;
                    font-family: sans-serif;
                    font-weight: 100;
                    background-color: rgba(0, 0, 0, 0.336);
                }
            }
        }
    }
}


#web-project-2.rotated div div div.face4 .slot2-wrapper,
#web-project-2.rotated div div div.face2 .slot3-wrapper{

  
    .background-logo{}

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


        align-items: center;

        @media(min-width:1000px){
            padding: 0 10%;
        }

        .wrapper{

            // border:red thin solid;
            height: 50%;
           
            @media(min-width:560px){
                flex-direction: row;
                gap:1rem;
                // max-width:810px;
                // max-height:300px;
            }
            // @media(min-width:560px){
            //     gap:7rem;
            // }
            @media(min-width:1300px){
                gap:20px;
            }
        
            .description{

                // border:purple solid thin;
    
              
                
                @media(min-width:560px){
                        width:100%;
                }
                h6{
                    @media(min-width:560px){
                        width:100%;
                        font-size: 1rem;
                    }
                    @media(min-width:800px){
                        font-size: 2rem;
                    }
                }

                p{
                    @media(min-width:500px){
                        @include contentFontSetting_320px();
                    }
                    @media(min-width:1020px){
                        @include contentFontSetting_760px();
                    }
                }
            }
            .img{
                // border:green thin solid;
       
                @media(min-width:560px){
                    min-height:180px;
                    min-width:265px;

                    text-align: center;
                    width:100%;
                }
                img{
                    @media(min-width:660px){
                        min-height:180px;
                        min-width:265px;
                    }
                    @media(min-width:730px){
                        min-height:204px;
                        min-width:300px;
                    }
                    @media(min-width:800px){
                        max-height:204px;
                        max-width:300px;
                    }
                }
            }
        }

       
    

    // .img-wrapper{
   
    //     @media(min-width:1000px){
    //         width:50%;
    //         max-width:500px;
            
    //     }
    //     img{
    //         img{}
    //         p{}
    //     }
    // }
    }
}


 */


</style>