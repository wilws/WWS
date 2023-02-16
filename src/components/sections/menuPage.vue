<template>
<div>
    <div v-show="showMenuBtn" class="menu-button"></div>

    <section class="menu close" id="menu">    
        <button @click="menuController" class="close-button">Close</button>
        <div class="menu-items-wrapper">
            <menu-item class="menu-item"
                v-for="(value,key) in items" 
                :key = "key" 
                :title =  "key"
                :subTitle = "value[0]" 
                :id = "value[1]" 
                @pageSelected = "menuController"
            ></menu-item>
        </div>
    </section>
    </div>
</template>



<script>
import MenuItem from "./menuPageComponents/menuItemLayout.vue";
export default {
    components:{
        MenuItem
    },
    props:['showMenuBtn'],
    data(){
        return{
            id: "#menu",
            menuOpen:false,
            items : {
                "About": ["Who Am I","#index"],
                "Skill Set":["Skills That I Have","#skill-set-page"],
                "React Project <br> - NC NEWS":["News Share Platform Built by ReactJs & NodeJs","#web-project-7"],
                "ReactNative Project <br> - Tarot Journal": ["Tarot Reading App Built by React Native & NodeJs","#react-native-project-1"],
                "React Project  <br> - NC Gallery":["Art Share Platform Built by ReactJs","#web-project-5"],
                "Docker Project  <br> -  PHP Server":["Dockerised, Cross-Containers Application","#web-project-6"],
                "Python Project  <br> - Company Data Scrapper":["Scraper Data from web by Python and Selenium","#data-project-1"],
                "Vue Project  <br> -  Ellow Tradition":["E-Commerce Website Using Vue.js + Node.js","#web-project-1"],
                "Django Project  <br> -  Option Katze ":["Option Strategies Analysis Web Application Using Python + Django","#web-project-2"],
                "Django Project  <br> -  Option Katze II":["Back Testing Web Application Using Python + Django","#web-project-3"],
                "Javascript Project  <br> -  LongLife ":["Simple HTML + CSS + JS Website","#web-project-4"],
                "Graphic Design   <br> -  Joyful House":["Dessert Shop Re-Branding","#graphic-design-project-1"],
                "Interior Design   <br> -  My Studio":["Build Up a Studio","#interior-design-project-1"],
                "Course Assignment":["Assignments done during<br>studying online course","#assignment"],
                
            }
        }
    },
    methods:{
        menuController(){
            this.defaultBoxes();
            this.showMenu();
    

            // lock the scroll bar when menu open
            if (this.menuOpen) {
                document.getElementsByTagName('body')[0].style.overflow = 'hidden';
            } else {
                document.getElementsByTagName('body')[0].style.overflow = 'visible';
            }
        },
        showMenu(){
            document.querySelector(".menu").classList.toggle('close');
            document.querySelector(".menu-button").classList.toggle('close');
            this.menuOpen = !this.menuOpen;
        },
    },
    mounted(){
        document.querySelector(".menu-button").addEventListener("mouseover",() => {
            this.menuController();
            // this.showMenu();
        });

        // [ Global Mixin function ]
        // Check if the device is horizontally rotated 
        // if true, add class "rotated" to the <section> tag
        // We treat the style of the horizontal screen separately
        this.deviceRotationResponse(this.id)
        window.addEventListener('resize',()=>{
            this.deviceRotationResponse(this.id);
        });
    }
}
</script>

<style lang="scss">

// default size: iPhone 5 : 320px x 568px 

.menu-button{
    position:fixed;
    width:.9rem;
    height:.9rem;
    background-color: rgb(46, 46, 46);
    top:0.3rem;
    left:0.3em;
    z-index: 999;

}

.menu-button.close{
    opacity: 0;
    visibility:none;
    z-index: -1;
}


.menu.close{
    opacity: 0;
    visibility:none;
    z-index: -1;
}

.menu{

    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    padding: 3rem 1rem 3rem  1rem;
    background-color: rgb(255, 255, 255);
    opacity: 1;
    z-index: 12;
    visibility:unset;
    transition-property: opacity visibility;
    transition-duration: 1s;
    overflow: scroll;

    .close-button{
        position:fixed;
        left:0px;
        top:0px;
        font-family: 'Courier New';
        font-size: .9rem;
        letter-spacing: .15rem;
        padding: 1px;
        padding-left: 2.5px;
        border: none;
        cursor: pointer;
        z-index: 2;

        @media(min-width: 760px){
            font-size: 1.1rem;
        }
    }

    .menu-items-wrapper{
        width:100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        gap:50px;
        // border:red thin solid;

        // @media (min-width : 768px) and (min-height: 600px){
            
        //     position: absolute;
        //     width:100%;
        //     height:100%;
        //     // border:red thin solid;
        //     // top:50%;
        //     // left:-2%;
        //     // transform:translateY(-50%);
        //     // width:90%;
        //     padding: 2rem;
        //     // padding-left:4rem;
        //     display: grid;
        //     grid-template-columns: repeat(2,45%);
        //     grid-template-rows:  repeat(5);
        //     grid-row-gap:50px;
        //     grid-column-gap:50px;
        //     grid-template-areas:
        //     "a f"
        //     "b g"
        //     "c h"
        //     "d i"
        //     "e j";

        //     .menu-item{
        //         // width:100%;
        //         // border:red thin solid;
        //     }

        //     .menu-item:nth-child(1){
        //         grid-area: a;
        //     }
        //     .menu-item:nth-child(2){
        //         grid-area: b;
        //     }
        //     .menu-item:nth-child(3){
        //         grid-area: c;
        //     }
        //     .menu-item:nth-child(4){
        //         grid-area: d;
        //     }
        //     .menu-item:nth-child(5){
        //         grid-area: e;
        //     }
        //     .menu-item:nth-child(6){
        //         grid-area: f;
        //     }
        //     .menu-item:nth-child(7){
        //         grid-area: g;
        //     }

        //     .menu-item:nth-child(8){
        //         grid-area: h;
        //     }

        //     .menu-item:nth-child(9){
        //         grid-area: i;
        //     }
        
        // }

    //     @media (min-width : 1024px) and (max-height: 1024px) and (min-height: 700px){

    //         position: absolute;
    //         width:100%;
    //         height:100%;
    //         padding: 0rem;
    //         padding-right:6rem;
    //         margin-left:6rem;

    //         padding-top:2rem;
    //         display: grid;
    //         grid-template-columns: repeat(3,30%);
    //         grid-template-rows:  repeat(4);
    //         // grid-row-gap:2%;
    //         // grid-column-gap:%;
    //         grid-template-areas:
    //         "a e i"
    //         "b f j"
    //         "c g k"
    //         "d h l";

    //         .menu-item{
    //             // border:red thin solid;
    //         }

    //         .menu-item:nth-child(1){
    //             grid-area: a;
    //         }
    //         .menu-item:nth-child(2){
    //             grid-area: b;
    //         }
    //         .menu-item:nth-child(3){
    //             grid-area: e;
    //         }
    //         .menu-item:nth-child(4){
    //             grid-area: f;
    //         }
    //         .menu-item:nth-child(5){
    //             grid-area: g;
    //         }
    //         .menu-item:nth-child(6){
    //             grid-area: h;
    //         }
    //         .menu-item:nth-child(7){
    //             grid-area: i;
    //         }

    //         .menu-item:nth-child(8){
    //             grid-area: j;
    //         }

    //         .menu-item:nth-child(9){
    //             grid-area: k;
    //         }
        
    //     }

    //     @media (min-width : 1366px) and (min-height: 1024px){

    //         position: absolute;
    //         width:100%;

          
         
    //         height:100%;
    //         padding: 3rem;
    //         padding-right:6rem;
    //         padding-top:5rem;
    //         display: grid;
    //         grid-template-columns: repeat(3,30%);
    //         grid-template-rows:  repeat(4);
    //         // grid-row-gap:2%;
    //         // grid-column-gap:%;
    //         grid-template-areas:
    //         "a e i"
    //         "b f j"
    //         "c g k"
    //         "d h l";
    //     }
        

    }   
}



// .menu-items-wrapper.rotated{

 
//         @media (min-width : 768px) and (min-height: 600px){
            
//             position: absolute;
//             width:100%;
//             height:100%;
//             padding: 2rem;
//             display: grid;
//             grid-template-columns: repeat(2,45%);
//             grid-template-rows:  repeat(5);
//             grid-row-gap:50px;
//             grid-column-gap:50px;
//             grid-template-areas:
//             "a f"
//             "b g"
//             "c h"
//             "d i"
//             "e j";

//             .menu-item{
//                 // width:100%;
//                 // border:red thin solid;
//             }

//             .menu-item:nth-child(1){
//                 grid-area: a;
//             }
//             .menu-item:nth-child(2){
//                 grid-area: b;
//             }
//             .menu-item:nth-child(3){
//                 grid-area: c;
//             }
//             .menu-item:nth-child(4){
//                 grid-area: d;
//             }
//             .menu-item:nth-child(5){
//                 grid-area: e;
//             }
//             .menu-item:nth-child(6){
//                 grid-area: f;
//             }
//             .menu-item:nth-child(7){
//                 grid-area: g;
//             }

//             .menu-item:nth-child(8){
//                 grid-area: h;
//             }

//             .menu-item:nth-child(9){
//                 grid-area: i;
//             }
        
//         }

//         @media (min-width : 1024px) and (max-height: 1024px) and (min-height: 700px){

//             position: absolute;
//             width:100%;
//             height:100%;
//             padding: 0rem;
//             padding-right:6rem;
//             margin-left:6rem;

//             padding-top:2rem;
//             display: grid;
//             grid-template-columns: repeat(3,30%);
//             grid-template-rows:  repeat(4);
//             // grid-row-gap:2%;
//             // grid-column-gap:%;
//             grid-template-areas:
//             "a e i"
//             "b f j"
//             "c g k"
//             "d h l";

//             .menu-item{
//                 // border:red thin solid;
//             }

//             .menu-item:nth-child(1){
//                 grid-area: a;
//             }
//             .menu-item:nth-child(2){
//                 grid-area: b;
//             }
//             .menu-item:nth-child(3){
//                 grid-area: e;
//             }
//             .menu-item:nth-child(4){
//                 grid-area: f;
//             }
//             .menu-item:nth-child(5){
//                 grid-area: g;
//             }
//             .menu-item:nth-child(6){
//                 grid-area: h;
//             }
//             .menu-item:nth-child(7){
//                 grid-area: i;
//             }

//             .menu-item:nth-child(8){
//                 grid-area: j;
//             }

//             .menu-item:nth-child(9){
//                 grid-area: k;
//             }
        
//         }

//         @media (min-width : 1366px) and (min-height: 1024px){

//             position: absolute;
//             width:100%;

          
         
//             height:100%;
//             padding: 3rem;
//             padding-right:6rem;
//             padding-top:5rem;
//             display: grid;
//             grid-template-columns: repeat(3,30%);
//             grid-template-rows:  repeat(4);
//             // grid-row-gap:2%;
//             // grid-column-gap:%;
//             grid-template-areas:
//             "a e i"
//             "b f j"
//             "c g k"
//             "d h l";
//         }
        

//     }



</style>