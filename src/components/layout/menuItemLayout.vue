<template>
    <a :href="id" @click="$emit('pageSelected')">
    <div class="menu-items">
        <h1 v-html="title"></h1>
        <h2 v-html="subTitle"></h2>
    </div>
    </a>


</template>

<script>
export default {
    props:[
        'title',
        'subTitle',
        'id'
    ]
}
</script>

<style lang="scss">



a {
    color: inherit;
    text-decoration: none;
}

.menu-items{
    
    
    text-align: right;
    font-family: 'Courier New';
    transition-duration: .5s; 
    min-height:85px;
    // width:90%;
    
    // max-width:30rem;
    // border:blue thin solid;


    &:hover{
        background-color: rgba(48, 47, 47, 0.377);
        color:rgb(80, 63, 63);
    }

    &:hover > h1,
    &:hover > h2 {
        border-right:4px solid #000000;
    }

    $max-width:23rem;

    h1{
        width:100%;
        font-size: 1.5rem;
        letter-spacing: .2rem;
        font-weight: lighter;
        border-right: 4px solid #EBEBEB;
        padding-right: 10px;
        // max-width:$max-width;
        // @media (min-width : 820px){
        //     font-size: 1.6rem;
        //     letter-spacing: .2rem;
        // }
    }

    h2{
        width:100%;
        font-size: 1rem;
        letter-spacing: 0rem;
        padding-top: 0.3rem;
        font-weight: bold;
        border-right: 4px solid #EBEBEB;
        padding-right: 14px;
        min-height:58px;
        // max-width:$max-width;
        // @media (min-width : 820px){
        //     font-size: 1rem;
        //     letter-spacing: .2rem;
        // }

        // @media (min-width : 1024px) and (min-height: 1024px){
        //     font-size: 1.3rem;
        //     padding-left:6rem;
        // }
        // @media (min-width : 1366px) and (min-height: 1024px){
        //     padding-left:0rem;
        // }
    }
}
</style>