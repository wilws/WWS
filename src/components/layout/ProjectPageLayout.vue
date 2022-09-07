<template>

    <!-- secction -->
    <div class="section" :style="{ color:fontColor, backgroundColor:backgroundColor}">
        <div class="left-wrapper">
            <div class="upper-wrapper">
                <div class="left-side">
                    <h1 v-html="mainTitle"></h1>
                    <h3>{{ subTitle }}</h3>
                    <button :style="{ backgroundColor:buttonColor}" @click="workDisplay">{{ linkToProjectDescription }}</button>
                </div>

                <div v-if="projectIconUrl" class="right-side">
                    <img :src="projectIconUrl" alt="logo">
                </div>
            </div>
            <div class="lower-wrapper">
                <div class="content">
                    <p class="left-side">
                        <span v-html="projectDescription"></span>
                    </p>

                    <div class="bottom-side">
                        <div v-if="FrontEndTechList.length > 0">
                            <p class="tech-cat-tittle">Front End</p>
                            <li v-for="(tech, index) in FrontEndTechList" :key="index">
                                {{ tech }}
                            </li>               
                        </div>

                        <div v-if="BackEndTechList.length > 0">
                            <p class="tech-cat-tittle">Back End</p>
                            <li v-for="(tech, index) in BackEndTechList" :key="index">
                                {{ tech }}
                            </li>               
                        </div>

                        <div v-if="DesignStyleList.length > 0">
                            <p class="tech-cat-tittle">Remark</p>
                            <li v-for="(tech, index) in DesignStyleList" :key="index">
                                {{ tech }}
                            </li>               
                        </div>
                    </div>
                </div>

                
            </div>





        </div>
        <div class="right-wrapper">
            <div v-if="mediaType == 'video'" class="vidoe">
                <video :key="video" loop autoplay muted>
                    <source :src="mediaDisplayUrl" type="video/mp4">
                </video>
            </div>
            <div v-else class="img">
                <img :src="mediaDisplayUrl" alt="cover">
            </div>
        </div>

    </div>
    <!-- End of section -->
    

 



</template>


<script>


import screenSizeDetection from "../../mixins/screenSizeDetection.vue";
export default {
    mixins:[screenSizeDetection],
    props:[
        'mainTitle',
        'subTitle',
        'linkToProjectDescription',
        'projectIconUrl',
        'projectDescription',
        'FrontEndTechList',
        'BackEndTechList',
        'DesignStyleList',
        'mediaDisplayUrl',
        'mediaType',
        'backgroundColor',
        'fontColor',
        'buttonColor',
        'id'
    ],
    mounted(){
        this.contentShow();
        window.addEventListener("scroll",()=>{
            this.contentShow();
        });
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
            this.$emit('work-display');
        },
        contentShow(){
            // When scroll to Skill set page, trigger cardsRotation()

            const headerMovingItems =  [
                `${this.id} div div.left-wrapper div.upper-wrapper .left-side h1`,
                `${this.id} div div.left-wrapper div.upper-wrapper .left-side h3`,
                `${this.id} div div.left-wrapper div.upper-wrapper .left-side button`,
            ];

            const imgPath = `${this.id} div div.left-wrapper div.upper-wrapper .right-side img`;
            if (document.querySelector(imgPath)){
                headerMovingItems.push(imgPath);
            }
            const content = `${this.id}  div div.left-wrapper div.lower-wrapper div.content`;
            const page = document.querySelector(this.id);
            const travelDistance = window.innerHeight + window.pageYOffset;
            const triggerPoint = page.offsetTop + page.offsetHeight/3.5;
            
            if (travelDistance > triggerPoint){
                headerMovingItems.forEach((item) => {
                    document.querySelector(item).style.transform= 'translateX(0)';
                });      
                document.querySelector(content).style.opacity = '1';
            } 
        },

        locateSpecDiv(){
            //Abandoned Function//
            const lowerWrapperId = `${this.id} div div.left-wrapper div.lower-wrapper`;
            const lowerWrapperHeight = document.querySelector(lowerWrapperId).offsetHeight;
            const contentId = `${this.id} div div.left-wrapper div.lower-wrapper div p`;
            const contentHeight = document.querySelector(contentId).offsetHeight;
            if (lowerWrapperHeight > contentHeight){
               // Get the outer most div's height and padding-top
               const leftWrapperId =  `${this.id} div div.left-wrapper`;
               const leftWrapper = document.querySelector(leftWrapperId);
               const leftWrapperPaddingTop = parseInt(window.getComputedStyle(leftWrapper).paddingTop.replace('px',''));
               const leftWrapperHeight = leftWrapper.offsetHeight;
         
               // Get the upper header's div's height and margin bottom
               const upperWrapperId = `${this.id}  div div.left-wrapper div.upper-wrapper`;
               const upperWrapper = document.querySelector(upperWrapperId)
               const upperWrapperMarginBottom = parseInt(window.getComputedStyle(upperWrapper).marginBottom.replace('px',''));
               const upperWrapperHeight = upperWrapper.offsetHeight;
               const specDivId = `${this.id} div div.left-wrapper div.lower-wrapper div div`;
               const specDiv = document.querySelector(specDivId);
               const specDivHeight = specDiv.offsetHeight;
               const movingDistance = leftWrapperHeight - 2*leftWrapperPaddingTop - upperWrapperHeight - upperWrapperMarginBottom - contentHeight - specDivHeight ;
               specDiv.style.marginTop = `${movingDistance}px`;
            } 
        }
    }
}
</script>

<style lang="scss" scoped>
.section{
    position:relative;
    width:100%;
    height:100vh;
    // min-height:100vh;  
    display: flex;
    justify-content: start;
    border-top: rgb(0, 0, 0) thick solid;
    overflow: hidden;
    @include row-horizontal-center();



    .left-wrapper{

        position: relative;
        padding:1rem;
        width:100%;
        height:100%;
        // height:auto;
        // min-height:100vh;  
        display: flex;
        flex-direction: column;
         overflow: hidden;

        @media(min-width:320px){
            padding:1rem;
        }
        @media(min-width:760px){
            padding:2rem;
        }

        
        .upper-wrapper{
            position:relative;       
            display: flex;
            justify-content: space-between;
            visibility: none;
            margin-bottom:40px;

            @media(min-width:320px){
                margin-bottom:40px;
            }
            @media(min-width:760px){
                margin-bottom:50px;
            }

            .left-side{
                position: relative;
                width:60%;
                display: flex;
                flex-direction: column;
                justify-content: start;

                h1{
           
                    position: relative;
  
                    width:100%;
                    font-family: $secondary-font;
                    font-size:1.1rem;
                    text-align: left;
                    transform:translateX(-200%);
                    transition: transform 1s;

                    @media(min-width:320px){
                        font-size: 1.1rem;
                    }
                    @media(min-width:480px){
                        font-size: 1.4rem;
                    }
                    @media(min-width:600px){
                        font-size: 2rem;
                    }                      
                    @media(min-width:760px){
                        font-size: 2.3rem;
                    }
                    @media(min-width:1020px){
                        font-size: 3.2rem;
                    }
                }

                h3{
                    position: relative;
    
                    width:100%;
                    font-size: 0.6rem;
                    font-weight: 500;
                    font-family: $secondary-font;
                    letter-spacing: .1rem;
                    padding-left: .2rem;
                    margin-top:-.1rem;
                    text-align: left;
                    transform:translateX(-200%);
                    transition: transform 1s .1s;
                    
                    @media(min-width:320px){
                        font-size: 0.5rem;
                    }
                    @media(min-width:480px){
                        font-size: 0.6rem;
                    }
                    @media(min-width:600px){
                        font-size: 0.9rem;
                    }
                    @media(min-width:760px){
                        font-size: 1rem;
                        margin-top:-0.3rem;
                    }
                    @media(min-width:1020px){
                        font-size: 1.7rem;
                        margin-top:-0.7rem;
                    }

                }
                button{
                    position: relative;     
                    text-align: center;
                    border-radius: 1rem;
                    border: thin solid transparent;
                    color:white;
                    cursor: pointer;        
                    transform:translateX(-200%);
                    transition: transform 1s .3s;

                    @mixin buttonSetting_320px{
                        height: 1.3rem;
                        width: 7.6rem;;
                        font-size:.6rem;
                        margin-top:3px;
         
                    }
                 
                    @mixin buttonSetting_760px{
                        height: 2rem;
                        width: 11.8rem;
                        font-size: 0.9rem;
                    }
                    @mixin buttonSetting_1020px{
                        height: 2.8rem; 
                        width: 16.1rem;
                        font-size: 1.3rem;
                    }
                    @mixin buttonSetting_1300px{
                        height: 1.5rem;
                        width: 8.9rem;;
                        font-size:.7rem;
                        min-height: 1.5rem;
                    }
           


                    @media(min-width:320px){
                        @include buttonSetting_320px();
                    }

                    @media(min-width:760px){
                        @include buttonSetting_760px();
                    }
                    @media(min-width:1020px){
                        @include buttonSetting_1020px();
                    }
                    @media(min-width:1300px){
                        @include buttonSetting_1300px();
                    }


                    &:hover{
                        transform:scale(1.1);
                    }
                }
            }
            .right-side{
                // logo
                width:40%;
                height:100%;
                text-align: right;
                
                @media(min-width:320px){
                    width:40%;
                }
                @media(min-width:760px){
                    width:36%;
                }
                @media(min-width:1020px){
                    width:37%;
                }
     

                img{
                    z-index: 0;
                    width:100%;
                    object-fit: cover;
                    transform:translateX(200%);
                    transition: transform 1s;
                }
            }
        }

        .lower-wrapper{
           position: relative;
            overflow: hidden;
        //    height:auto;
            width:100%;
            height:100%;

            .content{
                position: relative;
                // overflow: auto;
                width:100%;
                height: 100%;
               
                overflow: scroll;
                opacity:0;
                transition:opacity 1s 1s;
  
                .left-side{
                    
                    span{
                        @include contentFontSetting_320px();
                        @media(min-width:768px){
                            @include contentFontSetting_760px()
                        }
                    }
                }
                .bottom-side{
                    position: relative;
                    font-family:'Lucida Sans';
                
                    div {
                        margin-top:2rem;
                        // border:red thin solid;
                    }

                    div .tech-cat-tittle{
                        font-weight: bold;
                        font-size: .8rem;
                        text-decoration: underline;
                        text-align: left;
                        letter-spacing: 0rem;
                        margin-bottom:.5rem;
                        @media(min-width:320px){
                            font-size: 0.8rem;
                        }

                    }
                    div li{
                        list-style: none;
                        text-align: left;
                        font-size: .6rem;
                        margin-top:.3rem;
                        @media(min-width:320px){
                            font-size: 0.6rem;
                        }
    
                    }
                }
            }


        }
    }
    .right-wrapper{
        display: none;
  

        // @media(min-width:1024px) and (max-height:1024px){
        //     display:unset;
        // }
        .vidoe{
            // width:100%;
            // height: 100%;
            // background:rgb(255, 255, 255);
            // text-align: right;
            
            video{
                // height:100%;   
                // object-fit: cover;
      
            }
        }

        .img{
            // width: 100%;
            // height: 100%;

            img{
                // height: 100%;
                // width:100%;
                // object-fit: cover;
            }
        }      
    }
}



.rotated .space .box .face1 .section,
.rotated .section{

    display: flex;
    flex-direction: row;
    align-items: flex-start;


    .left-wrapper{
         @media(min-width:560px){
             width:70%;
         }

        .upper-wrapper{
            @media(min-width:560px){
                margin-bottom: 20px;
            }
            // @media(min-width:560px){
            //     margin-bottom: 70px;
            // }
           
            .left-side{
              
                h1{
                    @media(min-width:560px){
                        font-size: 1rem;
                    }
 
                    @media(min-width:660px){
                        font-size: 1.4rem;
                    }
                    // @media(min-width:800px){
                    //     font-size: 2rem;
                    // }
                    @media(min-width:1300px){
                        font-size: 2.2rem;
                    }
                    // @media(min-width:1500px){
                    //     font-size: 2.8rem;
                    // }
                    // @media(min-width:1800px){
                    //     font-size: 1.1rem;
                    // }

                }

                h3{

                    @media(min-width:560px){
                        font-size: 0.5rem;
                    }
                    @media(min-width:660px){
                        font-size: 0.5rem;
                    }
                    @media(min-width:800px){
                        font-size: 0.8rem;
                        margin-top: -2px;
                    }
                    // @media(min-width:1000px){
                    //     font-size: 1rem;
                    //     margin-top: -3px;
                    // }
                    @media(min-width:1300px){
                        font-size: 1.1rem;
                        margin-top: -4px;
                    }
                    // @media(min-width:1500px){
                    //     font-size: 1.2rem;
                    // }

                }
                button{   
                    @media(min-width:560px){
                        font-size: 0.6rem;
                    }
                    @media(min-width:800px){
                        height: 1.7rem;
                        width: 9.2rem;
                        font-size: 0.7rem;
                    }
                    // @media(min-width:1020px){
                        
                    // }
                    // @media(min-width:1300px){
                       
                    // }
                    @media(min-width:1450px){
                        height: 2.1rem;
                        width: 11.8rem;
                        font-size: 0.9rem;
                    }
                    @media(min-width:1800px){
                        
                    }

                    &:hover{
                        transform:scale(1.1);
                    }
                }
            }
            .right-side{
                // logo
                width:40%;
                height:100%;
                text-align: right;
                
                @media(min-width:560px){
                    width:40%;
                }
                @media(min-width:660px){
                    width:40%;
                }
                @media(min-width:760px){
                    width:43%;
                }
                @media(min-width:1000px){
                    width:29%;
                }
                @media(min-width:1300px){
                    width:29%;
                }
                @media(min-width:1500px){
                    width:20%;
                }
                // @media(min-width:1600px){
                //     width:25%;
                // }


                img{
                    z-index: 0;
                    width:100%;
                    // height:100%;
                    // max-width:220px;
                    object-fit: cover;
                    transform:translateX(200%);
                    transition: transform 1s;
                }
            }
        }

        .lower-wrapper{
            position: relative;
           overflow:auto;


            .content{
                position: relative;
                overflow: auto;
                width:100%;
                height: 100%;
                opacity:0;
                transition:opacity 1s 1s;
         

                .left-side{
                    span{
                        @media(min-width:560px){
                            @include contentFontSetting_320px();
                        }

                        @media(min-width:1000px){
                            @include contentFontSetting_760px()
                        }
                    }
                }
                .bottom-side{
                    div {}

                    div .tech-cat-tittle{}
                    div li{}
                }
            }


        }
    }
    .right-wrapper{
        @media(min-width: 560px){

            // border:red thin solid;
            position: relative;
            width:50%;
            height:100vh;  
            display: flex;
            flex-direction: column;
            justify-content: start;
            z-index: 2;

        }
        .vidoe{
            @media(min-width: 560px){
                position: relative;
                width:100%;
                height: 100%;
                background:rgb(255, 255, 255);
                text-align: right;
            }
            video{
                @media(min-width: 560px){
                    // width:100%;  
                    height:100%; 
                    object-fit: cover;
                }
      
            }
        }

        .img{
            @media(min-width: 560px){
                width: 100%;
                height: 100%;
            }

            img{
                @media(min-width: 560px){
                    height: 100%;
                    width:100%;
                    object-fit: cover;
                }
            }
        }

      
    }
}


</style>