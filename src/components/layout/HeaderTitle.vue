<template>
    <div class="header-title" :style="{color:fontColor}" >
        <h1 v-html="mainTitle"></h1>
        <h3>{{ subTitle }}</h3>
    </div>
</template>

<script>
export default {
    props:['mainTitle', 'subTitle','fontColor'],
}
</script>

<style lang="scss" scoped>
.header-title{
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
        margin:0;

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
   
        @media(min-width:500px){
            font-size: 1rem;
            margin-top:1px;
        }
        @media(min-width:800px){
                margin-top:1.2px;
            font-size: 1.2rem;
        }

    }
}
</style>