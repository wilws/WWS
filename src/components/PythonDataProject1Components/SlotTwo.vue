
<template>
    <div class="slot-2" ref="pythonDataProject1Slot2">
        
            <div class="header">
                <header-title
                    :mainTitle="mainTitle"
                    :subTitle="subTitle"
                    :fontColor="fontColor"
                />
            </div>
            <div class="content-wrapper">
                <div class="video-wrapper">
                    <video loop autoplay muted controls playsinline>
                        <source :src="require('@/assets/img/projects/python_data_project_1/demo.mp4')" type="video/mp4">
                    </video>
                </div>
                <div class="description">
                    <p>This is a demo video showing how the application automatically scrapes company data from Morningstar.</p>
                    <p>The application will click the relevant buttons on the screen and download the reports wanted.</p>
                    <p>Reports will be saved inside the "data" folder.</p>
                    <p>Company data is so valuable in evaluating the performance, as well as the stock price, of the company.</p>
                    <p class="warning">This application is for learning purposes only. Please subscribe service from morningstar to obtain company data for other uses.</p>
                </div>
            </div>
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
        this.pageWheelerInit(this.$refs.pythonDataProject1Slot2,this.isShow);
    },
    data(){
        return {
            mainTitle : "Python Project",
            subTitle: "2022-Company Data Scrapper",
            fontColor: "#0a69a2",
        }
    }
}
</script>

<style lang="scss" scoped>


.slot-2{
    position:relative;
    width:100%;
    height:100%;
    background-color: rgb(255, 255, 255);
    font-family:$tertiary-font;
    overflow-y: scroll;
    overflow-x: hidden;
    padding:30px 30px 30px 30px;


    .header{
        color:#0a69a2;
        position:relative;
        width:100%;
        height:10%;
        margin-bottom:10px
    }

    .content-wrapper{
        width:100%;
        height: 90%;
        padding: 20px;
        background-color: #0a69a2;
        border-bottom-right-radius: 80px;
        display: flex;
        flex-direction: column;
        overflow: scroll;
        box-shadow: 14px 14px 20px rgba(20, 20, 20, 0.295);
       

        @media(min-width:1000px){
            border-top-left-radius: 80px;
            flex-direction: row-reverse; 
            justify-content: flex-start;
            align-items: center; 
            padding: 50px;
            gap:40px;

        }
    
        .description{
            position: relative;
            width:100%;
            margin-top:20px;
            box-sizing: border-box;
  
            @media(min-width:1000px){
                width:40%;
                height:100%;
                padding: 20px 0;
                overflow: scroll;
                border-right:rgba(255, 255, 255, 0.26) solid thin;

            } 
      
            p{
                color:white;
                font-size: .8rem;
                margin-bottom: 10px;
            
                &.warning {
                    font-weight: bold;
                    color:red;
                }
                @media(min-width:500px){
                    font-size: 1.2rem;
                    margin-bottom: 20px;
                }
                /* @media(min-width:800px){
                    font-size: 1.2rem;
                    margin-bottom: 20px;
                } */
                @media(min-width:1000px){
                    padding-right: 30px;
                }
            }
        }

        .video-wrapper{
            position: relative;
            width:100%;
            
            video{
                object-fit:cover;
                width:100%;
            }
        }
    }
}

</style>