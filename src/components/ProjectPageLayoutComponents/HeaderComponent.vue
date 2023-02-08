<template>
    <div class="header" :class="{show:scrollToPage }">
            <div class="left-side" >
                <h1 v-html="mainTitle"></h1>
                <h3>{{ subTitle }}</h3>
                <button :style="{ backgroundColor:buttonColor}" @click="workDisplay">{{ linkToProjectDescription }}</button>
            </div>

            <div v-if="projectIconUrl" class="right-side">
                <img :src="projectIconUrl" alt="logo">
            </div>
        </div>
</template>


<script>
export default {
    props:['mainTitle','subTitle','buttonColor','linkToProjectDescription','projectIconUrl','scrollToPage','id','fontColor']    
}
</script>


<style lang="scss" scoped>
   
.header {
    position:relative; 
    width:100%;     
    display: flex;
    justify-content: space-between;
    margin-bottom:50px;

    .left-side{
        position: relative;
        width:55%;
        display: flex;
        flex-direction: column;
        justify-content: start;
 

        h1{
    
            position: relative;
            width:100%;
            font-family: $secondary-font;
            font-size:1.1rem;
            text-transform: uppercase;
            text-align: left;
            line-height: 18px;
            transform:translateX(-200%);
            transition: transform 1s;
            margin:0;

            &.show{
                transform: translateX(0);
            } 

            @media(min-width:500px){
                line-height: 22px;
                font-size: 1.4rem;
            }

            @media(min-width:800px){
                line-height: 32px;
                font-size: 2rem;
            }
        }

        h3 {
            position: relative;

            width:100%;
            font-size: 0.8rem;
            font-weight: bold;
            font-family: $primary-font;
            text-transform: uppercase;
            text-align: left;
            transform:translateX(-200%);
            transition: transform 1s .1s;
            &.show{
                transform: translateX(0);
            } 
            @media(min-width:500px){
                font-size: 1rem;
                margin-top:1px;
            }
            @media(min-width:800px){
                 margin-top:1.2px;
                font-size: 1.2rem;
            }

        }

        button{
            position: relative;    
            height: 20px;
            width: 122px;;
            margin-top: 10px;
            font-size:.6rem;
            text-align: center;
            border-radius: 5px;
            border: thin solid transparent;
            color:white;

            cursor: pointer;        
            transform:translateX(-200%);
            transition: transform 1s .3s;

            &:hover{
                transform:scale(1.1);
            }
            &.show{
                transform: translateX(0);
            } 

            @media(min-width:500px){
                height: 28px;
                width: 200px;
                margin-top: 10px;
                font-size:.9rem;
            }           
        }
    }
    .right-side{
        position: relative;
        width:40%;
        height:100%;
        text-align: right;
        display: flex;
        /* justify-content: center;
        align-items: center; */
        flex-direction: column;
        max-width: 178px;

        @media(min-width:500px){
            width:70%;
            max-width: 234px;
        }

        @media(min-width:800px){
            width:70%;
            max-width: 250px;
        }

        img{
            z-index: 0;
            width:100%;
            object-fit:cover;
            transform:translateX(200%);
            transition: transform 1s;
            &.show{
                transform: translateX(0);
            } 
        }
    }
}

.header.show {
    .left-side {
        h1 { transform: translateX(0); }
        h3 { transform: translateX(0); } 
        button { transform: translateX(0) } 
    }

    .right-side {
        img { transform: translateX(0)}   
    }
}

</style>