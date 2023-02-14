
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
                
                
                <article class="description">
                 
                    <section>
                    <p>
                        In this video, “CLP HOLDINGS” (ticker: 0002.hk) was chosen as an example to test the trading signal "RSI".
                        1-year daily price record which was provided by Yahoo Fiance API was used in this testing.
                        The trading strategy was set as follows:
                    </p>
                    </section>
                

                    <section>
                        <b>Entry Point: </b>
                        <ul>
                            <li>- Buy 1 stock when RSI is lower than or equal to 20</li>
                            <li>- Sell 1 stock when RSI is higher than or equal to 70</li>
                        </ul>
                    </section>

                    <section>
                        <b>Exit Point: </b> 
                        <ul>
                            <li>
                                <ul>
                                    <li> - For the long position, close the position when:</li>
                                    <li>{{'\xa0'}} ** 10% profit was made, or, </li>
                                    <li>{{'\xa0'}} ** 5% loss was made</li>
                                </ul>
                            </li>
                            <br>
                            <li>
                                <ul>
                                    <li>- For the short position, close the position when:</li>
                                    <li>{{'\xa0'}} ** 20% profit was made, or,</li>
                                    <li>{{'\xa0'}} ** 10% loss was made</li>
                                </ul>
                            </li>              
                        </ul>
                    </section>

                    <section>
                        <b>Length of Holding</b> 
                        <p>The position would keep opening until exit points were met.</p>    
                    </section>

                    <hr><br>  <br>
      
                    
                    <section>
                    <b>Result</b>
                    <p>There were 66 trades in a year</p><br>

                    <b>For long position:</b>
                    <ul>
                        <li>- 16 trades were made</li>
                        <li>- 4  trades were lost</li> 
                        <li>- 0 trade won</li>
                        <li>- 12 trades were still open and did not meet the exit point</li>
                    </ul>
                    <br>
                    <b>For Short position:</b>
                    <ul>
                        <li>- 25 trades were made</li>
                        <li>- 0  trades lost</li> 
                        <li>- 21 trades won </li>
                        <li>- 4 trades were still open and did not meet the exit point</li>
                    </ul>
                    <br>
                    <b>The total profit is 265.65 HKD</b>
                    <p>Shorting this stock earns more than longing in this bearish environment</p>
                    </section>
                </article>
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
    @media(min-width:800px){
        padding-left:50px;
    }


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
        max-width:1000px;
        box-sizing: border-box;

        @media(min-width:1000px){

            /* margin-top:50px;
            border-top-left-radius: 80px;
            display: flex;
            flex-direction: row-reverse; 
            justify-content: flex-start; */
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
            /* @media(min-width:1000px){
                width:60%;
                height:100%;

            } */
        }

        article {

            section{
                min-height: unset;
                height: fit-content;
                margin-bottom: 20px;
                width:100%;
                b{
                    font-size: 1.5em;
                }
                h3,ul {
                    margin-bottom:2px;
                }
                p {
                    margin-bottom:10px;
                    @media(min-width:800px){
                        font-size: 1.2rem;
                         margin-bottom:20px;
                    }
                }
            }

            

            &>*{
                color:#EAAB15;
                font-size: .8rem;
                line-height: 20px;
                text-align: justify;
                        
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
                    /* font-size: 1.4rem; */
                    padding-right:10px;
                    
                }
            }
        }
    }
}

</style>