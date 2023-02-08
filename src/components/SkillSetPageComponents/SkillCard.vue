<template>

    <!-- card 1 Front End-->
    <div class="card-wrapper">

        <div class="card" :id="id">

            <div class="card-title">
                <h3>{{ title }}</h3>
                <h4>{{ subtitle }}</h4>
            </div>

            <div class="card-tech-chart">

                <skill-item  
                    v-for="skill in skills" 
                    :key="skill.id"
                    :id="skill.id"
                    :IconImageSrc="skill.iconSrc"
                    :techName="skill.techName"
                    :bar="skill.bar"
                    :scrollToPage= scrollToPage
                >
                </skill-item>

            </div>
            <!-- end of card-tech-chart -->
        </div>
        <!-- End of card -->
    </div>
    <!-- End of card wrapper-->


</template>


<script>

import SkillItem from "./SkillItem.vue";
export default {
    components: { SkillItem },
    props:['skills', 'title', 'subtitle','id','scrollToPage','currentCard'],
    watch:{
        scrollToPage(value){
            if (value){
                this.cardsRotation(this.cardRotateDeg,500);
            } else {
                this.cardsRotation();
            }
        },
        currentCard(value){
            this.moveCard(value)
        }

    },
    data(){
        return {
            cardRotateDeg : -25, 
        }
    },
    methods:{
        moveCard(n){
            // [ small screen ] Moves cards-wrapper horizontally to display other cards 
            this.cardsRotation();
            const translateDistance = window.innerWidth * -n;
            document.querySelector('.cards-wrapper').style.transform = `translateX(${translateDistance}px)`;
            this.cardsRotation(this.cardRotateDeg,1000);
        },

        cardsRotation(deg=0,delayTime=0){
            // funtion that rotates the card.
            document.querySelectorAll('.card').forEach(card => {
                setTimeout(()=>{
                    card.style.transform = `rotateY(${deg}deg)`;
                },delayTime);
            })
        },
    }
}
</script>

<style lang="scss" scoped>

.card-wrapper {

    position: relative;
    height:100%;
    width:100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    perspective: 100rem;
    background-color: rgba(223, 223, 223, 0.212);
   
    .card{
        position:absolute;
        width: 300px;
        height: 500px;
        border: thin solid rgba(238, 235, 235, .5);
        border-radius: 1rem;
        box-shadow: -0.5rem 1.5rem 1.8rem #4442424f;
        transform: translateX(-50%) translateY(-50%);
        transform: rotateY(0);
        background-color: #ffffff;
        transform-origin: center;
        transition:transform .5s;
        overflow: hidden;
        display: flex;
        flex-direction: column;

    
        .card-title{
            @include column-horizontal-center(); 
            height:70px;
            padding: 10px 0;;
            margin:30px;
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
        }
        h4{
            margin-top:.1rem;
            width:100%;
            height:50%;
            font-size: 1.2rem;
            font-weight:100;
            letter-spacing: 0.3rem;
            color: $grey;
            text-align: center;
            padding:0;
        }
        

        .card-tech-chart{
            position: relative;
            display: flex;
            flex-direction: column;
            width:100%;
            height:calc(100% - 70px);
            overflow: hidden;
            gap:10px;
            padding: 0rem 20px 20px 10px;
        }
    }
}





</style>