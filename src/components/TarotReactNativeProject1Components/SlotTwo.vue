<template>
    <div class="slot-2" ref="tarotReactNativeProject1Slot2" @touchmove="scrolling" @touchstart="scrolling">
        <div class="header" >
            <header-title
                :mainTitle="mainTitle"
                :subTitle="subTitle"
                :fontColor="fontColor"
            />
        </div>

        <div class="content">
            <tarot-documentation/>
        </div>
     </div>
</template>


<script>

import HeaderTitle from "../layout/HeaderTitle.vue";
import TarotDocumentation from "./TarotDocumentation.vue";

export default {
    props:['isShow'],
    components:{HeaderTitle,TarotDocumentation},
    mixin:['pageWheeler'],
    watch:{
        isShow(value){
            this.pageWheelerSetIsShow(value);
        }
    },
    data(){
        return {
            mainTitle : "React Native Project",
            subTitle: "2023 - Tarot Journal",
            fontColor: "rgb(204, 153, 0)",
        }
    },
    mounted(){
        this.pageWheelerInit(this.$refs.tarotReactNativeProject1Slot2,this.isShow);
    },
    methods:{
        scrolling(event){
            this.wheelFunction(event);
        }
    }
}
</script>

<style lang="scss" scoped>
.slot-2{
    position:relative;
    width:100%;
    height:100%;
    padding:20px;
    padding-bottom:100px;
    background-color: rgb(15, 4, 30);
    font-family:$tertiary-font;
    overflow-y: scroll;
    overflow-x: hidden;
    z-index: 0;
    
  
    .header{
        position:relative;
        width:100%;
    }

    .content{

    }
}
</style>
