<template>
    <section class="assignment" id="assignment">
            <div class="background">                                  
                <img :src="require('@/assets/img/final_page/cover.jpg')" class="dog-img">
                <div class="my-dog-tag">
                    <div class="arrow-wrapper">
                        <i class="fa-solid fa-arrow-left"></i>
                        <p>My Dog</p>
                    </div>
                </div>
            </div>

            <div class="details">
                <div class="intro">
                    <h1>Course Assignment</h1>
                    <p>
                        Udemy is my source of coding knowledge. I always follow the online course and complete the assignments / projects requested in the course. Whenever I encounter something that I don’t understand druing the lesson, I will pause the video then search for the reason rather than clicking “Next” to let it remains mysterious. Therefore, I understand every single codes that I type in my assignment.  Hence I can replicate the effect / output that the assignments have. 
                        <br>It is meaningless to fake what you know as time will reveal it anyway.
                    </p>
                </div>

                <div class="web-assignments">
                    <h2>HTML / CSS / JS</h2>
                    <div class="assignments-wrapper">
                        <a href="https://wilws.github.io/Responsive_Assignment_1-Foods/" target="_blank"><img :src="require('@/assets/img/final_page/assignment1.png')"></a>
                        <a href="https://wilws.github.io/Responsive_Assignment_3-Agent/" target="_blank"><img :src="require('@/assets/img/final_page/assignment2.png')"></a>
                        <a href="https://wilws.github.io/Responsive_Assignment_4-Apple/" target="_blank"><img :src="require('@/assets/img/final_page/assignment3.png')"></a>
                        <a href="https://wilws.github.io/Responsive_Assignment_6-Car/" target="_blank"><img :src="require('@/assets/img/final_page/assignment4.png')"></a>
                        <a href="https://wilws.github.io/Responsive_Assignment_9-Wine/" target="_blank"><img :src="require('@/assets/img/final_page/assignment5.png')"></a>
                        <a href="https://wilws.github.io/Responsive_assignment_8-Road/" target="_blank"><img :src="require('@/assets/img/final_page/assignment7.png')"></a>
                        <a href="https://wilws.github.io/Responsive_Assignment_7-Architect/" target="_blank"><img :src="require('@/assets/img/final_page/assignment8.png')"></a>
                    </div>
                </div>
                <div class="other-assignment">
                    <h2>ETHEREUM AND SOLIDITY</h2>
                    <div>
                        <a href="https://www.udemy.com/certificate/UC-2049b1c9-815d-4d10-9524-507fb4282408/" target="_blank">* My Udemy Certificate  </a>
                        <a href="https://github.com/wilws/solidity_assignment_1-inbox.git" target="_blank">* Solidity 1-inbox </a>
                        <a href="https://github.com/wilws/solidity_assignment_2-lottery_react.git" target="_blank">* Solidity 2-Lottery(ReactJs) </a>
                        <a href="https://github.com/wilws/solidity_assignment_3-kickstart.git" target="_blank">* Solidity 3-Kickstarter (ReactJs) </a>
                    </div>
                </div>
            </div>
       


    </section>
</template>


<script>
import screenSizeDetection from "../../mixins/screenSizeDetection.vue";
export default {
    mixins:[screenSizeDetection],
    mounted(){
        // Check if the device is horizontally rotated 
        // if true, add class "rotated" to the <section> tag
        // We treat the style of the horizontal screen separately
        this.deviceRotationResponse(this.id)
        window.addEventListener('resize',()=>{
            this.deviceRotationResponse(this.id);
        });
    },
    data(){
        return {
            id: "#assignment"
        }
    }
}
</script>

<style lang="scss" scoped>



.assignment{

    @mixin titleSetting_320px{
        font-size: 1.7rem;
        letter-spacing: .1rem;
    }

    @mixin titleSetting_760px{
        font-size: 3rem;
        letter-spacing: .1rem;
    }

 
    

    @mixin title{
        font-family: 'Roboto', sans-serif;
        font-weight: 100;
        width:100%;
        text-align: center;
        margin-bottom:1rem;
        @include titleSetting_320px();
        @media(min-width:760px){
            @include titleSetting_760px();
        }
    }

    @mixin content{
        font-family: "Nanum Myeongjo", serif;
        text-align: justify;
        @include contentFontSetting_320px();    // from global vaiable
        @media(min-width:760px){
            @include contentFontSetting_760px(); // from global vaiable
        }
    }





    position: relative;
    width:100%;
    height:100%;
    padding: 1.3rem;
    background-color: rgb(0, 0, 0);
    color:white;
    @media(min-width:760px){
        padding: 3rem;
    }


    
    .details{
        position: relative;;
        width:100%;
        height:100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        row-gap: 5rem;
        z-index: 2;
        overflow: scroll;



        .intro{
            position: relative;
            width:100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            h1{
                @include title();
            }
            p{
                position: relative;
                margin-top:1rem;
                width:100%;
                @include content();

                // z-index: 10;

            }
        }
        .web-assignments{
            display: flex;
            flex-direction: column;

            h2{
                @include title();
            }
            
            .assignments-wrapper{
                
                margin-top:1rem;
                width:100%;
                height: 100%;
                display: flex;
                flex-wrap: wrap;
                // justify-content:space-around;
                a {
                    border: rgba(255, 255, 255, 0.671) solid thin;
                    width:50%;
                    max-width:300px;
                    img{
                        width:100%;
                        height:100%;
                        object-fit: cover;
                    }
                }
            }
        }
        .other-assignment{
            position: relative;
            width:100%;
            display: flex;
            flex-direction: column;
            margin-bottom:3rem;

            h2{
                @include title();
            }
            div{
                width:100%;
                min-width:200px;
                display: flex;
                flex-direction: column;    
                width:100%;
                a{
                    @include content();
                    color: white;
                }
            }       
        }
    }
    .background{
        position: absolute;
        right:0;
        top:0r;
        width:100%;
        height:100%;
        // border:orange solid thin;


        z-index: 1;

        .dog-img{
            position:absolute;
            top:0;
            left:0;
            height:100%;
            width:100%;
            object-fit: cover;
            @media(min-width:603px){
                width:unset;
            }
        }
        .my-dog-tag{
            opacity: .6;
            // border:rgb(124, 63, 63) solid thin;
            position:absolute;
            width:5rem;
            height:8rem;
            top:23%;
            right:15%;
            @media(min-width:603px){
                right:35%;
            }
            // z-index: 11;
            // border:red thin solid;

            .arrow-wrapper{
                // border:grey solid thin;
                position:absolute;
                width:80px;
                height:128px;
                left:0rem;
            
                i{
                    font-size:3rem;
                    color:white;
                    transform:rotateZ(48deg);
                }
                p{
                    position:absolute;
                    
                    left:10px;
                    color:white;
                    width:100%;
                    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
                }
            }
        }
    }
}



// For Horizontal screen styling
.assignment.rotated{
    .details{
        .intro{
            @media(min-width:1300px){
                width:50%;
            }
            h1{
                @media(min-width:1300px){
                    text-align: left;
                }
            }
            p{ }
        }
        .web-assignments{
            @media(min-width:1300px){
                width:50%;
            }
            h2{
                @media(min-width:1300px){
                    text-align: left;
                }
            }
            .assignments-wrapper{
                a {
                    @media(min-width:1300px){
                        width:30%;
                    }
                    img{}
                }
            }
        }
        .other-assignment{
            @media(min-width:1300px){
                width:50%;
            }
            h2{
                @media(min-width:1300px){
                    text-align: left;
                }
            }
            div{
                a{}
            }       
        }
    }
    .background{
            @media(min-width:1300px){
                width:50%;
            }
        .dog-img{
             @media(min-width:568px){
                width:31%;
            }
            @media(min-width:1300px){
                width:50%;
            }
        }
        .my-dog-tag{
            opacity: 0.6;
            position: absolute;
            width: 5rem;
            height: 8rem;
            top: 30%;
            right: 63%;
            @media(min-width:1300px){
                right:53%;
            }
            .arrow-wrapper{
                i{}
                p{}
            }
        }
    }

}

</style>