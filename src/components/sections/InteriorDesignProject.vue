<template>
    <section class="interior-design-project-1" id="interior-design-project-1">
        
        <rotation-layout ref="rotationLayoutRef5">
       
        <!-- slot 1 -->
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
        <!-- End of slot 1 -->

        <!-- slot 2 -->
        <template v-slot:slot2>
            <div class="slot2-wrapper">
               
                <div class="upper-side">
                    <img :src="require('@/assets/img/projects/interior_design_project_1/p1.jpeg')"/>
                </div>

                 <div class="lower-side">
                    <div>
                        <h1>A Messy Storage Room</h1>
                        <div class="content">
                            The place that we rented was used as a store room.
                            <br>
                            <br>
                            Dusty, scraped wall, worn carpet, dirty window and full of miscellaneous stuff, we were at first in question that was it really possible to use this place as our private harbour?
                            <br>
                            <br>
                            We started to study different information to learn how to do renovation. Finally we found that it was not as difficult as we though
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <!-- End of slot 2 -->

        <!-- slot 3 -->
        <template v-slot:slot3>
            <div class="slot3-wrapper">
                <div class="col-1">
                    <div class="img"><img :src="require('@/assets/img/projects/interior_design_project_1/p2-1.png')"/></div>
                    <div class="img"><img :src="require('@/assets/img/projects/interior_design_project_1/p2-2.png')"/></div>
                    <div class="img"><img :src="require('@/assets/img/projects/interior_design_project_1/p2-3.png')"/></div>
                </div>
                <div class="col-2">
                    <div class="h1-wrapper">
                        <h1>Planning</h1>
                    </div>
                    <div class="content">
                        After acquiring knowledge from Internet, YouTube, books..etc, We roughly understood how to do plastering, construction of wooden structure, light and electricity stuff (well,yes,we knew it is dangerous...but we both are graduated from science background and believed in our knowledge. Don’t try it by yourself at home).
                       <br>
                       <br>
                       Having ensured that the renovation was within our ability, I started to learn how to use the software "SketchUp" to draw the layout. 
                    </div>
                </div>
                <div class="col-3">
                    <div class="img"><img :src="require('@/assets/img/projects/interior_design_project_1/p2-4.jpeg')"/></div>
                    <div class="img"><img :src="require('@/assets/img/projects/interior_design_project_1/p2-5.png')"/></div>
                    <div class="img"><img :src="require('@/assets/img/projects/interior_design_project_1/p2-6.png')"/></div>
                </div>

            </div>
        </template>
        <!-- End of slot 3 -->


        <!-- slot 4 -->
        <template v-slot:slot4>
            <div class="slot4-wrapper">
                <div class="imgs-wrapper">
                    <div class="img font-page"><p></p></div>
                    <div class="img"><img :src="require('@/assets/img/projects/interior_design_project_1/p3-1.jpeg')"/></div>
                    <div class="img"><img :src="require('@/assets/img/projects/interior_design_project_1/p3-2.jpeg')"/></div>
                    <div class="img"><img :src="require('@/assets/img/projects/interior_design_project_1/p3-3.jpeg')"/></div>
                    <div class="img"><img :src="require('@/assets/img/projects/interior_design_project_1/p3-4.jpg')"/></div>
                    <div class="img"><img :src="require('@/assets/img/projects/interior_design_project_1/p3-5.jpg')"/></div>
                    <div class="img"><img :src="require('@/assets/img/projects/interior_design_project_1/p3-6.jpg')"/></div>
                    <div class="img"><img :src="require('@/assets/img/projects/interior_design_project_1/p3-7.jpg')"/></div>
                    <div class="img"><img :src="require('@/assets/img/projects/interior_design_project_1/p3-8.jpg')"/></div>
                </div>
                <div class="complete-wrapper">
                    <div class="content-wrapper">
                        <h1> Desire , Knowledge and Action</h1>
                        <div class="content">
                            We finally spent 3 months to have our cozy studio completed. The whole process was so painful but the outcome was so satisfactory.
                            <br><br>
                            This is such an unforgettable experience. We started from zero, from doubt. We had no knowledge of renovation at first. But, desire motivated us to pursue knowledge to make it real.

                            <br><br>
                            "Knowledge" and "Willingness to Learn" provide us confidence to act, to try and to achieve different things. ”Learning” can turn every chapter of life journey into an exciting adventure. The more I learn, the more experience that I can put into my life story. We are the sole writer of our life story. Never, Never, Never write a boring story. You don't have another chance to re-write it.
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <!-- End of slot 4 -->

        </rotation-layout>
    </section>
</template>

<script>


export default {

    mounted(){
        // pass proprs to "rotation-layout" slot

        // To tell the rotation layout that the button color
        this.$refs.rotationLayoutRef5.buttonSetting = { 
            backgroundColor : "Black",
            color:"White",
        }

        // To tell the rotation layout that to the class name of the rotation box. 
        // if no specific name is given,the rotation layout cannot target the correct box to rotate
        this.$refs.rotationLayoutRef5.boxClass = ".interior-design-project-1 .space .box";
        
        // To tell the rotation layout to add class "animation" to the following css attributes
        // The reason to do so is to allow animation only when the wanted box face (slot) is shown.
        // Also the rotation layout can remove the animation of the following attribute when user left the slot.
        this.$refs.rotationLayoutRef5.animationClass = { 
            'slot1':[],
            'slot2':[],
            'slot3':[
                '#interior-design-project-1 div div div.face2 div div.col-1',
                '#interior-design-project-1 div div div.face2 div div.col-2',
                '#interior-design-project-1 div div div.face2 div div.col-3',
            ],
            'slot4':[
                '#interior-design-project-1 div div div.face3 div div.imgs-wrapper',
                '#interior-design-project-1 div div div.face3 div div.imgs-wrapper.animation div:nth-child(2)',
                '#interior-design-project-1 div div div.face3 div div.imgs-wrapper.animation div:nth-child(2) img',
                '#interior-design-project-1 div div div.face3 div div.imgs-wrapper.animation div:nth-child(3)',
                '#interior-design-project-1 div div div.face3 div div.imgs-wrapper.animation div:nth-child(3) img',
                '#interior-design-project-1 div div div.face3 div div.imgs-wrapper.animation div:nth-child(4)',
                '#interior-design-project-1 div div div.face3 div div.imgs-wrapper.animation div:nth-child(4) img',
                '#interior-design-project-1 div div div.face3 div div.imgs-wrapper.animation div:nth-child(5)',
                '#interior-design-project-1 div div div.face3 div div.imgs-wrapper.animation div:nth-child(5) img',
                '#interior-design-project-1 div div div.face3 div div.imgs-wrapper.animation div:nth-child(6)',
                '#interior-design-project-1 div div div.face3 div div.imgs-wrapper.animation div:nth-child(6) img',
                '#interior-design-project-1 div div div.face3 div div.imgs-wrapper.animation div:nth-child(7)',
                '#interior-design-project-1 div div div.face3 div div.imgs-wrapper.animation div:nth-child(7) img',
                '#interior-design-project-1 div div div.face3 div div.imgs-wrapper.animation div:nth-child(8)',
                '#interior-design-project-1 div div div.face3 div div.imgs-wrapper.animation div:nth-child(8) img',
                '#interior-design-project-1 div div div.face3 div div.imgs-wrapper.animation div:nth-child(9)',
                '#interior-design-project-1 div div div.face3 div div.imgs-wrapper.animation div:nth-child(9) img',
                '#interior-design-project-1 div div div.face3 div div.complete-wrapper'
            ],
        }

        // Check if the device is horizontally rotated 
        // if true, add class "rotated" to the <section> tag
        // We treat the style of the horizontal screen separately
        this.deviceRotationResponse(this.id)
        window.addEventListener('resize',()=>{
            this.deviceRotationResponse(this.id);
        })
    
    },
    data(){
        return {
            mainTitle : "Interior Design Project",
            subTitle: "2015 - Studio Design",
            linkToProjectDescription: "View Design Work",
            projectIconUrl: "",
            FrontEndTechList: [],
            BackEndTechList: [],
            DesignStyleList: [],
            mediaType:"image",
            mediaDisplayUrl: require('@/assets/img/projects/interior_design_project_1/cover.jpg'),
            backgroundColor:"White",
            fontColor:"Black",
            buttonColor:"Black",
            id: "#interior-design-project-1",
            projectDescription :
            "In Hong Kong, it is quite hard to get a private place for relax since rental is so high in this tiny place. In 2015,  My friend ,Berry ,and I were so luckily to have a chance to rent a place in a factory area with a very economic price. However,  as mentioned, it was in a factory area, the place was “not fancy”, or be more accurate — “messy”. Let see how we 2 turned a messy store room to a cozy studio."

        }
    },
    methods:{
        workDisplay(){
            document.querySelector(this.id).scrollIntoView();
            setTimeout(() => {
                this.$refs.rotationLayoutRef5.rotate('forward');
            }, 200);
        },
    }
}
</script>


<style lang="scss" scoped>
.interior-design-project-1{
    background-color: rgb(255, 255, 255);
}

.slot-wrapper{
    position: relative;
    width:100%;
    height:100%;
    padding: 4rem;
    background-color: rgb(255, 255, 255);
    color:rgb(0, 0, 0);
    @include column-horizontal-center();

    .title-wrapper{
        width:100%;

        .title{
            h1{
                width:100%;
                font-family: $secondary-font;
                font-size:4rem;
                letter-spacing: .1rem;
                text-align: left;
            }
            h3{
                    width:100%;
                    font-size: 2.1rem;
                    font-weight: 500;
                    font-family: $secondary-font;
                    letter-spacing: .2rem;
                    padding-left:.4rem;
                    margin-top:-.5rem;
                    text-align: left;
            }
        }
    }

    .content-wrapper{
        width:100%;
        height: 80%;
        margin-top:5rem;
        text-align: center;

        video{
            height: 100%;
            // width:100%;
            object-fit:cover;
        }
    }
}


// Slot 3 vertical and horizontal
.slot3-wrapper{
    position:relative;
    width:100%;
    height:100%;
    perspective: 100rem;
    // background-color: white;

    

    .col-1{
        position:absolute;
        width:50%;
        height:100%;
        left:0rem;
        top:0;
        z-index: 2;
        @include column-horizontal-center();
        
        &.animation{
            animation: leftSideMovingOut 4.5s 1s forwards;
        }

        .img{
            width:100%;
            height:100%;
            border: thick black solid;
            img{
                width:100%;
                height:100%;
                object-fit: cover;
            }
        }

        .img:nth-child(1){
            height:30%;
        }
        .img:nth-child(2){
            height:40%;
        }
        .img:nth-child(3){
            height:30%;
        }
    }
    .col-2{
        z-index: 1;
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        opacity: 0;
        transform: translateZ(-10rem);
        -webkit-transform: translateZ(-10rem);
        transform-style: preserve-3d;
        -webkit-transform-style: preserve-3d;

      
        @include column-horizontal-center();
        justify-content: center;

        &.animation{
            animation: movingClose 2s 1.5s forwards;
        }
        .h1-wrapper{
            h1{
                text-align: center;
                text-transform: uppercase;
                font-family: $secondary-font;
                font-size: 2.3rem;
                font-weight: 300;
                letter-spacing: .2rem;
                margin-top: 1rem;
                padding: 0 0.6rem;
                line-height:2.8rem;
                background-color: rgba(255, 255, 255, 0.8);
            }
        }
        .content{
            margin-top:1rem;
            width:80%;
            max-width:588px;
            color: #1f1f1f;
            padding:.3rem;
            background-color: rgba(255, 255, 255, 0.8);

            @media(min-width:320px){
                @include contentFontSetting_320px();
            }
            @media(min-width:760px){
                @include contentFontSetting_760px();
            }

            i{
                // font-size: .8rem;
                width:10px;
                color:rgba(0, 0, 0, 0.384);
                transform:rotateZ(180deg);
            }
        }
        .content::first-letter{
            text-transform: capitalize;
            font-size: 1.2rem;
            font-weight: bold;
        }
    }
    .col-3{

        position:absolute;
        width:50%;
        height:100%;
        right:0rem;
        top:0;
        z-index: 2;
        display: flex;
        flex-wrap: wrap;

        
        &.animation{
            animation: RightSideMovingOut 4.5s 1s forwards;
        }
        .img{
            border: thick black solid;
            position:relative;
            img{
                position: absolute;
                left:0;
                top:0;
                width:100%;
                height:100%;
                object-fit: cover;
            }
        }

        .img:nth-child(1){
            width:100%;
            height:60%;
        }
        .img:nth-child(2){
            width:100%;
            height:20%;
        }
        .img:nth-child(3){
             width:100%;
            height:20%;
        }
    }

    @keyframes leftSideMovingOut {
        0%{
            left:0%;
            z-index: 2;
        }
        50%{
            left:-100%;
            z-index: 1;
        }
        100%{
            left:0;
            z-index: 1;
        }
    }

    @keyframes RightSideMovingOut {
        0%{
            right:0%;
            z-index: 2;
        }
        50%{
            right:-100%;
            z-index: 1;
        }
        100%{
            right:0;
            z-index: 1;
        }
    }


    @keyframes movingClose {
        0%{
           transform:translateZ(-10rem);
           z-index: 1;
           opacity: 0;
        }
 
        100%{
            transform:translateZ(0rem);
            z-index: 2;
            opacity: 2;
        }
    }




}
// End of Slot 3 vertical and horizontal

// slot 4 Vertical
.slot4-wrapper{
    position: relative;
    width:100%;
    height:100%;
    padding:0;
    background-color: black;
    padding: 0;
    perspective: 100rem;
    // border: green thin solid;

    $gap:2.5rem;

    .imgs-wrapper{
         
        width:calc((100vw * 9) + $gap * 8);
        height:100%;
        background-color: black;
        display: flex;
        justify-content: space-between;
        gap:$gap;
        transform-style: preserve-3d;
        // border: red thin solid;
        transform: translateZ(-5rem);

        &.animation{
            animation: rolling 30s 1s forwards;
        }


        .font-page{
            width:100%;
            height:100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            background-color: rgb(0, 0, 0);
            // border:orange thin solid;

            p{
                opacity: 0;
                width:100%;
                height:30px;
                text-align: center;
                font-size: 1.5rem;
                color: white;
                // &.animation{
                //     animation: showStart 6s  forwards;
                // }
            }

            @keyframes showStart {
                0%{
                    opacity: 0;
                    // font-size: 0rem;
                }
                50%{
                    opacity: 1;
                    // font-size: 1.5rem;
                }
                100%{
                    opacity: 0;
                }
            }
            $moveDistance: calc((100vw + $gap) * -1);
            @keyframes rolling {
                // Start page
                0%{
                    transform: translateX(0) translateZ(-5rem)
                }
                4.35%{
                    transform: translateX( $moveDistance) translateZ(-5rem)
                }
                8.70%{
                    transform: translateX( $moveDistance) translateZ(0rem)
                }

                13.03%{
                    transform: translateX( $moveDistance) translateZ(0rem)
                }

                // img-1
                13.04%{
                    transform: translateX( $moveDistance) translateZ(-5rem)
                }
                17.39%{
                    transform: translateX( calc($moveDistance * 2) ) translateZ(-5rem)
                }
                21.74%{
                    transform: translateX( calc($moveDistance * 2)) translateZ(0rem)
                }
                26.08%{
                    transform: translateX( calc($moveDistance * 2)) translateZ(0rem)
                }

                // img-2
                26.09%{
                    transform: translateX( calc($moveDistance * 2)) translateZ(-5rem)
                }
                30.43%{
                    transform: translateX( calc($moveDistance * 3) ) translateZ(-5rem)
                }
                34.78%{
                    transform: translateX( calc($moveDistance * 3)) translateZ(0rem)
                }
                39.12%{
                    transform: translateX( calc($moveDistance * 3)) translateZ(0rem)
                }

                // img-3
                39.13%{
                    transform: translateX( calc($moveDistance * 3)) translateZ(-5rem)
                }
                43.48%{
                    transform: translateX( calc($moveDistance * 4) ) translateZ(-5rem)
                }
                47.83%{
                    transform: translateX( calc($moveDistance * 4)) translateZ(0rem)
                }
                52.16%{
                    transform: translateX( calc($moveDistance * 4)) translateZ(0rem)
                }

                // img-4
                52.17%{
                    transform: translateX( calc($moveDistance * 4)) translateZ(-5rem)
                }
                56.52%{
                    transform: translateX( calc($moveDistance * 5) ) translateZ(-5rem)
                }
                60.87%{
                    transform: translateX( calc($moveDistance * 5)) translateZ(0rem)
                }

                65.20%{
                    transform: translateX( calc($moveDistance * 5)) translateZ(0rem)
                }

                // img-5
                65.22%{
                    transform: translateX( calc($moveDistance * 5)) translateZ(-5rem)
                }
                69.57%{
                    transform: translateX( calc($moveDistance * 6) ) translateZ(-5rem)
                }
                73.91%{
                    transform: translateX( calc($moveDistance * 6) ) translateZ(0rem)
                }

                78.25%{
                    transform: translateX( calc($moveDistance * 6) ) translateZ(0rem)
                }

                // img-6
                78.26%{
                    transform: translateX( calc($moveDistance * 6) ) translateZ(-5rem)
                }
                82.61%{
                    transform: translateX( calc($moveDistance * 7) ) translateZ(-5rem)
                }
                86.96%{
                    transform: translateX( calc($moveDistance * 7)) translateZ(0rem)
                }     
                91.29%{
                    transform: translateX( calc($moveDistance * 7)) translateZ(0rem)
                }  
                // img-7
                91.30%{
                    transform: translateX( calc($moveDistance * 7 )) translateZ(-5rem)
                }
                95.65%{
                    transform: translateX( calc($moveDistance * 8) ) translateZ(-5rem)
                }
                100%{
                    transform: translateX( calc($moveDistance * 8)) translateZ(0rem)
                }      
            }
        }

        .img{
            // border:red thin solid;
            height:100%;
            width:100vw;
            top:0;

            img{
                width:100%;
                height:100%;
                object-fit: cover;
            }   
        }

    }

    .complete-wrapper{

        position: absolute;
        width: 70%;
        bottom:3rem;
        left:0;
        color: #ffffffbd;

        
        .content-wrapper{
            width:100%;
            padding: 2rem;
            h1{
                font-size: 1rem;
                margin-bottom:1rem;
                @media(min-width:768px){
                    font-size: 2rem;
                }
            }
            .content{
                font-size:.7rem;
                text-align: justify;
                @media(min-width:768px){
                    font-size: 1.3rem;
                }
            }
        }
    }

}
// End of Slot 4 Vertical

// slot 4 Horizontal
#interior-design-project-1.rotated{
    .space{
        .box{
            .face3{
                .slot4-wrapper{

                    $min-width : 560px;
        
                    @media(min-width:$min-width){
                        background-color: white;
                        display: flex;
                    }
                    .imgs-wrapper{
       
                        @media(min-width:$min-width){
                            height:100%;
                            width:100%;
                            animation: none;
                            gap:0;
                            transform: translateZ(0rem);
                            perspective: 10rem;
                            background-color: rgb(255, 255, 255);
                        }
                 
                        .img{
                            @media(min-width:$min-width){
                  
                                position:absolute;
                                width:auto;
                                height:50%;
                                margin-left:0;
                                text-align: left;
                           
                                transform-style: preserve-3d;
                                box-shadow: -19px 12px 0.4rem rgb(0 0 0 / 43%);
                            
                            }
                            img{
                                @media(min-width:$min-width){
                                    height:100%;
                                    border:4px solid black;
                                    width:auto;
                                    object-fit: cover;
                                }
                            }
                        }

                        @media(min-width:$min-width){
                            .img:nth-child(1){
                                display: none;
                            }

                            .img:nth-child(2){
                                height:60%;
                                left:0;
                                top:0;
                                transform: rotateZ(-20deg) translateZ(50px) ;
                                z-index: 2;
                                transform-style: preserve-3d;
                                &.animation{
                                    animation: dropPicture1 3s forwards;
                                }
                                img{
                                    filter: sepia(0%);
                                    &.animation{
                                        animation: sepia 3s 3s forwards,
                                    }
                                }
                                @keyframes dropPicture1 {
                                    0%{
                                        transform: rotateZ(-20deg) translateZ(50px) ;
                                    }
                                    100%{
                                        transform: rotateZ(-20deg) translateZ(0);
                                    }
                                }
                            }
                            
                            .img:nth-child(3){
                                height:60%;
                                z-index: 3;
                                left:20%;
                                top:7%;
                                transform: rotateZ(10deg) translateZ(500px);
                                &.animation{
                                    animation: dropPicture2 3s 3s forwards;
                                }
                                img{
                                    filter: sepia(0%);
                                    &.animation{
                                        animation: sepia 3s 6s forwards;
                                    }
                                }
                                @keyframes dropPicture2 {
                                    0%{
                                        transform: rotateZ(10deg) translateZ(500px) ;
                                    }
                                    100%{
                                        transform: rotateZ(10deg) translateZ(0);
                                    }
                                }
                            }
                            .img:nth-child(4){
                                height:70%;
                                z-index: 4;
                                left:34%;
                                top:20%;
                                transform: rotateZ(-8deg)  translateZ(500px) ;
                                &.animation{
                                    animation: dropPicture3 3s 6s forwards;
                                }
                                img{
                                    filter: sepia(0%);
                                    &.animation{
                                        animation: sepia 3s 9s forwards;
                                    }
                                }
                                @keyframes dropPicture3 {
                                    0%{
                                        transform: rotateZ(-8deg) translateZ(500px) ;
                                    }
                                    100%{
                                        transform: rotateZ(-8deg) translateZ(0);
                                    }
                                }
                            }
                            .img:nth-child(5){
                                height:65%;
                                z-index: 5;
                                left:34%;
                                top:20%;
                                transform: rotateZ(7deg) translateZ(500px);
                                &.animation{
                                    animation: dropPicture4 3s 9s forwards;
                                }
                                img{
                                    filter: sepia(0%);
                                    &.animation{
                                        animation: sepia 3s 12s forwards;
                                    }
                                }
                                @keyframes dropPicture4 {
                                    0%{
                                        transform: rotateZ(7deg) translateZ(500px) ;
                                    }
                                    100%{
                                        transform: rotateZ(7deg) translateZ(0);
                                    }
                                }
                            }
                            .img:nth-child(6){
                                height: 76%;
                                z-index: 6;
                                left: 9%;
                                top: 13%;
                                transform: rotateZ(349deg)  translateZ(500px);
                                &.animation{
                                    animation: dropPicture5 3s 12s forwards;
                                }
                                img{
                                    filter: sepia(0%);
                                    &.animation{
                                        animation: sepia 3s 15s forwards;
                                    }
                                }
                                @keyframes dropPicture5 {
                                    0%{
                                        transform: rotateZ(349deg) translateZ(500px) ;
                                    }
                                    100%{
                                        transform: rotateZ(349deg) translateZ(0);
                                    }
                                };
                            }
                            .img:nth-child(7){
                                height: 77%;
                                z-index: 7;
                                left: 42%;
                                top: 4%;
                                transform: rotateZ(0) translateZ(500px);
                                &.animation{
                                    animation: dropPicture6 3s 15s forwards;
                                }
                                img{
                                    filter: sepia(0%);
                                    &.animation{
                                        animation: sepia 3s 21s forwards;
                                    }
                                }
                                @keyframes dropPicture6 {
                                    0%{
                                        transform: rotateZ(0) translateZ(500px) ;
                                    }
                                    100%{
                                        transform: rotateZ(0) translateZ(0);
                                    }
                                };
                            }
                            .img:nth-child(8){
                                height: 83%;
                                z-index: 8;
                                left: 31%;
                                top: 4%;
                                transform: rotateZ(357deg) translateZ(500px);
                                &.animation{
                                    animation: dropPicture7 3s 18s forwards;
                                }
                                img{
                                    filter: sepia(0%);
                                    animation: sepia 3s 28s forwards,
                                }
                                @keyframes dropPicture7 {
                                    0%{
                                        transform: rotateZ(357deg) translateZ(500px) ;
                                    }
                                    100%{
                                        transform: rotateZ(357deg) translateZ(0);
                                    }
                                };
                            }
                            .img:nth-child(9){
                                height: 90%;
                                z-index: 9;
                                left: 25%;
                                top: 5%;
                                transform: rotateZ(0deg) translateZ(500px);
                                &.animation{
                                    animation: 
                                        dropPicture8 3s 21s forwards,
                                        movingLeft  3s 22s forwards;
                                }
                               
                                @keyframes dropPicture8 {
                                    0%{
                                        transform: rotateZ(0) translateZ(500px) ;
                                    }
                                    100%{
                                        transform: rotateZ(0) translateZ(0);
                                    }
                                };
                                @keyframes movingLeft {
                                    0%{
                                        left:25%;
                                        
                                    }
                                    100%{
                                        left:3%;
                                    }
                                    
                                }  
                            }
                            @keyframes sepia {
                                0%{
                                    filter: sepia(0%);
                                }
                                100%{
                                    filter: sepia(100%);
                                }
                            }

                            @keyframes shadding {
                                0%{
                                    opacity: 0;
                                }
                                100%{
                                    opacity: 0.4;
                                    
                                }
                            }

                        }
                    }
                    @media(min-width: $min-width){
                        .complete-wrapper{
                            position: relative;
                            width: 100%;
                            bottom:0rem;
                            display: flex;
                            justify-content: center;
                            z-index: 7;
                            visibility: hidden;
                            opacity: 0;
                            
                            background-color:  rgb(255 255 255 / 84%);
                            overflow: scroll;

                            height: 100%;
                            &.animation{
                                animation:showCompleteWrapper 3s 25s forwards;
                            }
                            
                            @keyframes showCompleteWrapper {
                                0%{
                                    visibility: hidden;
                                    opacity: 0;
                                }
                                100%{
                                    visibility: visible;
                                    opacity: 1;                                        
                                }
                            }
                        
                        .content-wrapper{
                            @media(min-width:$min-width){
                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                padding:2rem;
                                overflow-y: scroll;
                        
                                @media(min-width:1300px){
                                    padding:3rem;
                                }
                            }
                           
                            h1{
                                @media(min-width:$min-width){
                                    text-align: center;
                                    color:black
                                }
                                @media(min-width:1020px){
                                        font-size: 1.8rem;
                                        line-height: 1.9rem;
                                    }
                            }

                            .content{
                                @media(min-width:$min-width){
                                   
                                    text-align: justify;
                                    color:black;
                                    @include contentFontSetting_320px();
                                    font-size: 0.5rem;
                                    line-height: 0.8rem;
                           
                                    @media(min-width:1020px){
                                        @include contentFontSetting_760px();
                                        font-size: 1.2rem;
                                        line-height: 1.9rem;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

} 

// End of slot 4 Horizontal


// Slot 2 Vertical
.slot2-wrapper{
    position:relative;
    width:100%;
    height:100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    overflow: scroll;
    // @media(min-width:1024px){
    //     flex-direction:row-reverse;
    // }

    .lower-side{

        width: 100%;
        height:100%;

        padding: 1rem 1.3rem 1.3rem 1rem;
        display: flex;
        flex-direction: column;
        // justify-content: center;
        // justify-content: start;
         @media(min-width:375px){
             margin-top:1rem;
             justify-content: start
         }
        @media(min-width:760px){
            padding:3rem;
        }
        @media(min-width:1020px){
            padding:4rem;
        }
        div{
            width:100%;
            h1{
                // border: thin solid red;
                font-weight: bold;
                width:100%;
                @include titleSetting();
                font-size: 1.1rem;
                @media(min-width:760px){
                    font-weight: bold;
                    font-size: 2.4rem;
                }
            }
            .content{
                // border: thin solid red;
                font-family: $primary-font;
                color:$grey ;
                text-align: center;
                @media(min-width:320px){
                    @include contentFontSetting_320px();
                    text-align: center;
                }
                @media(min-width:760px){
                    @include contentFontSetting_760px();
                    text-align: center;
                }
                @media(min-width:1020px){
                    padding:4rem;
                }
            }
        }
    }
    .upper-side{
        min-height: 227px;
        min-width: 320px;
        width:100%;
        // border: thin solid red;
        
        img{
            width:100%;
            height:100%;
            object-fit: cover;
            
        }
    }
}
// End of Slot 2 Vertical


//  Slot 2 Horizontal
#interior-design-project-1.rotated .space .box .face4 .slot2-wrapper{
   
    @media(min-width:560px){
        flex-direction:row-reverse;
    }
    
    .lower-side{

        @media(min-width:560px){
            width:60%;
            justify-content: center;
            margin-top:0;
            padding:1.4rem;
        }
        @media(min-width:1020px){
             padding:2.2rem;
        }
        @media(min-width:1024px){
             padding:3rem;
        }

        div{
            width:100%;
            h1{
                @media(min-width:560px){
                    font-size: .9rem;
                }
                @media(min-width:600px){
                    font-size: 1.1rem;
                }
                @media(min-width:1020px){
                    font-size: 1.7rem;
                }
            }
            .content{
                // border: thin solid red;
                // font-family: $primary-font;
                // color:$grey ;
                @media(min-width:560px){
                    @include contentFontSetting_320px();
                    font-size:0.6rem;
                    line-height: 1rem;
                    text-align: center;
                }
                @media(min-width:1020px){
                    @include contentFontSetting_760px();
                    text-align: center;
                }
                // @media(min-width:760px){
                //     @include contentFontSetting_760px();
                // }
            }
        }
    }
    .upper-side{
        img{}
    }
}
// End of Slot 2 Horizontal

</style>