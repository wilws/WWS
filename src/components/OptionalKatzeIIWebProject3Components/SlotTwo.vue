
<template>
    <div class="slot-2" ref="optionKatzeIIWebProject1Slot2">
        
            <header class="header">
                <header-title
                    :mainTitle="mainTitle"
                    :subTitle="subTitle"
                    :fontColor="fontColor"
                />
            </header>

            <main class="content-wrapper">

                <img class="background-img" :src="require('@/assets/img/projects/web_project_3/logo.png')"/>
                
                
                <video loop autoplay muted controls playsinline>
                    <source :src="require('@/assets/img/projects/web_project_3/optionkatze2.mp4')" type="video/mp4">
                </video>
                
                
                <p class="description">
                    This is a demo video showing how the app automatically scrape company data from Morningstar.
                    The application will click the relevant buttons on screen and download the reports wanted.
                    Reports will be saved inside "data" folder.
                    Compant data is so valuable in evaluating the performance , as well as the stock price, of the comapany.
                </p>
            </main>

    </div>
</template>

<script>
import HeaderTitle from "../layout/HeaderTitle.vue";

export default {
    props:['isShow'],
    components:{HeaderTitle},
    mixin:['pageWheeler'],
    watch:{
        isShow(value){
            this.pageWheelerSetIsShow(value);
        }
    },
     mounted(){
        this.pageWheelerInit(this.$refs.optionKatzeIIWebProject1Slot2,this.isShow);
    },
    data(){
        return {
            mainTitle: "Django Project",
            subTitle: "2019-Option Katze II",
            fontColor: "#EAAB15",
        }
    }
}
</script>

<style lang="scss" scoped>


.slot-2{
    position:relative;
    width:100%;
    height:100%;
    background-color: black;
    font-family:$tertiary-font;
    overflow-y: scroll;
    overflow-x: hidden;
    padding:30px 30px 30px 30px;


    header{
        position:relative;
        width:100%;
        height:10%;
        margin-bottom:10px;
    }

    main{
        position: relative;
        width:100%;
        margin-top:20px;
        box-sizing: border-box;

        @media(min-width:1000px){
            margin-top:50px;
            border-top-left-radius: 80px;
            display: flex;
            flex-direction: row-reverse; 
            justify-content: flex-start;
            /* align-items: center;  */
        }



        img.background-img{
            position:absolute;
            left:0;
            top:0;
            width:100%;
            height:100%;
            object-fit: contain;
            z-index: 0;
            opacity: .1;
        }

        video{
            position:relative;
            object-fit:cover;
            width:100%;
            margin-bottom: 30px;
            z-index: 2;
            border:solid .4px #eaaa156c;
            box-shadow: 10px 10px 17px #eaaa1586;
            @media(min-width:1000px){
                width:60%;
                height:100%;

            }
        }
    
        p{
            color:#EAAB15;
            font-size: .8rem;
            line-height: 20px;
                    
            @media(min-width:500px){
                font-size: 1rem;
                line-height: 25px;
            }
            @media(min-width:800px){
                font-size: 1.2rem;
                line-height: 30px;
            }
            @media(min-width:1000px){
                width:40%;
                height:100%;
                font-size: 1.4rem;
                padding-right:10px;
                
            }
        }
    }
}

</style>