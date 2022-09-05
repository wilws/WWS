<template>
    <section class="index-page" id="index">


        <div class="img-wrapper">
            <div class="name">
                <h1>WAISHUN</h1>
                <h1>WONG</h1>
            </div>
            <div class="img">
                <img :src="require('@/assets/img/font_page/portfile.jpg')">
            </div>
        </div>

        <div class="introduction-wrapper">
            <div class="above-intro"> 
            </div>
            <div class="introduction">
                I am Wai Shun WONG, a self-taught full stack web developer. 
                <br><br>I specialise in VueJs, HTML and CSS/SACS/SCSS to construct frontend web application. For the backend side, I am proficient in using Python + Django or NodeJs + Express framework. I can construct RESTful API for the communication of both front and back ends. I also have knowledge to connect application to MySQL / MongoDB  to preform CRUD.
                <br><br>“Learn” and “Create” are what I passionate about. From design to coding and even to investment, applying newly absorbed knowledge to solve the problem encountered in reality brings me a great satisfaction. 
                <br><br>After Obtaining a Bachelor Degree in Biology in Hong Kong, I pursued a Postgraduate Diploma in Investment Management and Financial Intelligence. The knowledge obtained from postgraduate diploma always stimulating me what programming can do in financial aspect.  I recently finished a course of Solidity and Ethereum. I am seeking chances to participate in a relative project. But, I will never confine myself in single area as life is a journey of learning. My passion for learning and coding drive me to try and challenge as much as I can, no matter it is a frontend project, backend project or others.
          </div>
        </div>




    </section>
</template>

<script>
import screenSizeDetection from "../../mixins/screenSizeDetection.vue";
export default {
    mixins:[screenSizeDetection],
    mounted(){
        // Check if the device is horizontally rotated 
        // if true, add class "rotated" to the <section> tag
        // We treat the style of the horizontal screen separately
        this.deviceRotationResponse(this.id)
        window.addEventListener('resize',()=>{
            this.deviceRotationResponse(this.id);
        });
    },
    data(){
        return {
            id: "#index"
        }
    }
}
</script>

<style lang="scss" scoped>


.index-page{
    position:relative;
    width:100vw;
    background-color: rgb(255, 255, 255);

    .img-wrapper{
        position: relative;
        width:100%;
        height:45%;

        
        .img{
            // position: absolute;
            position:relative;
            width:100%;
            height:100%;
           
        
            top:0;
            right:0;
            // border: red thin solid;
    
            overflow: hidden;


 
            img{
                width: 80%;
                height:100%;      
                // border: red thin solid;
                float:right;
                
                object-fit:cover;
                overflow: hidden;
                @media (min-width:760px) {
                    width:60%;
                }
            }
        }

        .name{

            @mixin nameFontSetting_320px{
                bottom:-5%;
                right:30%;
                font-size: 1.5rem;
                letter-spacing: 0.3rem;
                line-height: 1.8rem;   
            }

            @mixin nameFontSetting_375px{  
                bottom:-5%; 
                right:30%;           
                font-size: 1.9rem;
                letter-spacing: 0.3rem;
                line-height: 2.5rem;
            }

            @mixin nameFontSetting_400px{  
                bottom:-3%; 
                right:30%;           
                font-size: 2.1rem;
                letter-spacing: 0.3rem;
                line-height: 2.9rem;
            }
            @mixin nameFontSetting_540px{  
                bottom: -2%;
                right: 46%;
            }
            @mixin nameFontSetting_680px{  
                bottom: -0.5%;
                font-size: 2.6rem;
                right: 46%;
            }      

            @mixin nameFontSetting_760px{
                bottom:-7%;
                right:37%;
                font-size: 3.7rem;
                letter-spacing: 0.3rem;
                line-height: 5.14rem; 
            }

            @mixin nameFontSetting_1020px{
                bottom:-7%;
                right: 40.7%;
                font-size: 4.7rem;
                letter-spacing: 0.3rem;
                line-height: 6.05rem;
                background-color: transparent;
            }


            @mixin nameFontSetting_1300px{
                top: 0.7%;
                bottom:-7%;
                right: 91.5%;     
                font-size: 3.5rem;
                letter-spacing: 0.5rem;
                line-height: 4.84rem;
                background-color: transparent;
            }

            position:absolute;
            font-family: 'Noto Sans TC', sans-serif;
            z-index: 1;
            padding: 0rem;
            text-align: right;
            text-shadow: 10px 10px 10px #d4d1d1;
            background-color: rgba(256,256,256,0.5);
            @include nameFontSetting_320px();

            @media (min-width:320px) {
                @include nameFontSetting_320px();
            }

            @media (min-width:375px) {
                @include nameFontSetting_375px();
            }

            @media (min-width:400px) {
                @include nameFontSetting_400px();
            }

            @media (min-width:540px) {
                @include nameFontSetting_540px();
            }

            @media (min-width:680px) {
                @include nameFontSetting_680px();
            }

            @media (min-width:760px) {
                @include nameFontSetting_760px();
            }

            @media (min-width:1020px) {
                @include nameFontSetting_1020px();
            }


            @media (min-width:1300px) {
                @include nameFontSetting_1300px();
            }

            h1:nth-child(2){
                margin-top:.2rem;
            }
        }
    }

    .introduction-wrapper{
        position: relative;     
        // height:50%;
        height:55%;
        width: 100%;
        padding:0 1.3rem 0rem 1.3rem;
        overflow: hidden;
        z-index: 0;
        display:flex;
        flex-direction: column;
  

        @media(min-width:760px){
            padding:0 3rem 3rem 3rem;
        }



        .above-intro{
            position: relative;
      
            @media(min-width:320px){
                margin-bottom:34px;
            }
            @media(min-width:760px){
                margin-bottom:48px;
            }
            @media(min-width:1000px){
                margin-bottom:65px;
            }
        }


        .introduction{
            position: relative;
            color: rgb(0, 0, 0);
            height:100%;
            overflow: scroll;
            @include contentFontSetting_320px();

            @media(min-width:320px){
                @include contentFontSetting_320px();
            }
            @media(min-width:760px){
                // height:calc(100% - $aboveIntroHeight_760px);
                @include contentFontSetting_760px();
            }
            // @media(min-width:1000px){
            //     height:calc(100% - $aboveIntroHeight_1000px);
            // }
        }
    }

    // .contact{
    //     position:absolute;
    //     right:5rem;
    //     bottom:5rem;
    //     color: rgb(141, 139, 139);
    //     font-family: $secondary-font;
    //     font-size: 1.4rem;
    //     letter-spacing: 0.3rem;
    //     text-align: right;

    // }
}

// Rotated style
.index-page.rotated{
    @media(min-width:560px){
        display:flex;
        flex-direction: row-reverse;
    }
    .img-wrapper{
        @media(min-width:568px){
            width:80%;
            height: 100vh;
        }
        .img{
            @media(min-width:568px){
                width:100%;
                height:100%;
            }
            img{
                @media(min-width:568px){
                    width:100%;
                    height:100%;
                    object-fit: cover;
                }
            }
        }

        .name{
 

            @mixin nameFontSetting_h_560px{  
                top:2%;
                left:unset;
                bottom:unset;
                right:87%;
                
                font-size: 1.5rem;
                letter-spacing: 0.3rem;
                line-height: 1.8rem;  
                width: 203px;
                height: auto;
                background-color: transparent;
        
            }      
            

            @mixin nameFontSetting_h_660px{
                top: 1.4%;
                right: 87%;
                font-size: 2rem;
                line-height: 2.4rem;
                width: 262.1px;
            }

            @mixin nameFontSetting_h_840px{
                top: 1.4%;
                right: 89.1%;
                font-size: 2.2rem;
                line-height: 2.7rem;
                width: 284.1px;
            }

            @mixin nameFontSetting_h_1000px{
                top: 1.4%;
                right: 86.1%;
                font-size: 3.2rem;
                line-height: 3.9rem;
                width: 399.1px;
            }


            @mixin nameFontSetting_h_1300px{
                top: 1.4%;
                right: 86.1%;
                font-size: 4.2rem;
                line-height: 5.3rem;
                width: 558.1px;
                letter-spacing: .7rem;
            }
        
            @media (min-width:560px) {
                @include nameFontSetting_h_560px();
            }


            @media (min-width:660px) {
                @include nameFontSetting_h_660px();
            }

            @media (min-width:840px) {
                @include nameFontSetting_h_840px();
            }

            @media (min-width:1000px) {
                @include nameFontSetting_h_1000px();
            }

            @media (min-width:1300px) {
                @include nameFontSetting_h_1300px();
            }

            h1:nth-child(2){}
        }
    }
    .introduction-wrapper{

        @media(min-width:560px){
            height:100%;
        }
      
        .above-intro{
            @media(min-width:560px){
                margin-bottom:5rem;
            }
            @media(min-width:660px){
                margin-bottom:6rem;
            }
            @media(min-width:1000px){
                margin-bottom: 10rem;
        
            }
            @media(min-width:1300px){
                margin-bottom:15rem;

            }

        }
        .introduction{ 
            @media(min-width:560px){
                position: relative;
                height:100%;
                overflow: scroll;   
            
                @include contentFontSetting_320px();
            }
            @media(min-width:1000px){
                // height:calc(100% - $aboveIntroHeight_760px);
                @include contentFontSetting_760px();
            }      
        }
    }
}



</style>