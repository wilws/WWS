
<template>
    <div class="slot-3">
        <div class="header">
            <header-title
                :mainTitle="mainTitle"
                :subTitle="subTitle"
                :fontColor="fontColor"
            />
        </div>
        <div class="content-wrapper">
            <article class="description">
                
                <p>This is a demo video showing the sign up process of the Tarot Journal Application.</p>
                <p>When user is trying to create a account, server will send a verification code to user's email for email verification.</p>
                <p>User needs that code to complete the sign up process.</p>
                <p>Since the app is not yet finsihed, the styling of the app is not so good. </p>
            </article>
            <div class="video-wrapper">
                <video loop autoplay muted controls playsinline>
                    <source :src="require('@/assets/img/projects/tarot_react_native_project_1/demo.mp4')" type="video/mp4">
                </video>
            </div>
        </div>
        </div>
</template>

<script>
import HeaderTitle from "../layout/HeaderTitle.vue";

export default {
    components:{HeaderTitle},
    data(){
        return {
            mainTitle : "React Native Project",
            subTitle: "2023 - Tarot Journal",
            fontColor: "rgb(204, 153, 0)"
        }
    }
}
</script>

<style lang="scss" scoped>


.slot-3{
    position:relative;
    width:100%;
    height:100%;
    background-color: rgb(15, 4, 30);
    font-family:$tertiary-font;
    overflow-y: scroll;
    overflow-x: hidden;
    padding:30px;
    /* padding-left:80px; */


   
  
    .header{
        position:relative;
        width:100%;
           margin-bottom:20px
    }

    .content-wrapper{
        width:100%;
        display: flex;
        flex-direction: column;

        @media(min-width:1000px){
            flex-direction: row-reverse;
            gap:40px;
            &>div{
                margin:0;
                min-height:300px;
            }
        }
    
        .description{
            position: relative;
            width:100%;
            height:50%;
            margin-bottom:20px;
            border: solid 3px rgb(204, 153, 0);
            box-sizing: border-box;
            padding: 20px 20px 20px 20px;
            @media(min-width:1000px){
                width:40%;
            }

            

            p{
                color: rgb(204, 153, 0);
                font-size: .8rem;
                margin-bottom: 10px;
                @media(min-width:500px){
                    font-size: 1rem;
                }
                @media(min-width:800px){
                    font-size: 1.2rem;
                    margin-bottom: 50px;
                }
            }
        }

        .video-wrapper{
            position: relative;
            width:100%;
            /* height:50%; */

            video{
                /* height:100%; */
                object-fit:cover;
                width:100%;
            }
        }
    }
    
}
</style>