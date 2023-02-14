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
                <p>In the red circle of the picture below, it shows that if we make a “Long Butterfly” combination, the cost to pay is -7.32 HKD and the premium to receive is 7.38 HKD. The difference of 0.06 HKD means no matter where the price goes (up or down), that 0.06 HKD is for sure in your wallet. If you are so lucky that the price eventually falls to the desired point, you can take a maximum of 2.56 HKD.</p> 
                <img :src="require('@/assets/img/projects/web_project_2/PHOTO-2020-10-26-02-22-18.jpg')" alt="">
            </section>

             <section>
               
                <p>
                The picture below shows the profitability of above “Long Butterfly”  strategy. If we: <br>
                    - Buy 1 set of Call Contract@$135<br>
                    - Sell 2 sets of Call Contract@$137.5 <br>
                    - Buy 1 set of Call Contract@$140 <br>
                No matter how the price moves, the profit is always above "0".   It means it is sure to have positive cash flow if adopting this strategy.</p> 
                <img :src="require('@/assets/img/projects/web_project_2/PHOTO-2020-10-25-13-44-32.jpg')" alt="">
            </section>

            <section>
                <p>This is another example that Option Katze found an arbitrage chance.  To construct this option combination, you need to pay $2.34 for buying call options and receive $2.34 for selling call options. By doing this,  If the stock is at $6.05, we can take all ($0.25). If not, as you can see, the profit is always at "0". It means that the maximum loss is 0!  It is worth taking this risk-free trade.</p> 
                <img :src="require('@/assets/img/projects/web_project_2/PHOTO-2018-11-11-15-53-09.jpg')" alt="">
            </section>

            <section>
                <h3>Deploy on Google Cloud</h3>
                <p>I have once deployed the application on Google AppEngine. But it costed a lot and I finally gave up.</p>
                <img :src="require('@/assets/img/projects/web_project_2/appEngiene.png')" alt="">
            </section>


            <section>
                <h3>Google AdSense</h3>
                <p>
                    I also embedded ads inside the application. As lacking advertisement on the website, it just earned 148.17 HKD. Though the amount is so poor, it is such a great experience to integrate the application into Google’s services.
                </p>
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
        padding-bottom:30px;


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
            margin-bottom: 10px;
            padding-bottom:10px;
 
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
                    margin-bottom:20px;
                    /* line-height: 0px; */
                }
                /* @media(min-width:1000px){
                    font-size: 1.4rem;
                
                } */
       
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
