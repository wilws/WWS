<template>
    <div class="tech-wrapper">
        <div class="left-side">
            <img class="tech-icon" :src="IconImageSrc"/>
        </div>
        <div class="right-side">
            <div class="tech-name">{{ techName}}</div>
            <div class="tech-bar-wrapper">
                <div class="bar"  :style="{'width': barWidth}" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['IconImageSrc','techName','bar','id','scrollToPage'],   
    watch:{
        scrollToPage(value){
            if (value){
                this.barWidth = this.bar;
            } else {
                this.barWidth = 0;
            }
        }
    },
    data(){
        return {  
            barWidth : 0
        }
    } 
}
</script>



<style lang="scss" scoped>

.tech-wrapper {
    position: relative;
    height:40px;
    display: flex;
    flex-direction: row;

    .left-side{   
        height:80%;
        width:20%;
        .tech-icon{
            width:100%;
            height:100%;
            object-fit:contain;
            filter:grayscale(100%);
        }
    }
    .right-side{
        height:100%;
        width:80%;
        padding-left: 10px;
        padding-top: 4px;
        .tech-name{
            font-size:.8rem;
            letter-spacing: 0.2rem;
            font-family:$tertiary-font;
        }
        .tech-bar-wrapper{
            .bar{
                margin-top:8px;
                background-color: rgb(156, 156, 156);
                height:1.5px;
                border-radius: 10px;
                width:0;
                transition: width 4s;
            }
        }
    }
}

</style>