<template>
    <section class="graphic-design-project-1" id="graphic-design-project-1">
        
        <rotation-layout-4 ref="rotationLayoutRef4">

            <!-- slot 1 -->
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
            <!-- End of slot 1 -->

            <!-- slot 2 -->
            <template v-slot:slot2>
                <div class="slot2-wrapper">
                    <div class="left-side">
                        <div class="bg-img"><img :src="require('@/assets/img/projects/design_project_1/bg-img.jpeg')"></div>
                        <div class="blackbox">
                            <h1>JOYFUL HOUSE</h1>
                            <h3>- a dream of 5 -</h3>
                            <p>
                                Jason with 4 other friends established Joyful House in 2016. It was their dream to have a shop to endlessly supply sweetness to people around.
                            </p>
                        </div>
                    </div>

                    <div class="right-side">
                        <div class="title">LOGO RE-DESIGN</div>
                        <div class="icons-wrapper">
                            <div class="old-icon"><img :src="require('@/assets/img/projects/design_project_1/old_icon.png')"></div>
                            <div class="arrow-wrapper"><i class="fa-solid fa-arrow-right-long"></i> </div>
                            <div class="new-icon"><img :src="require('@/assets/img/projects/design_project_1/logo.png')"></div>
                        </div>
                        <p>
                            To re-brand the company, the very first step is to have a new logo. 
                            There are five balloons in the original logo representing the 5 establishers of the dessert shop. 
                            I kept this element as well as the hexagon shape, fusing them with minimalistic style and add the slogan “Sweeten up your life”  , 
                            expressing  “We know life is tough, let my dessert to give you a little bit sweetness”</p>
                        <div class="ai-img"><img :src="require('@/assets/img/projects/design_project_1/bg-img-icon.png')"> </div>
                    </div>
 
                </div>
            </template>
            <!-- End of slot 2 -->

            <!-- slot 3 -->
            <template v-slot:slot3>
                <div class="slot3-wrapper">

                    <div class="col col-1">
                        <div class="title-wrapper">
                            <h1 class="title">BOX WITHOUT GLUE</h1>
                            <p>I love the asian architecture’s “Nailless” concept which always connects to the “embodiment of seamlessness”. Hence all the parts of the box were gule-less so as to express the idea : “A treasure-like cake should be placed in a seamless box”. 
After spending numerous time on studying packaging, I drafted my own version’s gule-less box.</p>
                        </div>
                        <div class="img"><img :src="require('@/assets/img/projects/design_project_1/draft.png')"></div>
                    </div>

                    <div class="col col-2">
                        <div class="title-wrapper">
                            <h1 class="title">PROTOTYPE</h1>
                            <p>I made a prototype to test the possibility of the design.</p>
                        </div>
                        <div class="img-wrapper">
                            <div class="img"><img :src="require('@/assets/img/projects/design_project_1/making1.jpeg')"></div>
                            <div class="img"><img :src="require('@/assets/img/projects/design_project_1/prototype.jpeg')"></div>
                            <div class="img"><img :src="require('@/assets/img/projects/design_project_1/prototype.png')"></div>
                        </div>

                   </div>

                    <div class="col col-3">
                        <div class="title-wrapper">
                            <h1 class="title">MANUFACTURING</h1>
                            <p>
                                After the testing, I contacted packaging manufacturers in China to make the box real. Dealing with the tricky Chinese manufacturer was the most challenging part in the whole process. In the end, I had tried 3 manufacturers to get the satisfactory result.
                                <br>
                                <br>
                                The logo was silver plated making it more elegant.



</p>
                        </div>
                        <div class="img-wrapper">   
                            <div class="img"><img :src="require('@/assets/img/projects/design_project_1/finish2.jpg')"></div>
                            <div class="img"><img :src="require('@/assets/img/projects/design_project_1/finish1.jpg')"></div>
                        </div>
                    </div>
                </div>
            </template>
            <!-- End of slot 3 -->
        </rotation-layout-4>

    </section>
</template>

<script>

import ProjectPageLayout from "../layout/ProjectPageLayout.vue";
import RotationLayout4 from "../layout/rotationLayout.vue";
import screenSizeDetection from "../../mixins/screenSizeDetection.vue";

export default {
    mixins:[screenSizeDetection],
    components:{
        ProjectPageLayout,
        RotationLayout4
    },
    data(){
        return {
            mainTitle : "Graphic and Packaging Design Project",
            subTitle: "2019 - JOYFUL HOUSE",
            linkToProjectDescription: "View Design Work",
            projectIconUrl: require('@/assets/img/projects/design_project_1/logo.png'),
            FrontEndTechList: [],
            BackEndTechList: [],
            DesignStyleList: [],
            mediaType:"image",
            mediaDisplayUrl: require('@/assets/img/projects/design_project_1/cover.jpeg'),
            backgroundColor:"White",
            fontColor:"Black",
            buttonColor:"grey",
            id: "#graphic-design-project-1",
            projectDescription :
            "In the spring of 2019,  My friend Jason was struggling in his cake shop business.  Since the rent of Hong Kong is ridiculously high, he planned to switch the business mode from physical dessert shop to online cake shop.  He asked my assistance to transform the image of the shop. I accepted this challenge with alacrity."+
            "<br><br>"+
            "With aid of Adobe Photoshop and Illustrator, I  re-designed the shop logo in minimalism style. Moreover Inspired by ancient Asian interlocking architecture concept - “Nailless”-  in construction,  I designed my own version’s “glue-less” cake box in order to put the brand on the high-end-track."
        }
    },
    mounted(){
        // pass proprs to "rotation-layout" slot
        this.$refs.rotationLayoutRef4.preSetting( );
        this.$refs.rotationLayoutRef4.buttonSetting = { 
            backgroundColor : "Grey",
            color:"White",
        }
        this.$refs.rotationLayoutRef4.boxClass = ".graphic-design-project-1 .space .box";
        this.$refs.rotationLayoutRef4.animationClass = { 
                'slot1':[],
                'slot2':[
                    '.new-icon',
                    '.arrow-wrapper',
                    '.old-icon',
                    // '.right-side p',
                    '#graphic-design-project-1 div div div.face4 div div.right-side div.ai-img img'
                ],
                'slot3':['.col.col-2','.col.col-3'],
                'slot4':[],
            }
        
        // Check if the device is horizontally rotated 
        // if true, add class "rotated" to the <section> tag
        // We treat the style of the horizontal screen separately
        this.deviceRotationResponse(this.id)
        window.addEventListener('resize',()=>{
            this.deviceRotationResponse(this.id);
        });


    },
    methods:{
        workDisplay(){
            document.querySelector(this.id).scrollIntoView();
            setTimeout(() => {
                this.$refs.rotationLayoutRef4.rotate('forward');
            }, 200);
        }
    }
}
</script>


<style lang="scss" scoped>
.web-graphic-design-project-1{
    background-color: rgb(255, 255, 255);
}

// slot 1
.slot-wrapper{
    position: relative;
    width:100%;
    height:100%;
    padding: 1rem;
    background-color: rgb(255, 255, 255);
    color:rgb(0, 0, 0);
    @include column-horizontal-center(); 
}
// End of slot 1


// slot 2 vertical
.slot2-wrapper{
    display: flex;
    width:100%;
    height:100%;
    overflow:scroll;


    .left-side{
        position:relative;
        display: none;  
        width:50%;
        height:100%;

        @media(min-width:1024px) {
            // when width > 1024, show the left side.
            display: unset;
        }

        .bg-img{
            position: absolute;
            // border:rgb(128, 128, 128) solid thin;
            height:100%;
            width:100%;
            
            img{
                // border:thin pink solid;
                height:100%;
                width:100%;
                object-fit: cover;
            }
        }

        .blackbox{
            min-width:320px;
            width:60%;
            background-color: rgba(0, 0, 0, 0.637);
            color:white;
            text-align: center;
            border:none;
            box-shadow: 1.4rem 1.4rem 1rem rgba(0, 0, 0, 0.37);
            @include child-center;
            // border:rgb(4, 245, 185) solid thin;
          
            h1{
                // border:grey solid thin;
                font-family: $secondary-font;
                margin-top:1rem;
                font-size: 2rem;
                letter-spacing: .4rem;;
            }
            h3{
                // border:grey solid thin;
                letter-spacing: .4rem;;
                font-family: Arial, Helvetica, sans-serif;
                font-weight: 100;
                font-size: 1.65rem;
            }
            p{
                // border:grey solid thin;
                font-family: $primary-font;
                font-size: 1.1rem;
                letter-spacing: .1rem;
                text-align: center;
                padding:2.4rem;
                line-height: 1.6rem;
            }
        }

    }

    .right-side{
        // border:rgb(240, 177, 3) solid thin;
        position:relative;
        background-color: white;
        top:0;
        right:0;
        width:100%;
        height:100%;
        padding: 1rem;
        // overflow: scroll;
        @include column-horizontal-center(); 


        @media(min-width:1024px){
            width:50%;
        }
    

        .title{
            // width:100%;
            // padding: 1rem;
            // text-align: center;
            // font-size: 1rem;
            // font-family: Arial, Helvetica, sans-serif;
            // font-weight: 600;
            // letter-spacing: .3rem;

            width: 100%;
            font-family: "Roboto", sans-serif;
            font-weight: 100;
            
            text-align: center;
            margin-bottom: 1rem;
            font-size: 1.7rem;
            letter-spacing: 0.1rem;


            // border:rgb(240, 177, 3) solid thin;
        }
        .icons-wrapper{
            position: relative;
            margin-top:3rem;
            // border:rgb(26, 107, 94) solid thin;
            width:90%;
            max-width:300px;
            display: flex;
            align-items: center;
            justify-content: space-between;
    
            .arrow-wrapper{
                width:80px;
                height:80px;
                opacity: 0;
                text-align: center;
                line-height: 50px;
                height:100%;
                transform:translateX(-100%);
                
           

                i{
                    @include child-center();
                    font-size: 2rem;
                    color:rgba(192, 185, 185, 0.904);
         
                }

                @keyframes arrowAnimation{
                    0%{
                        opacity: 0;
                        transform:translateX(-100%) ;
                    }
                    100%{
                        opacity: 1;
                        transform:translateX(0%);
                    }
                }
                &.animation{
                    animation: arrowAnimation 2s 1.5s forwards;
                }
            }
            .old-icon{
                width:80px;
                height:80px;
                opacity: 1;
                transform:translateX(100%);
                // animation: oldIconAnimation 5s 1s forwards;

                &.animation{
                    animation: oldIconAnimation 5s 1s forwards;
                }
           

                @keyframes oldIconAnimation {
                    0%{
                        opacity: 1;
                        transform:translateX(100%);
                    }
                    40%{
                        left:0;
                        top:50%;
                        opacity: 1;
                        transform:translateX(0%)
                    }
                    100%{
                        left:0;
                        top:50%;
                        opacity: .1;
                        transform:translateX(0%)
                    }

                }
                img{
                    width:100%;
                    height:100%;
                    object-fit: contain;
                }
            }
            .new-icon{
                min-width:80px;
                min-height:86px;
                width:55%;
                opacity: 0;
                // animation: newIconAnimation 3s 3s forwards;

                &.animation{
                    animation: newIconAnimation 3s 3s forwards;
                }

                img{
                    width:100%;
                    height:100%;
                    object-fit: contain;
                }

                @keyframes newIconAnimation {
                    0%{
                        opacity: 0;
                    }
                    100%{
                        opacity: 1;
                    }
                }
            }
        }
        p{
            margin-top: 2rem;
            color: rgb(85, 85, 85);
            padding: 1rem;
            @include contentFontSetting_320px();
            
            @media(min-width:760px){
                @include contentFontSetting_760px();
            }

            @media(min-width:1024px){
                padding:5rem;
            }
            
            opacity: 0;
            animation: showWords 3s 3.5s forwards;

            @keyframes showWords {
                0%{
                    opacity:0;
                }
                100%{
                    opacity:1;
                }
            }
        }
        .ai-img{
            position: absolute;
            width:100%;
            height:100%;
            bottom:0rem;
            left:0;
            text-align: center;     
            perspective: 100rem;
            display: none;
            

            img{
                width:100%;
                height:100%;
                object-fit: cover;
                transform-origin: bottom;
                transform: rotateX(0deg);
                opacity: 1;
                &.animation{
                    animation:backgroundRotate 1s forwards;
                }
            }



            @keyframes backgroundRotate {
                0%{
                    opacity: 1;
                    transform: rotateX(0deg);
                }
                100%{
                    opacity: .1;
                    transform: rotateX(60deg);
                }
                
            }
        }
    }
}

// End of slot 2

// slot 2 Horizontal
#graphic-design-project-1.rotated div div div.face4 .slot2-wrapper{
    width:100%;
    height:100%;
    overflow:scroll;

    .left-side{

        // max-width:600px;

        @media(min-width:560px){
            width:100%;
            display: unset;  
        }
        @media(min-width:810px){
            width:80%;
        }

        @media(min-width:1000px){
            width:50%;
        }
        @media(min-width:1200px){
            width:40%;
        }


        .bg-img{
            position: absolute;
            // border:rgb(128, 128, 128) solid thin;
            height:100%;
            width:100%;
            
            img{
                // border:thin pink solid;
                height:100%;
                width:100%;
                object-fit: cover;
            }
        }

        .blackbox{

            max-width:335px;
            max-height:276px;

            @media(min-width:560px){
                // height:80%;
                width:80%;
                min-width:0;
            }

            @media(min-width:660px){
                // height:54%;
                width:78.3%;
                min-width:0;
            }
            @media(min-width:1000px){
                width:65%;
                height:27%;
            }
           
    
            h1{
                @media(min-width:560px){
                    font-size: 1.3rem;
                }
                @media(min-width:660px){
                    font-size: 1.2rem;
                }
                @media(min-width:1000px){
                    font-size: 1.6rem;
                }
                @media(min-width:1300px){
                    font-size: 1.8rem;
                }
            }
            h3{
                @media(min-width:560px){
                    font-size: 0.65rem;
                }
                @media(min-width:660px){
                    font-size: 0.8rem;
                }
                @media(min-width:1000px){
                    font-size: 1.3rem;
                }
                @media(min-width:1300px){
                    font-size: 1.6rem;
                }
            }
            p{
                @media(min-width:560px){
                    font-family: "Nanum Myeongjo", serif;
                    font-size: 0.7rem;
                    letter-spacing: 0.1rem;
                    text-align: center;
                    padding: 0.7rem;
                    line-height: 1.1rem;
                }
                @media(min-width:660px){
                    font-size: 0.8rem;
                    line-height: 1.4rem;
                }
                @media(min-width:1000px){
                    font-size: 0.9rem;
                }
                @media(min-width:1300px){
                    font-size: 1.2rem;
                    line-height: 2rem;
                }
            }
        }

    }

    .right-side{
        // border:rgb(240, 177, 3) solid thin;
        position:relative;
        background-color: white;
        top:0;
        right:0;
        width:100%;
        height:100%;
        padding: 1rem;
        overflow: scroll;
        @include column-horizontal-center(); 


        @media(min-width:560px){
            width:100%;
        }
        @media(min-width:810px){
            width:100%;
        }
        @media(min-width:1000px){
            width:50%;
        }
        @media(min-width:1200px){
            width:60%;
        }


        .title{

            width: 100%;
            font-family: "Roboto", sans-serif;
            font-weight: 100;
            
            text-align: center;
            margin-bottom: 1rem;
            font-size: 1.7rem;
            letter-spacing: 0.1rem;

        }
        .icons-wrapper{
            position: relative;
            margin-top:3rem;
            width:90%;
            max-width:300px;
            display: flex;
            align-items: center;
            justify-content: space-between;
    
            .arrow-wrapper{
                width:80px;
                height:80px;
                opacity: 0;
                text-align: center;
                line-height: 50px;
                height:100%;
                transform:translateX(-100%);
                
           

                i{
                    @include child-center();
                    font-size: 2rem;
                    color:rgba(192, 185, 185, 0.904);
         
                }

                @keyframes arrowAnimation{
                    0%{
                        opacity: 0;
                        transform:translateX(-100%) ;
                    }
                    100%{
                        opacity: 1;
                        transform:translateX(0%);
                    }
                }
                &.animation{
                    animation: arrowAnimation 2s 1.5s forwards;
                }
            }
            .old-icon{
                width:80px;
                height:80px;
                opacity: 1;
                transform:translateX(100%);
                // animation: oldIconAnimation 5s 1s forwards;

                &.animation{
                    animation: oldIconAnimation 5s 1s forwards;
                }
           

                @keyframes oldIconAnimation {
                    0%{
                        opacity: 1;
                        transform:translateX(100%);
                    }
                    40%{
                        left:0;
                        top:50%;
                        opacity: 1;
                        transform:translateX(0%)
                    }
                    100%{
                        left:0;
                        top:50%;
                        opacity: .1;
                        transform:translateX(0%)
                    }

                }
                img{
                    width:100%;
                    height:100%;
                    object-fit: contain;
                }
            }
            .new-icon{
                min-width:80px;
                min-height:86px;
                width:55%;
                opacity: 0;
                // animation: newIconAnimation 3s 3s forwards;

                &.animation{
                    animation: newIconAnimation 3s 3s forwards;
                }

                img{
                    width:100%;
                    height:100%;
                    object-fit: contain;
                }

                @keyframes newIconAnimation {
                    0%{
                        opacity: 0;
                    }
                    100%{
                        opacity: 1;
                    }
                }
            }
        }
        p{
            margin-top: 2rem;
            color: rgb(85, 85, 85);
            padding: 1rem;
            @include contentFontSetting_320px();
            
            @media(min-width:760px){
                @include contentFontSetting_760px();
            }

            @media(min-width:1024px){
                padding:5rem;
            }
            
            opacity: 0;
            animation: showWords 3s 3.5s forwards;

            @keyframes showWords {
                0%{
                    opacity:0;
                }
                100%{
                    opacity:1;
                }
            }
        }
        .ai-img{
            position: absolute;
            width:100%;
            height:100%;
            bottom:0rem;
            left:0;
            text-align: center;     
            perspective: 100rem;
            

            img{
                width:100%;
                height:100%;
                object-fit: cover;
                transform-origin: bottom;
                transform: rotateX(0deg);
                opacity: 1;
                &.animation{
                    animation:backgroundRotate 1s forwards;
                }
            }



            @keyframes backgroundRotate {
                0%{
                    opacity: 1;
                    transform: rotateX(0deg);
                }
                100%{
                    opacity: .1;
                    transform: rotateX(60deg);
                }
                
            }
        }
    }
}


// End of slot 2



// slot 3
.slot3-wrapper{
    position: relative;
    width:100%;
    height:100%;
    background-color: rgb(255, 255, 255);
    color:rgb(0, 0, 0);
    padding: 1rem;
    display:flex;
    flex-direction: column;
    overflow: scroll;

    @media(min-width:1024px){
        perspective: 100rem;
        flex-direction: unset;
    }


    .col{
        position: relative;  
        width:100%;
        padding:0rem 2rem;
        // border:rgb(243, 10, 10) solid thin;
        @include column-horizontal-center();
        justify-content: space-evenly;
        color: rgb(85, 85, 85);
        margin-bottom:5rem;
        background-color: white;
        transform-style: preserve-3d;
         -webkit-transform-style: preserve-3d;
        // z-index: 1;


        @media(min-width:1024px){
            position: relative;  
            margin-bottom:2rem;

            &::after{
                content: "";
                position:absolute;
                left:0;
                top:0;
                width:101%;
                height:101%;
                background-color: rgb(255, 255, 255);
                // border:red solid thin;
                z-index: 0;
                transform:translateZ(-0.01rem);
                -webkit-transform:translateZ(-0.01rem);
                
            }
        }
        

        .title-wrapper{
            // z-index: 2;
            // width:100%;
            h1{
                // border:rgb(243, 10, 10) solid thin;
                font-family: Arial;
                font-size: 1.2rem;
                letter-spacing: .1rem;
                width:100%;
                text-align: center;
            }
            p{
                width:100%;
                margin-top:1rem;
                margin-bottom:1rem;
                // height:10rem;
                // border:rgb(243, 10, 10) solid thin;
                font-family: $primary-font;
                font-size: .8rem;
                letter-spacing: .1rem;
                line-height: 1.4rem;
                
                // margin-left:1rem;
                text-align: center;
            }
        }
    }

    .col.col-1{
       //  border:rgb(243, 10, 10) solid thin;
         z-index: 3;

        .img{
            // margin-top:3rem;
            width:100%;
            // border:rgb(243, 10, 10) solid thin;
            img{
                width:100%;
                object-fit: cover;
            }
        }




        &::before{
            content:"";
            position:absolute;
            left:0rem;
            top:0;
            width:100%;
            height:80%;
            border-right:grey thin solid;
            background-color: transparent;
            z-index: 4;
            transform:translateZ(1rem);
            -webkit-transform:translateZ(1rem);
        }
    }

    @keyframes folding {
        0%{
            // visibility: hidden;
            // opacity: 0;
            transform: rotateY(90deg);
            -webkit-transform:rotateY(90deg);
        }
        100%{
            // visibility: visible;
            // opacity: 1;
            transform: rotateY(0deg);
             -webkit-transform:rotateY(0deg);
        
        }
                
    }

    .col.col-2{
        z-index: 1;
        // border:rgb(243, 10, 10) solid thin;

        @media(min-width:1024px){
            flex-direction: column-reverse;
            justify-content: start;
            transform-origin: left;
            transform: rotateY(90deg);
             -webkit-transform-origin: left;
             -webkit-transform: rotateY(90deg); 
               
  
            
            &.animation{
                animation: folding 2s forwards;
            }
        } 
        &::before{
            content:"";
            position:absolute;
            left:0rem;
            bottom:0;
            width:100%;
            height:80%;
            border-right:grey thin solid;
            background-color: transparent;
            z-index: 2;
            transform:translateZ(1rem);
             -webkit-transform:translateZ(1rem);
        }  


        .img-wrapper{
            width:100%;
            display: flex;
            flex-wrap: wrap;
            margin-bottom:3rem;
            // border:rgb(90, 5, 5) solid thin;
        
            .img:nth-child(1){
               
                width:50%;
                // border:rgb(49, 5, 5) solid thin;
                img{
                    width:100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            .img:nth-child(2){
                width:50%;
                // border:rgb(11, 75, 148) solid thin;
                img{
                    width:100%;
                    height:100%;
                    object-fit: cover;
                }
            }
            .img:nth-child(3){
                width:100%;
                // border:rgb(243, 10, 204) solid thin;
                img{
                    width:100%;
                    height:100%;
                    object-fit: cover;
                }
            }
        }
        
    }

    .col.col-3{
        // border:rgb(243, 10, 10) solid thin;

        margin-bottom:2rem;

        @media(min-width:1024px){
            transform-origin: left;
            transform: rotateY(90deg);

            -webkit-transform-origin: left;
            -webkit-transform: rotateY(90deg);

            &.animation{
                animation: folding 2s 1s forwards;
            }
        }

        .img-wrapper{
            position: relative;
            width:100%;
            // height: 100%;
            // padding: 10rem;
            border:rgb(90, 5, 5) solid thin;

            .img:nth-child(1){
                // border:rgb(49, 5, 5) solid thin;
                // position:absolute;
                bottom:10rem;
                left:0;
                
                width:100%;
                height:100%;

                img{
                    width:100%;
                    height:100%;
                    object-fit: cover;
                }
            }
            .img:nth-child(2){
                // border:rgb(11, 75, 148) solid thin;
                position:absolute;
                right:0;
                top:0rem;
                width:40%;
                img{
                    width:100%;
                    height:100%;
                    object-fit: cover;
                }
            }
        }
    }

   
}

// End of slot 3



     
</style>