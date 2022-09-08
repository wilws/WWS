<template>
    <section class="skill-set-page" id="skill-set-page">
        <div class="header">
            <h1>Skill Set</h1>
            <h3>Here are the programming languages and <br>software that I use for web application development. </h3>

            <div class="card-switcher">
                <button @click="moveCard(0)"> Frontend </button>
                <button @click="moveCard(1)"> Backend </button>
                <button @click="moveCard(2)"> Database </button>
                <button @click="moveCard(3)"> Others </button>
            </div>
        </div>

        <!-- <div class="cards-wrapper-vertical-positioner"> -->

            <div class="cards-wrapper">
                <!-- card 1 Front End-->
                <div class="card-wrapper">
                    <div class="card" id="front-end-card">
                        <div class="card-title">
                            <h3>FRONTEND</h3>
                            <h4>TECHNIQUES</h4>
                        </div>

                        <!-- technology used -->

                        <div class="card-tech-chart">

                            <!-- Front-End-1 -->
                            <div class="tech-wrapper">
                                <div class="left-side">
                                    <img class="tech-icon" :src="require('@/assets/img/logos/Html-five-02.png')">
                                </div>
                                <div class="right-side">
                                    <div class="tech-name">HTML</div>
                                    <div class="tech-bar-wrapper">
                                        <div class="bar" id="html-bar"></div>
                                    </div>
                                </div>
                            </div>
                            <!-- End of Front-End-1 -->

                            <!-- Front-End-2 -->
                            <div class="tech-wrapper">
                                <div class="left-side">
                                    <img class="tech-icon" :src="require('@/assets/img/logos/CSS-3-01.png')">
                                </div>
                                <div class="right-side">
                                    <div class="tech-name">CSS / SASS </div>
                                    <div class="tech-bar-wrapper">
                                        <div class="bar" id="css-bar"></div>
                                    </div>
                                </div>
                            </div>
                            <!-- End of Front-End-2 -->


                            <!-- Front-End-3 -->
                            <div class="tech-wrapper">
                                <div class="left-side">
                                    <img class="tech-icon" :src="require('@/assets/img/logos/Javascript-01.png')">
                                </div>
                                <div class="right-side">
                                    <div class="tech-name">Javascript</div>
                                    <div class="tech-bar-wrapper">
                                        <div class="bar" id="javascript-bar"></div>
                                    </div>
                                </div>
                            </div>
                            <!-- End of Front-End-3 -->

                            <!-- Front-End-4 -->
                            <div class="tech-wrapper">
                                <div class="left-side">
                                    <img class="tech-icon" :src="require('@/assets/img/logos/Vue-js-01.png')">
                                </div>
                                <div class="right-side">
                                    <div class="tech-name">Vue.js</div>
                                    <div class="tech-bar-wrapper">
                                        <div class="bar" id="vuejs-bar"></div>
                                    </div>
                                </div>
                            </div>
                            <!-- End of Front-End-4 -->

                            <!-- Front-End-5 -->
                            <div class="tech-wrapper">
                                <div class="left-side">
                                    <img class="tech-icon" :src="require('@/assets/img/logos/React-02.png')">
                                </div>
                                <div class="right-side">
                                    <div class="tech-name">React.js</div>
                                    <div class="tech-bar-wrapper">
                                        <div class="bar" id="reactjs-bar"></div>
                                    </div>
                                </div>
                            </div>
                            <!-- End of Front-End-5 -->
                        


                        </div>
                        <!-- end of technology used -->
                    </div>
                    <!-- End of card -->
                </div>
                <!-- End of card 1 -->

                <!-- card 2 Back End -->
                <div class="card-wrapper">
                    <div class="card" id="front-end-card">
                        <div class="card-title">
                            <h3>BACKEND</h3>
                            <h4>TECHNIQUES</h4>
                        </div>

                        <!-- technology used -->
                        <div class="card-tech-chart">

                            <!-- Back-End-1 -->
                            <div class="tech-wrapper">
                                <div class="left-side">
                                    <img class="tech-icon" :src="require('@/assets/img/logos/Python-01.png')">
                                </div>
                                <div class="right-side">
                                    <div class="tech-name">Python</div>
                                    <div class="tech-bar-wrapper">
                                        <div class="bar" id="python-bar"></div>
                                    </div>
                                </div>
                            </div>
                            <!-- End of Back-End-1 -->

                            <!-- Back-End-2 -->
                            <div class="tech-wrapper">
                                <div class="left-side">
                                    <img class="tech-icon" :src="require('@/assets/img/logos/Django-01.png')">
                                </div>
                                <div class="right-side">
                                    <div class="tech-name">Django</div>
                                    <div class="tech-bar-wrapper">
                                        <div class="bar" id="django-bar"></div>
                                    </div>
                                </div>
                            </div>
                            <!-- End of Back-End-2 -->


                            <!-- Back-End-3 -->
                            <div class="tech-wrapper">
                                <div class="left-side">
                                    <img class="tech-icon" :src="require('@/assets/img/logos/Node-01.png')">
                                </div>
                                <div class="right-side">
                                    <div class="tech-name">NodeJs</div>
                                    <div class="tech-bar-wrapper">
                                        <div class="bar" id="nodejs-bar"></div>
                                    </div>
                                </div>
                            </div>
                            <!-- End of Back-End-3 -->

                            <!-- Back-End-4 -->
                            <div class="tech-wrapper">
                                <div class="left-side">
                                    <img class="tech-icon" :src="require('@/assets/img/logos/Express-01.png')">
                                </div>
                                <div class="right-side">
                                    <div class="tech-name">ExpressJs</div>
                                    <div class="tech-bar-wrapper">
                                        <div class="bar" id="expressjs-bar"></div>
                                    </div>
                                </div>
                            </div>
                            <!-- End of Back-End-4 -->

                            <!-- Back-End-5 -->
                            <div class="tech-wrapper">
                                <div class="left-side">
                                    <img class="tech-icon" :src="require('@/assets/img/logos/Php-02.png')">
                                </div>
                                <div class="right-side">
                                    <div class="tech-name">PHP</div>
                                    <div class="tech-bar-wrapper">
                                        <div class="bar" id="php-bar"></div>
                                    </div>
                                </div>
                            </div>
                            <!-- End of Back-End-5 -->


                            <!-- Back-End-6 -->
                            <div class="tech-wrapper">
                                <div class="left-side">
                                    <img class="tech-icon" :src="require('@/assets/img/logos/Laravel-02.png')">
                                </div>
                                <div class="right-side">
                                    <div class="tech-name">Laravel</div>
                                    <div class="tech-bar-wrapper">
                                        <div class="bar" id="laravel-bar"></div>
                                    </div>
                                </div>
                            </div>
                            <!-- End of Back-End-6 -->
                        
                        </div>
                        <!-- end of technology used -->
                    </div>
                    <!-- End of card -->
                </div>
                <!-- End of card 2 -->



                <!-- card 3 Database -->
                <div class="card-wrapper">
                    <div class="card" id="front-end-card">
                        <div class="card-title">
                            <h3>DATA BASE</h3>
                            <h4>MANAGEMENT</h4>
                        </div>

                        <!-- technology used -->
                        <div class="card-tech-chart">

                            <!-- Database-1 -->
                            <div class="tech-wrapper">
                                <div class="left-side">
                                    <img class="tech-icon" :src="require('@/assets/img/logos/Mysql-01.png')">
                                </div>
                                <div class="right-side">
                                    <div class="tech-name">MySQL</div>
                                    <div class="tech-bar-wrapper">
                                        <div class="bar" id="mysql-bar"></div>
                                    </div>
                                </div>
                            </div>
                            <!-- End of Database-1 -->

                            <!-- Database-2-->
                            <div class="tech-wrapper">
                                <div class="left-side">
                                    <img class="tech-icon"  :src="require('@/assets/img/logos/MongoDBLogo.png')">
                                </div>
                                <div class="right-side">
                                    <div class="tech-name">MongoDB</div>
                                    <div class="tech-bar-wrapper">
                                        <div class="bar" id="mongodb-bar"></div>
                                    </div>
                                </div>
                            </div>
                            <!-- End of Database-2 -->
                        
                        </div>
                        <!-- end of technology used -->
                    </div>
                    <!-- End of card -->
                </div>
                <!-- End of card 3 -->


                <!-- card 4 Others -->
                <div class="card-wrapper">
                    <div class="card" id="front-end-card">
                        <div class="card-title">
                            <h3>OTHERS</h3>
                            <!-- <h4></h4> -->
                        </div>

                        <!-- technology used -->
                        <div class="card-tech-chart">

                            <!-- other-1 -->
                            <div class="tech-wrapper">
                                <div class="left-side">
                                    <img class="tech-icon" style="width:70%" :src="require('@/assets/img/logos/Solidity_logo.svg.png')">
                                </div>
                                <div class="right-side">
                                    <div class="tech-name">Solidity</div>
                                    <div class="tech-bar-wrapper">
                                        <div class="bar" id="solidity-bar"></div>
                                    </div>
                                </div>
                            </div>
                            <!-- End of Database-1 -->

                            <!-- other-2-->
                            <div class="tech-wrapper">
                                <div class="left-side">
                                    <img class="tech-icon" :src="require('@/assets/img/logos/Adobe-indesign-01.png')">
                                </div>
                                <div class="right-side">
                                    <div class="tech-name">Adobe InDesign</div>
                                    <div class="tech-bar-wrapper">
                                        <div class="bar" id="indesign-bar"></div>
                                    </div>
                                </div>
                            </div>
                            <!-- End of Database-2 -->

                            <!-- other-3-->
                            <div class="tech-wrapper">
                                <div class="left-side">
                                    <img class="tech-icon" :src="require('@/assets/img/logos/Adobe-_xd_icon.png')">
                                </div>
                                <div class="right-side">
                                    <div class="tech-name">Adobe XD</div>
                                    <div class="tech-bar-wrapper">
                                        <div class="bar" id="xd-bar"></div>
                                    </div>
                                </div>
                            </div>
                            <!-- End of other-3 -->

                            <!-- other 4--->
                            <div class="tech-wrapper">
                                <div class="left-side">
                                    <img class="tech-icon" :src="require('@/assets/img/logos/Adobe-illustrator-01.png')">
                                </div>
                                <div class="right-side">
                                    <div class="tech-name">Adobe Illustrator</div>
                                    <div class="tech-bar-wrapper">
                                        <div class="bar" id="illustrator-bar"></div>
                                    </div>
                                </div>
                            </div>
                            <!-- End of other-4 -->


                            <!-- other 5--->
                            <div class="tech-wrapper">
                                <div class="left-side">
                                    <img class="tech-icon" :src="require('@/assets/img/logos/Adobe-photoshop-01.png')">
                                </div>
                                <div class="right-side">
                                    <div class="tech-name">Adobe PhotoShop</div>
                                    <div class="tech-bar-wrapper">
                                        <div class="bar" id="photoshop-bar"></div>
                                    </div>
                                </div>
                            </div>
                            <!-- End of Other-5 -->
                        
                        </div>
                        <!-- end of technology used -->
                    </div>
                    <!-- End of card -->
                </div>
                <!-- End of card 4 -->
            </div>
        <!-- </div> -->
    </section>
</template>


<script>

export default {

    data(){
        return {
            cardRotateDeg : -25,     // card rotation Y degree
            id: "#skill-set-page",
        }
    },
    mounted(){
        window.addEventListener('scroll',()=>{
            this.cardsScrollingRotateEffect();
        });
        // Check if the device is horizontally rotated 
        // if true, add class "rotated" to the <section> tag
        // We treat the style of the horizontal screen separately
        this.deviceRotationResponse(this.id)
        window.addEventListener('resize',()=>{
            this.deviceRotationResponse(this.id);
            this.moveCard(0);     // When screen change, need reposite back the card to the origin 
        });


    },
    methods:{
        moveCard(n){
            // [ small screen ] Moves cards-wrapper horizontally to display other cards 
            this.cardsRotation();
            const translateDistance = window.innerWidth * -n;
            document.querySelector('.cards-wrapper').style.transform = `translateX(${translateDistance}px)`;
            this.cardsRotation(this.cardRotateDeg,1000);
        },
        cardsScrollingRotateEffect(){
            // When scroll to Skill set page, trigger cardsRotation()
            const page = document.querySelector('#skill-set-page');
            const travelDistance = window.innerHeight + window.pageYOffset;
            const triggerPoint = page.offsetTop + page.offsetHeight/2;
            if (travelDistance > triggerPoint){
                this.cardsRotation(this.cardRotateDeg,500);
                //set capability value (the bar) of each technique
                this.SetCapabilityValue();
            } else {
                // this.cardsRotation();
            }
        },
        cardsRotation(deg=0,delayTime=0){
            // funtion that rotates the card.
            document.querySelectorAll('.card').forEach(card => {
                setTimeout(()=>{
                    card.style.transform = `rotateY(${deg}deg)`;
                },delayTime);
            })
        },
        SetCapabilityValue(){
            const v = {
                '#html-bar' : '100%',
                '#css-bar' : '100%',
                '#javascript-bar':'100%',
                '#vuejs-bar':'100%',
                '#reactjs-bar':'40%',
                '#python-bar':'100%',
                '#django-bar':'100%',
                '#nodejs-bar':'80%',
                '#expressjs-bar':'90%',
                '#php-bar':'40%',
                '#laravel-bar':'20%',
                '#mysql-bar':'60%',
                '#mongodb-bar':'60%',
                '#solidity-bar':'40%',
                '#indesign-bar':'100%',
                '#xd-bar':'90%',
                '#illustrator-bar':'70%',
                '#photoshop-bar':'70%'
            }

            Object.entries(v).forEach(([id, value])=>{
                document.querySelector(id).style.width = value;
            })
        } 
        
    }
}
</script>

<style lang="scss" scoped>

    $originalRotate: 0deg;

    .skill-set-page{
        position: relative;
        width:100vw;
        height:100vh;
        background-color: white;

      
        // padding:1.3rem;    //set here will affect the card moving
        $headerHeight: 20%;

        display: flex;
        flex-direction: column;
        
        .header{
            position:relative;
            height:20%;

      

            h1{
                @mixin h1FontSetting_320px {
                    font-size:1.7rem;
                    letter-spacing: .1rem;
                }
                @mixin h1FontSetting_760px {
                    font-size:2rem;
                }

                @mixin h1FontSetting_1020px {
                    font-size:2.5rem;
                }

                @mixin h1FontSetting_1300px {
                    font-size: 2.1rem;
                }
        
                width:100%;
                font-weight: 100;

                // text-align: center;
                color:black;
                font-family: 'Courier New', Courier, monospace;
                padding: 1.3rem 0 0 1.3rem;

                @media (min-width:320px){
                    @include h1FontSetting_320px();
                }
                
                @media (min-width:760px){
                    @include h1FontSetting_760px();
                }
                @media (min-width:1020px){
                    @include h1FontSetting_1020px();
                }

                @media (min-width:1300px){
                    @include h1FontSetting_1300px();
                }
            }



            h3{
                @mixin h3FontSetting_320px {
                    font-size:.6rem;
                }
                @mixin h3FontSetting_760px {
                    font-size: 1.2rem;
                }
                @mixin h3FontSetting_1020px {
                    font-size: 1.5rem;
                }
                @mixin h3FontSetting_1300px {
                    font-size: 1.2rem;
                }
                margin-top:.1rem;
                padding:0 1.3rem;
                font-weight: 100;
                width:100%;
                color:black;
                font-family: 'Courier New', Courier, monospace;


                @media (min-width:320px){
                    @include h3FontSetting_320px();
                }
                
                @media (min-width:768px){
                    @include h3FontSetting_760px();
                }

                @media (min-width:1020px){
                    @include h3FontSetting_1020px();
                }

                @media (min-width:1300px){
                    @include h3FontSetting_1300px();
                }
            }

            .card-switcher{
                width:100%;
                display: flex;
                justify-content: space-between;
                padding-left: 1.4rem;
                padding-right: 1.4rem;

                
                @media (min-width:320px){
                    margin-top:1rem;
                    margin-bottom:1rem;
                }

                @media (min-width:370px){
                    margin-top:1.5rem;
                    margin-bottom:2rem;
                }

                @media (min-width:760px){
                    margin-top:2rem;
                    margin-bottom:4rem;
                }

                @media (min-width:1300px){
                    display: none;
                }

                @media(max-height:484px){
                     margin-top:0rem;
                    margin-bottom:0rem;
                }

                button{
                    @mixin buttonSetting_320px {
                        font-size:.6rem;
                    }
                    @mixin buttonSetting_760px {
                        font-size: 1.2rem;
                    }

                    border:none;
                    background-color: none;
                    padding:.2rem;
                    color:black;

                    @media (min-width:320px){
                        @include buttonSetting_320px();
                    }
                    
                    @media (min-width:760px){
                        @include buttonSetting_760px();
                    }
                }
            }
        }

        $cardsWrapperHeight:calc(100% - $headerHeight);

        .cards-wrapper{      
            width: calc(100vw * 4);
            height: $cardsWrapperHeight ;
            // min-height: 700px;
            display: flex;
            justify-content: left;
            align-items: center;
            transition: transform 1s;
  
            @media (min-width:1300px){
                transform: translateX(0)  !important;;
                width: 100%;
                justify-content: space-around;
            }

        }

        
        .card-wrapper{
            $cardWidth_320px:80vw;
            $cardWidth_450px:45vw;
            $cardWidth_1020px:55vw;

            min-height: 273px;
            min-width: 182px;
            height:100%;
          

            @mixin cardSizeingSetting_320px{
                width:$cardWidth_320px;
                height:90%;
                max-height: 600px;
                
                margin-right:calc((100vw - $cardWidth_320px));   
                .card:nth-child(1){
                    margin-left:calc((100vw - $cardWidth_320px)/1.5);
                }

            }

            @mixin cardSizeingSetting_450px{
                width:$cardWidth_450px;
                height:90%;
                max-height: 600px;
                margin-right:calc((100vw - $cardWidth_450px));   
                .card:nth-child(1){
                    margin-left:calc((100vw - $cardWidth_450px)/1.8);
                }
            }

            @mixin cardSizeingSetting_1020px{
                width:$cardWidth_1020px;
                height:90%;
                max-height: 900px;
                margin-right:calc((100vw - $cardWidth_1020px));   
                .card:nth-child(1){
                    margin-left:calc((100vw - $cardWidth_1020px)/1.8);
                }
            }

            @media(min-width: 320px){
                @include cardSizeingSetting_320px();
            }
     
            @media(min-width:450px){
                @include cardSizeingSetting_450px();
            }

            @media(min-width:1020px){
                @include cardSizeingSetting_1020px();
            }

            transform-style: preserve-3d; 
            perspective: 100rem;

            .card{
                width: 100%;
                height: 100%;
                

                border: thin solid rgba(238, 235, 235, .5);
                border-radius: 1rem;
                box-shadow: 2rem 1.5rem .8rem #4442424f;
                transform: rotateY($originalRotate);
     
                background-color: #ffffff;
                transform-origin: center;
                transition:transform .5s;
                @include column-horizontal-center(); 


                .card-title{
                    margin:3rem;
                    @include column-horizontal-center(); 
                    @media(min-width:1020px){
                        margin:6rem;
                    }
                                       

                    
                    h3{
                        width:100%;
                        margin:0;
                        height:50%;
                        font-size: 1.4rem;
                        font-family: $quaternary-font;
                        font-weight: 600;
                        letter-spacing: 0.3rem;
                        text-align: center;
                        padding:0;

                        @media(min-width:1020px){
                            font-size: 2.5rem;
                        }
                    }
                    h4{
                        // @extend h3;
                        margin-top:.1rem;
                        width:100%;
                        height:50%;
                        font-size: 1.2rem;
                        font-weight:100;
                        letter-spacing: 0.3rem;
                        color: $grey;
                        text-align: center;
                        padding:0;
                        @media(min-width:1020px){
                            font-size: 1.9rem;
                        }
                    }
                }

                .card-tech-chart{
                    width:100%;
                    height: calc(100% - 7rem);
                     
                    // border:thin solid red;
                    overflow: hidden;
                    @include column-horizontal-center(); 
                    gap:5%;
     
                    padding: 0rem 10px 10px 10px;

                    .tech-wrapper{
                        width:80%;
                        // border:thin solid blue;
                        @include row-horizontal-center(); 
                    
                    
                        .left-side{   
                            // border:thin solid orange;
                            height: 100%;
                            width:2rem;
                            text-align: center;
                            @media(min-width:1020px){
                                width:4.5rem;
                            }

                            .tech-icon{
                                width:80%;
                                object-fit: cover;
                                @media(min-width:1020px){
                                   width:100%;
                                }

                            }
                        }
                        .right-side{
                            // border:thin solid red;
                            width:100%;
                            height:100%;
                            padding-left: 1rem;
                            @media(min-width:1020px){
                                padding-left: 2rem;
                            }
                            
                            .tech-name{
                                // border:thin solid orange;
                                // height:50%;
                                width:100%;
                                font-family: $tertiary-font;
                                font-size:.7rem;
                                color: $grey;
                                letter-spacing: .2rem;
                                @media(min-width:1020px){
                                     font-size:1.5rem
                                }
                            }
                            .tech-bar-wrapper{
                                // border:thin solid orange;
                                width:100%;
                                height:50%;
                                position: relative;
                                
                                .bar{
                                    @include vertical-center(); 
                                    // width:100%;
                                    width:0%;
                                    height:1px;
                                    background-color: rgb(0, 0, 0);
                                    transition: width 3s 1s;
                                    perspective: 100rem;
                                    z-index: 1;
                    
                                }
                            }
                        }

                    }
                }
            }
        }
    }





.skill-set-page.rotated{

    $headerHeight_h:20%;
    .header{

        // background-color: rgb(151, 149, 153);

        @media (min-width:560px){
            $headerHeight_h:20%;
            margin-bottom:.5rem;
            height:$headerHeight_h;
        }

        @media (min-width:700px){
            $headerHeight_h:14%;
            height:$headerHeight_h;
        }
        @media (min-width:1020px){
            $headerHeight_h:14%;
            height:$headerHeight_h;
        }
    
        h1{
            @media (min-width:560px){
                font-size: 1rem;
            }
            
            @media (min-width:660px){
                font-size: 1.3rem;
            }
            @media (min-width:1020px){
                font-size: 2rem;
            }
            // // @media (min-width:1020px){
            // //     @include h1FontSetting_1020px();
            // // }

            // // @media (min-width:1300px){
            // //     @include h1FontSetting_1300px();
            // }
        }



        h3{


            @media (min-width:660px){
                font-size:0.7rem;
            }
            @media (min-width:1020px){
                font-size:1.1rem;
            }
            // @media (min-width:768px){
            //     @include h3FontSetting_760px();
            // }

            // @media (min-width:1020px){
            //     @include h3FontSetting_1020px();
            // }

            // @media (min-width:1300px){
            //     @include h3FontSetting_1300px();
            // }

        }

        .card-switcher{
            display: none;

            button{}
        }
    }

    

    .cards-wrapper{ 
        // background-color: blue;

        @media (min-width:560px){
            // align-items: unset;
            justify-content: space-evenly;
            align-items: unset;
            width:100vw;
            height:calc(100% - $headerHeight_h);
        }

        @media (min-width:560px){
            // align-items: unset;
            margin-top:1.5rem;
        }

        @media (min-width:1020px){
             height:calc(100% - $headerHeight_h);
             align-items: center;
        }
        
        .card-wrapper{
            $cardWidth_h_560px:21vw;
           
            @mixin cardSizeingSetting_h_560px{
                width:$cardWidth_h_560px;
                height:85%;
                max-height: 350px;
            }

            @media(min-width: 560px){
                @include cardSizeingSetting_h_560px();
                margin:0;
                .card{
                    margin:unset;
                }
                &:nth-child(1){
                    margin-left:unset;
                }
            }

            @media(min-width:1000px){
                max-height:416px;
                max-width:215px;
                min-height:416px;
                min-width:215px;
            }

            @media(min-width:1300px){
                min-height: 497px;
                min-width: 292px;
                max-height: 497px;
                max-width: 292px;
            }
            @media(min-width:1450px){
                max-height: 569px;
                max-width: 314px;
            }
            @media(min-width:1800px){
                max-height: 800px;
                max-width: 400px;
            }
         
            
            .card{

                // justify-content: space-between;
       
                .card-title{

                    $cardTitleFont_h3_h_560px :0.6rem;
                    $cardTitleFont_h4_h_560px: 0.4rem;
                    @media(min-width:560px){
                        margin:1rem;
                    }
                    @media(min-width:660px){
                        margin:1.7rem;
                    } 
                    @media(min-width:730px){
                        margin:1.5rem;
                    } 
                    @media(min-width:1020px){
                        margin:2.6rem;
                    }
                    // @media(min-width:1300px){
                    //     margin:2rem;
                    // }
                    @media(min-width:1450px){
                        margin:3rem;
                    }
                    @media(min-width:1800px){
                        margin:4rem;
                    }                   


           
                    h3{
                        @media(min-width:560px){
                            letter-spacing: 0.2rem;
                            font-size: 0.6rem;
                        }
                        @media(min-width:730px){
                            letter-spacing: 0.2rem;
                            font-size: 0.7rem;
                        }
                        @media(min-width:1020px){
                            font-size: 1rem;
                        }
                        @media(min-width:1300px){
                            font-size: 1.7rem;
                        }
                        @media(min-width:1450px){
                            font-size: 1.9rem;
                        }
                        @media(min-width:1800px){
                            font-size: 2rem;
                        }  
                    }
                    h4{
                        @media(min-width:560px){
                            font-size: 0.4rem
                        }
                        @media(min-width:730px){
                            letter-spacing: 0.2rem;
                            font-size: 0.5rem
                        }
                        @media(min-width:1020px){
                            font-size: 0.7rem
                        }
                        @media(min-width:1300px){
                            font-size: 1.3rem;
                        }
                        @media(min-width:1450px){
                            font-size: 1.4rem;
                        }
                        @media(min-width:1800px){
                            font-size: 1.5rem;
                        }  
                    }
                }

                .card-tech-chart{
                    @media(min-width:560px){
                        // height:100%;
                        overflow: unset;
                        gap:0%;
                    }
                    @media(min-width:700px){
                       
                        gap:5%;
                    }
                    .tech-wrapper{
                        .left-side{   
                            @media(min-width:1020px){
                                width:2.5rem;
                            }
                            .tech-icon{
                                @media(min-width:560px){
                                    // min-height: 20px;
                                    min-width: 18px;
                                    object-fit:fill;
                                }
                                // @media(min-width:730px){
                                //     letter-spacing: 0.2rem;
                                //     font-size: 0.5rem
                                // }
                                @media(min-width:1020px){
                                    width:88%;
                                }
                                @media(min-width:1300px){
                                    width:100%;
                                }
                                // @media(min-width:1450px){
                                //     font-size: 1.4rem;
                                // }
                                // @media(min-width:1800px){
                                //     font-size: 1.5rem;
                                // }  
                            }
                        }
                        .right-side{
                            .tech-name{
                                @media(min-width:560px){
                                    overflow: hidden;
                                    font-size:0.4rem;
                                    letter-spacing: 0;
                                }
                                @media(min-width:730px){
                                    font-size:0.5rem;
                                }
                                @media(min-width:730px){
                                    letter-spacing: 0.2rem;
                                    font-size: 0.5rem
                                }
                                @media(min-width:1020px){
                                    font-size: 0.7rem
                                }
                                @media(min-width:1300px){
                                    font-size: 0.9rem;
                                }
                                // @media(min-width:1450px){
                                //     font-size: 1rem;
                                // }
                                @media(min-width:1800px){
                                    font-size: 1rem;
                                }  
                            }
                            .tech-bar-wrapper{
                                .bar{}
                            }
                        }
                    }
                }
            }
        }
    }
}












    // #html-bar{
    //     width:100%;
    // }
    // #css-bar{
    //     width:100%;
    // }
    // #javascript-bar{
    //     width:100%;
    // }
    // #vuejs-bar{
    //     width:100%;
    // }
    // #reactjs-bar{
    //     width:40%;
    // }
    // #python-bar{
    //     width:100%;
    // }
    // #django-bar{
    //     width:100%;
    // }
    // #nodejs-bar{
    //     width:90%;
    // }
    // #expressjs-bar{
    //     width:90%;
    // }
    // #php-bar{
    //     width:40%;
    // }
    // #laravel-bar{
    //     width:20%;
    // }
    // #mysql-bar{
    //     width:70%;
    // }
    // #mongodb-bar{
    //     width:70%;
    // }
    // #solidity-bar{
    //     width:40%;
    // }
    // #indesign-bar{
    //     width:100%;
    // }
    // #xd-bar{
    //     width:90%;
    // }
    // #illustrator-bar{
    //     width:90%;
    // }
    // #photoshop-bar{
    //     width:70%;
    // }

    

</style>