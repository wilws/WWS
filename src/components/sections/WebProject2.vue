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
        <!-- <template v-slot:slot2> -->
        <template v-slot:slot2>
            <image-screen  ref="ImageInFullScreen2Slot2" id="webProject2Slot2"></image-screen>
            <div class="slot2-wrapper" >
                <img :src="require('@/assets/img/projects/web_project_2/logo.png')" class="background-logo" />
                <div class="title-wrapper">
                    <div class="title">
                        <h1 v-html="mainTitle"></h1>
                        <h3>{{ subTitle }}</h3>
                    </div>
                </div>
                <div class="content-wrapper">

                    <div class="wrapper">
                        <div class="description">
                            <h6>Dig out Arbitrage Chance </h6>
                            <p>
                                In the red circle of the Picture-1, it shows that  if we make a “Long Butterfly” combination, the cost to pay is -7.32 HKD and the premium to receive is 7.38 HKD. The difference of 0.06 HKD means no matter where the price goes (up or down), that 0.06 HKD is for sure in your wallet. If you are so lucky that the price eventually falls on the desired point, you can take 2.56 HKD. 
                            </p> 
                        </div>
                        <div class="img" @click="showImageInFullScreen('webProject2Slot2',2, 'PHOTO-2020-10-26-02-22-18.jpg')">
                            <img :src="require('@/assets/img/projects/web_project_2/PHOTO-2020-10-26-02-22-18.jpg')" alt="">
                            <!-- <p>Picture-1</p> -->
                        </div>
                    </div>


                    <!-- <div class="wrapper">
                        <div class="img" @click="showImageInFullScreen('webProject2Slot2',2, 'PHOTO-2020-10-26-02-29-56.jpg')">
                            <img :src="require('@/assets/img/projects/web_project_2/PHOTO-2020-10-26-02-29-56.jpg')" alt="">
                            <p>Picture-2</p>
                        </div>
                        <div class="img" @click="showImageInFullScreen('webProject2Slot2',2, 'PHOTO-2020-10-25-13-44-32.jpg')">
                            <img :src="require('@/assets/img/projects/web_project_2/PHOTO-2020-10-25-13-44-32.jpg')" alt="">
                            <p>Picture-3</p>
                        </div>
                    </div> -->

                  

                    
                </div> 
            </div>
        </template>
        <!-- end of slot 2 -->

        <!-- slot 3-->
        <template v-slot:slot3>
            <image-screen  ref="ImageInFullScreen2Slot3" id="webProject2Slot3"></image-screen>
            <div class="slot3-wrapper">
                <img :src="require('@/assets/img/projects/web_project_2/logo.png')" class="background-logo" />
                <div class="title-wrapper">
                    <div class="title">
                        <h1 v-html="mainTitle"></h1>
                        <h3>{{ subTitle }}</h3>
                    </div>
                </div>

          <div class="content-wrapper">

                <div class="wrapper">
                    <div class="description">
                        <h6>Deploy on Google Cloud</h6>
                        <p>
                            Later I deployed the application on Google AppEngine. But it costed a lot and I finally gave up.
                        </p>
                    </div>

                    <div class="img" @click="showImageInFullScreen('webProject2Slot3',3, 'appEngiene.png')">
                        <img :src="require('@/assets/img/projects/web_project_2/appEngiene.png')" alt="">
                    </div>
                </div>


                <div class="wrapper">
                    <div class="description">  
                        <h6>Google AdSense</h6>
                        <p>
                            I also embeded ads inside the application. As lacking of advertisement of the website, it just could earn 148.17 HKD. Though the amount is so poor, but it is such a great experience to integrate application to Google’s services.
                        </p>
                    </div>

                    <div class="img" @click="showImageInFullScreen('webProject2Slot3',3, 'AdSense.png')">
                        <img :src="require('@/assets/img/projects/web_project_2/AdSense.png')" alt="">
                    </div>
                </div>  
            </div> 
        </div>
    </template>
    <!-- end of slot 3 -->


        </rotation-layout>

    </section>
</template>

<script>

import ImageScreen from "../layout/showImageInFullScreen.vue";


export default {
    components:{
        ImageScreen
    },

    mounted(){
        // Pass esential variable to rotation layout slot
        this.$refs.rotationLayoutRef2.preSetting( 
             {  
                backgroundColor : "#0099AF",   // assign style to rotation layout slot
                color:"White",  
            },
            ".web-project-2 .space .box"      // tell rotation layout which page it is
        )  
    },
    data(){
        
        return {
            // data to projectPage layout slot
            mainTitle : "Web Project 2",
            subTitle: "2018-OPTION KATZE",
            linkToProjectDescription: "View Project Description",
            projectIconUrl: require('@/assets/img/projects/web_project_2/logo.png'),
            FrontEndTechList: ['HTML+CSS','Javascript'],
            BackEndTechList: ['Python','Django', 'MySQL'],
            DesignStyleList: ['Bootstrip','JQuery','BeautifulSoup'],
            mediaType:"image",
            mediaDisplayUrl: require('@/assets/img/projects/web_project_2/cover.png'),
            backgroundColor:"Black",
         
            fontColor:"white",
            buttonColor:"#0099AF",
            id: "#web-project-2",
            projectCode:'Web_Project_2',
            projectDescription :
            "This is a web application to test the profit-loss of different option strategy."+
            "<br>"+
            "The application scraped option price data from internet, calculated contract price and volatility, formed different option strategies by longing or shorting  different contract at different strike price."+
             "<br>"+
            "<br>"+
            "The application sometimes could dig out arbitrage chance. Please click the 'View Project Description' button above to see a bit more."+
            "The application was built by Python with Django framework and styled with Bootstrap. BeautifulSoap was used for web scrapping. It was deployed on Google AppEngine and also joined Google AdSense, wishing to earn some to cover the expensive hosting cost.  However,  I am not so fascinated in option trading now.  There is no more maintenance on the application and the app is not able to function properly yet. Nevertheless,  it is a valuable experience to apply programming knowledge to tackle problem encountered in other sector."
        }
    },
    methods:{
 

        workDisplay(){
            document.querySelector(this.id).scrollIntoView();
            setTimeout(() => {
                this.$refs.rotationLayoutRef2.rotate('forward');
            }, 200);
        },



        showImageInFullScreen(id,slot,filename){  
            console.log(slot)
            // 1st para: "true" = open the image screen
            // 2nd para: tell the app which project is working on. app will search photo on the relative path
            switch(slot){
                case 2:
                    console.log('in 2')
                    this.$refs.ImageInFullScreen2Slot2.screenController(true,id,this.projectCode,filename)  
                    break;
                case 3:
                    console.log('in 3')
                    this.$refs.ImageInFullScreen2Slot3.screenController(true,id,this.projectCode,filename)  
                    break;
            }
        }
    }
}
</script>


<style lang="scss" scoped>
.web-project-2{
    background-color: rgb(0, 0, 0);
    // z-index: 1;
}


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
        width:100%;
        row-gap: 1rem;

        @media(min-width:800px){
            // margin-top:4rem;
            row-gap: 3rem;
        }

        .wrapper{
            position: relative;
            width:100%;
            display: flex;
            flex-direction: column;  
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





</style>