<template>
    <div class="slot-2" ref="optionKatzeWebProjectSlot2">
        
        <header>
            <header-title
                :mainTitle="mainTitle"
                :subTitle="subTitle"
                :fontColor="fontColor"
            />
        </header>

        <article>
             <img class="background-img" :src="require('@/assets/img/projects/web_project_2/logo.png')"/>

            <section>
                <h3>Dig out Arbitrage Chance </h3>
                <p>In the red circle of the Picture-1, it shows that  if we make a “Long Butterfly” combination, the cost to pay is -7.32 HKD and the premium to receive is 7.38 HKD. The difference of 0.06 HKD means no matter where the price goes (up or down), that 0.06 HKD is for sure in your wallet. If you are so lucky that the price eventually falls on the desired point, you can take 2.56 HKD. </p> 
                <img :src="require('@/assets/img/projects/web_project_2/PHOTO-2020-10-26-02-22-18.jpg')" alt="">
            </section>

             <section>
                <h3>Dig out Arbitrage Chance </h3>
                <p>In the red circle of the Picture-1, it shows that  if we make a “Long Butterfly” combination, the cost to pay is -7.32 HKD and the premium to receive is 7.38 HKD. The difference of 0.06 HKD means no matter where the price goes (up or down), that 0.06 HKD is for sure in your wallet. If you are so lucky that the price eventually falls on the desired point, you can take 2.56 HKD. </p> 
                <img :src="require('@/assets/img/projects/web_project_2/PHOTO-2020-10-25-13-44-32.jpg')" alt="">
            </section>

            <section>
                <h3>Dig out Arbitrage Chance </h3>
                <p>In the red circle of the Picture-1, it shows that  if we make a “Long Butterfly” combination, the cost to pay is -7.32 HKD and the premium to receive is 7.38 HKD. The difference of 0.06 HKD means no matter where the price goes (up or down), that 0.06 HKD is for sure in your wallet. If you are so lucky that the price eventually falls on the desired point, you can take 2.56 HKD. </p> 
                <img :src="require('@/assets/img/projects/web_project_2/PHOTO-2018-11-11-15-53-09.jpg')" alt="">
            </section>

             <section>
                <h3>Dig out Arbitrage Chance </h3>
                <p>In the red circle of the Picture-1, it shows that  if we make a “Long Butterfly” combination, the cost to pay is -7.32 HKD and the premium to receive is 7.38 HKD. The difference of 0.06 HKD means no matter where the price goes (up or down), that 0.06 HKD is for sure in your wallet. If you are so lucky that the price eventually falls on the desired point, you can take 2.56 HKD. </p> 
                <img :src="require('@/assets/img/projects/web_project_2/PHOTO-2018-11-11-15-58-43.jpg')" alt="">
            </section>


            <section>
                <h3>Deploy on Google Cloud</h3>
                <p>Later I deployed the application on Google AppEngine. But it costed a lot and I finally gave up.</p>
                <img :src="require('@/assets/img/projects/web_project_2/appEngiene.png')" alt="">
            </section>

            <section>
                <h3>Deploy on Google Cloud</h3>
                <p>Later I deployed the application on Google AppEngine. But it costed a lot and I finally gave up.</p>
                <img :src="require('@/assets/img/projects/web_project_2/appEngiene.png')" alt="">
            </section>


            <section>
                <h3>Google AdSense</h3>
                <p>I also embeded ads inside the application. As lacking of advertisement of the website, it just could earn 148.17 HKD. Though the amount is so poor, but it is such a great experience to integrate application to Google’s services.</p>
                <img :src="require('@/assets/img/projects/web_project_2/AdSense.png')" alt="">
            </section>


        </article>

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
    data(){
        return {
            mainTitle : "Django Project",
            subTitle: "2018-OPTION KATZE",
            fontColor: "#0099AF",
        }
    },
    mounted(){
        this.pageWheelerInit(this.$refs.optionKatzeWebProjectSlot2,this.isShow);
    },
}
</script>

<style lang="scss" scoped>

section {
    height:unset;
    width:unset;
    min-height: unset;
}
.slot-2{
    position:relative;
    width:100%;
    height:100%;
    padding:20px;
    background-color: rgb(15, 4, 30);
    font-family:$tertiary-font;
    overflow-y: scroll;
    overflow-x: hidden;
    @media(min-width:800px){
        padding-left:50px;
    }
  
    header{
        position:relative;
        width:100%;
    }

    article{

        position: relative;
        width:100%;
        height:100%;
        margin-top:40px;

        .background-img {
            position:absolute;
            left:0;
            top:0;
            width:100%;
            height:100%;
            object-fit: contain;
            z-index: 0;
            opacity: .2;
        }

        section {
            position: relative;
            max-width:1000px;
            height:fit-content;
            min-height: unset;
            width:100%;
            z-index: 2;
            margin-bottom: 20px;
            padding-bottom:30px;
 
            @media(min-width:500px){
                margin-bottom: 50px;
            }

            @media(min-width:800px){
                margin-bottom: 80px;
            }

            h3 {
                position:relative;
                width:100%;
                margin-bottom:10px;
                font-family:$primary-font;
                font-weight: 900;
                font-size: 1rem;
                text-decoration: underline;
                text-transform: uppercase;
                color:#0099AF;
               
                @media(min-width:500px){
                    font-size: 1.2rem;
                }
                @media(min-width:800px){
                    margin-top:10px;
                    margin-bottom:10px;
                    font-size: 1.4rem;
                }
                @media(min-width:1000px){
                    font-size: 1.6rem;
                }
            }

            p {
                position:relative;
                color:white;
                margin-bottom:10px;

                @media(min-width:500px){
                    font-size: 1rem;
                    line-height: 25px;
                }
                @media(min-width:800px){
                    font-size: 1.2rem;
                    line-height: 30px;
                }
                @media(min-width:1000px){
                    font-size: 1.4rem;
                
                }
       
            }

            img {
                position:relative;
                width:100%;
                /* height:100%; */
                object-fit: contain;
                border:#0099AF 3px solid;
                border-radius: 30px;
                overflow: hidden;
                background-color: #0099AF ;

            }
        }

    }
}
</style>
