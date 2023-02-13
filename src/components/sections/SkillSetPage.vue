<template>
    <section class="skill-set-page" id="skill-set-page">

        <div class="header">
            <h1>Skill Set</h1>
            <h3>Here are the tools that I use for web application development. 
            </h3>

            <div class="card-switcher">
                <button @click="moveCard(0)"> Frontend </button>
                <button @click="moveCard(1)"> Backend </button>
                <button @click="moveCard(2)"> Database </button>
                <button @click="moveCard(3)"> Others </button>
            </div>
        </div>

        <div class="cards-wrapper" >
            <skill-card
                v-for="skillset in skillsets"  
                :key= skillset.id
                :id= skillset.id
                :skills= skillset.skills
                :title= skillset.title
                :subtitle= skillset.subtitle
                :scrollToPage= scrollToPage
                :currentCard= currentCard 
            >
            </skill-card>
        </div>
  
    </section>
</template>


<script>

import skillsetData from "../SkillSetPageComponents/SkillSet";
import SkillCard from "../SkillSetPageComponents/SkillCard.vue";

export default {
  components: { SkillCard },

    data(){
        return {
            cardRotateDeg : -25,     // card rotation Y degree
            id: "#skill-set-page",
            skillsets: skillsetData,
            scrollToPage : false,
            currentCard : 0,
        }
    },

    mounted(){
        window.addEventListener('scroll',()=>{
            this.scrollToPageDetection();
        });
    },

    methods:{
        moveCard(n){
            this.currentCard = n;
        },
        scrollToPageDetection(){
            // When scroll to Skill set page, trigger cardsRotation()
            const page = document.querySelector('#skill-set-page');
            const travelDistance = window.innerHeight + window.pageYOffset;
            const triggerPoint = page.offsetTop + page.offsetHeight/2;
            if (travelDistance > triggerPoint){
                this.scrollToPage = true;
            } else {
                this.scrollToPage = false;
            }
        }
    }
}
</script>

<style lang="scss" scoped>


    $originalRotate: 0deg;

    .skill-set-page {
        border-top: rgb(0, 0, 0) thick solid;
        position: relative;
        width:100vw;
        height:100vh;
        background-color: white;
        display: flex;
        flex-direction: column;

        
        .header{
            position:relative;
            max-height: 130px;
            height:100%;
        
             @media (min-width:760px){
                height:200px;
                max-height: unset;
             
             } 

            @media (min-width:1130px){
                height:120px;
            }

            h1{
                width:100%;
                font-weight: 100;
                color:black;
                font-family: 'Courier New', Courier, monospace;
                padding: 1.3rem 0 0 1.3rem;

                @media (min-width:320px){
                    font-size:1.7rem;
                    letter-spacing: .1rem;
                }
                
                @media (min-width:760px){
                   font-size:2rem;
                }
                @media (min-width:1020px){
                    font-size:2.5rem;
                }
            }



            h3{
                margin-top:.1rem;
                padding:0 1.3rem;
                font-weight: 100;
                width:100%;
                color:black;
                font-family: 'Courier New', Courier, monospace;


                @media (min-width:320px){
                     font-size:.6rem;
                }
                
                @media (min-width:768px){
                   font-size: 1.2rem;
                }
            }

            .card-switcher{
                width:100%;
                display: flex;
                justify-content: space-between;
                padding-left: 1.4rem;
                padding-right: 1.4rem;
                margin-bottom:1rem;
                z-index: 10;

                
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

                @media (min-width:1130px){
                    display: none;
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

        .cards-wrapper{      
            width: calc(100vw * 4);
            height:100%;
            display: flex;
            justify-content: left;
            align-items: center;
            transition: transform 1s;
            overflow: hidden;
            @media (min-width:760px){
                    height:80%;
            }
             @media (min-width:1130px){
                justify-content: space-evenly;
                align-items: unset;
                width:100vw;
                margin-top:1.5rem;
            }
  
        }      
    }


</style>