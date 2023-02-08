<template>
    <div class="background" :class="{show: scrollToPage, displayText:showLongText}" ref="background" :style="{backgroundColor:backgroundColor}">
        <span class="closeButton" @click="backgroundToggleButton" > Close </span>
        <h3>Background</h3>
        <p class="paragraph"  ref="paragraph">
            <span v-html="projectDescription"></span>
            <span v-if="longText" class="longTextCover" :style="{background: longTextBgStyle}" @click="backgroundToggleButton"> [ View ] </span>
        </p>
    </div>
</template>


<script>
export default {
    props:['projectDescription','scrollToPage','id','backgroundColor'],
    
    data(){
        return {
            longText: false,
            longTextBgStyle: '',
            showLongText: false
        }
    },

    mounted(){

        if (this.checkIfLongText()) {
                this.longText = true;
                this.longTextBgStyle = this.longTextCoverBgColorGenerator();
            } else {
                this.longText = false;
                this.longTextBgStyle = '';
            }
    },
    
    methods:{

        checkIfLongText(){
            const backgroundHeight = this.$refs.background.offsetHeight;
            const paragraphHeight = this.$refs.paragraph.offsetHeight;

            if (backgroundHeight<paragraphHeight) {
               return true;
            } else {
               return false;
            }
        },

        longTextCoverBgColorGenerator(){
            const param = this.backgroundColor.slice(4, this.backgroundColor.indexOf(")",5))
            let style = `linear-gradient(360deg, ` 
            style += `${this.backgroundColor} 0%, ` 
            style += `rgba(${param}, 0.2) 100% )`
            return style

        },

        backgroundToggleButton(){
            this.showLongText =  !this.showLongText;
            if (this.showLongText ){
                document.querySelector(this.id).scrollIntoView();
                this.lockscreen(true)
            } else {
                 this.lockscreen(false)
            }
        },

        lockscreen(lock){
            if (lock){
                document.getElementsByTagName('body')[0].style.overflow = 'hidden';
            } else {
                document.getElementsByTagName('body')[0].style.overflow = 'visible';
            }
        }
    }
}
</script>


<style lang="scss">

.background{

    position:relative;
    width:100%;
    height: 100%;
    height:fit-content;
    opacity:0;
    margin-top: 30px;
    transition:opacity 1s 1s;
    padding-bottom:30px;
    overflow: hidden;


  
    &.show{
        opacity: 1;
    }

    .closeButton{
        display: none;
    }

        
    h3{
        position:relative;
        top:0;
        width: 100%;
        height: 18px;
        margin-bottom:15px;
        text-transform: uppercase;
        letter-spacing: .1rem;
        font-size: 1rem;

        @media(min-width:500px){
            font-size: 1.2rem;
        }
    }

    p{
        text-align:justify;
        letter-spacing: .0rem;
        line-height: 20px;
        font-size: .9rem;
        font-family: $primary-font;
        font-weight:lighter;
        height:fit-content;



        @media(min-width:500px){
            font-size: 1rem;
            line-height: 25px;
        }
        @media(min-width:800px){
            font-size: 1.2rem;
             line-height: 30px;
        }

        span {
            width:100%;
        }



      
        .longTextCover{
            position: absolute;
            bottom:0;
            left:0;
            width:100%;
            height:80px;
            text-align:center;
            padding-top: 40px;
            cursor: pointer;

        }
    }
}





.background.displayText{

    position: absolute;
    opacity: 0;
    padding:30px;
    width:100%;
    height:100%;
    left:0;
    top:0; 
    overflow: scroll;   

    &.show{
        opacity: 1;
    }
    
    .closeButton{
        position: absolute;
        display: unset;
        top:0px;
        right:30px;
        font-size: 14px;
        padding:5px 8px;
        border:grey solid thin;
        border-radius: 5px;
    }

    h3{}

    p{
        span {}      
        .longTextCover{
            display: none;

        }
    }
}


</style>