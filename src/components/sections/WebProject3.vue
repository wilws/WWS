<template>
    <section class="web-project-3" id="web-project-3">

        <rotation-layout ref="rotationLayoutRef3">
            
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
                <div class="slot-wrapper">
                    <div class="title-wrapper">
                        <div class="title">
                            <h1 v-html="mainTitle"></h1>
                            <h3>{{ subTitle }}</h3>
                        </div>
                    </div>
                    <div class="content-wrapper">
                        <div class="video-wrapper">
                            <video loop autoplay muted controls>
                                <source :src="require('@/assets/img/projects/web_project_3/optionkatze2.mp4')" type="video/mp4">
                            </video>
                        </div>
                    </div>
                </div>
            </template>
            <!-- end of slot 2 -->

        </rotation-layout>
    </section>
</template>

<script>

export default {

    mounted(){
        // pass proprs to "rotation-layout" slot
        this.$refs.rotationLayoutRef3.buttonSetting = { 
            backgroundColor : "#EAAB15",
            color:"White",
        }
        this.$refs.rotationLayoutRef3.boxClass = ".web-project-3 .space .box";
    },
    data(){
        return {
            // pass proprs to "project-page-layout" child component
            mainTitle : "Web Project 3",
            subTitle: "2019-OPTION KATZE II",
            linkToProjectDescription: "View Video Demo",
            projectIconUrl: require('@/assets/img/projects/web_project_3/logo.png'),
            FrontEndTechList: ['HTML/CSS','Javascript'],
            BackEndTechList: ['Python','Django', 'MySQL'],
            DesignStyleList: ['Ajax  for data exchange', 'Bootstrip for styling','JQuery'],
            mediaType:"image",
            mediaDisplayUrl: require('@/assets/img/projects/web_project_3/cover.png'),
            backgroundColor:"Black",
            fontColor:"white",
            id: "#web-project-3",
            buttonColor:"#EAAB15",
            projectDescription :  
            "RSI, MACD, SMA…etc. Those mysterious words from Technical Analysis  (TA) are always seen in stock world. TA is a method to predict the price movement of an asset. But it is always blamed by fundamental investors that TA is nothing but astrology. So, to dig out how accurate TA could be in investment, I made this application for back testing difference TA strategies, to see wether it is really profitable if disciplinarily following the TA strategies.  Yahoo-finance API is used to extract historical price data."+
            "<br>"+
            "<br>"+
            "By clicking the  “View Video Demo” button above, you can see if I buy 0002.hk when RSI is lower than 20 and sell when hight than 70, it in the end is a profitable strategy.  But it doesn’t mean that we can have the same positive result if adopting the same strategy on other assets."
        }
    },
    methods:{

        workDisplay(){
            document.querySelector(this.id).scrollIntoView();
            setTimeout(() => {
                this.$refs.rotationLayoutRef3.rotate('forward');
            }, 200);
        },

    }
}
</script>


<style lang="scss" scoped>
.web-project-3{
    // width:100vw;
    // height: 100vh;
    background-color: rgb(0, 0, 0);
}


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



#web-project-3.rotated div div div.face4 .slot-wrapper {

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
}

</style>