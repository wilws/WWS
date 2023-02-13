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

        <main class="introduction-wrapper">
            <span class="above-intro"></span>
            <article class="introduction">

                <section>            
                    <h3 class="subtitle">ABOUT ME</h3>
                    <p> I am Wai Shun WONG, a full-stack web developer. </p>
                    <p> I believe that the best way to grow is to embrace new challenges. Shortly after graduating from University, I taught myself to be a PHP Web Programmer. Then, I changed my profession to Health Inspector of the Hong Kong Government. To explore more in life, my latest challenge now is to restart my life in the United Kingdom. </p>
                    <p>With possessing a passion for coding, I continuously expand my knowledge in software development from a variety of sources. This thirst for knowledge and self-improvement help me a lot in understanding coding practices. I believe all the knowledge that I have absorbed can assist me to deliver high-quality products. </p>
                </section>

                <section>   
                    <h3 class="subtitle">EDUCATION BACKGROUND</h3>
                    <p>To catch up with modern technology, I enrolled in a web programming course organised by Northcoders, a listed corporation providing training programs for software development.</p>
                    <p>Besides attending a course in the physical classroom, I enrolled, all these years, in various online courses - from web/mobile application development to blockchain technology - in Udemy. I am highly passionate about learning and creating. Applying newly absorbed knowledge to solve problems brings me great satisfaction. </p>
                </section>   

                <section>   
                    <h3 class="subtitle">CONTACT</h3>
                    <ul>
                    <li>Email: wilson.ws.pro@gmail.com </li>
                    <li>Blog: https://wilsonsdevnotes.blogspot.com</li>
                    <li>Github: https://github.com/wilws/</li>
                    </ul>
                </section>   
          </article>
        </main> <!-- end of introduction-wrapper -->
    </section>
</template>

<script>
export default {
    data(){
        return {
            id: "#index",
        }
    },

    mounted(){
        // [ Global Mixin function ]
        // Check if the device is horizontally rotated 
        // if true, add class "rotated" to the <section> tag
        // We treat the style of the horizontal screen separately
        this.deviceRotationResponse(this.id)
        window.addEventListener('resize',()=>{
            this.deviceRotationResponse(this.id);          
        });
    },
}
</script>

<style lang="scss" scoped>

 /* *{
        border:red thin solid;
    } */

.index-page{
    position:relative;
    width:100vw;
    background-color: rgb(255, 255, 255);
    @include contentFontSetting_320px();

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
        height:55%;
        width: 100%;
        padding:0 0.1rem 0.9rem 0.1rem;
        overflow: hidden;
        z-index: 0;
        display:flex;
        flex-direction: column;
        /* border:rgb(14, 34, 14) thick solid; */
  

        @media(min-width:760px){
            padding:0 3rem 3rem 3rem;
        }

        .above-intro{
            position: relative;
            /* border: red thin solid; */
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
            color: black;
            height:100%;
            overflow: scroll;
            padding:1.2rem;

            @media(min-width:320px){
                @include contentFontSetting_320px();
            }
            @media(min-width:760px){
                padding:2rem;
                @include contentFontSetting_760px();
            }

            section{
                min-height: unset;
                margin-bottom:20px;
            
                b{
                    font-weight: bolder;
                    // text-decoration: underline;
                    text-transform: uppercase;
                    letter-spacing: .1rem;
                    font-family: 'Courier New', Courier, monospace;
            
                }
            }
        }
    }
}

// Rotated style

$min-width:560px;
.index-page.rotated{

    @media(min-width:500px){   
        
        display:flex;
        flex-direction: row-reverse;

    }

    .img-wrapper{
        @media(min-width:$min-width){
            width:80%;
            height: 100vh;
        }
        .img{
            @media(min-width:$min-width){
                width:100%;
                height:100%;
            }
            img{
                @media(min-width:$min-width){
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
        
            @media (min-width:$min-width) {
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

        @media(min-width:$min-width){
            height:100%;
        }
      
        .above-intro{
            @media(min-width:$min-width){
                margin-bottom:8rem;
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
            color: rgb(31, 29, 29);
            @media(min-width:$min-width){
                position: relative;
                height:100%;
                overflow: scroll;   
            
                @include contentFontSetting_320px();

                @media(min-width:1000px){
                    // height:calc(100% - $aboveIntroHeight_760px);
                    @include contentFontSetting_760px();
                }  

            }
        }
    }
}



</style>