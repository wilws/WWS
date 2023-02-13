<template>
    <div class="background" ref="background" :class="{show: scrollToPage, displayText:showLongTextModal}"  :style="{backgroundColor:backgroundColor}">
        <span class="closeButton" @click="showDescriptionToggleButton" > Close </span>
        <h3>Background</h3>
        <div class="paragraph"  ref="paragraph">
            <span class="description" v-html="projectDescription" ref="description"></span>
            <span v-if="isLongText" class="longTextCover"  :style="{background: longTextBgStyle}" @click="showDescriptionToggleButton"> [ View ] </span>
        </div>
    </div>
</template>


<script>
export default {
    props:['projectDescription','scrollToPage','id','backgroundColor',"buttonColor"],
    inject:['menuButtonOnOffSwitch'],
    data(){
        return {
            isLongText: false,
            longTextBgStyle: '',
            showLongTextModal: false
        }
    },

    mounted(){
        this.$nextTick(() => {
            this.textCoverController();
        });

        window.addEventListener('resize',() => {
            setTimeout(() => {this.textCoverController();},0)
        })

    },
    

    methods:{

        textCoverController(){
            if (this.checkIfLongText()) {
                this.setTextCover();
            } else {
                this.removeTextCover();
            }
        },

        setTextCover(){
            this.isLongText = true;
            this.longTextBgStyle = this.longTextCoverBgColorGenerator();
        },
        
        removeTextCover(){
            this.isLongText = false;
            this.longTextBgStyle = '';
        },

        checkIfLongText(){
            const paragraphHeight = this.$refs.paragraph.offsetHeight;
            const descriptionHeight = this.$refs.description.offsetHeight;

            if (paragraphHeight-20 < descriptionHeight) {
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

        showDescriptionToggleButton(){
            this.showLongTextModal =  !this.showLongTextModal;
            if (this.showLongTextModal ){
                document.querySelector(this.id).scrollIntoView();
                this.menuButtonOnOffSwitch(false);
                this.lockscreen(true);
            } else {
                this.lockscreen(false);
                this.menuButtonOnOffSwitch(true);
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
    height:100%;
    opacity:0;
    transition:opacity 1s 1s;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap:15px;
      
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
        /* margin-bottom:15px; */
        text-transform: uppercase;
        letter-spacing: .1rem;
        font-size: 1rem;

        @media(min-width:500px){
            font-size: 1.2rem;
        }
    }

    div.paragraph{
        position:relative;
        text-align:justify;
        letter-spacing: .0rem;
        line-height: 20px;
        font-size: .9rem;
        font-family: $primary-font;
        font-weight:lighter;
        height:calc( 100% - 33px);

        @media(min-width:500px){
            font-size: 1rem;
            line-height: 25px;
        }
        @media(min-width:800px){
            font-size: 1.2rem;
             line-height: 30px;
        }

        .description {}

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
    padding:30px;
    width:calc(100% - 8px);
    height:100%;
    left:8px;
    bottom:-100%; 
    overflow: scroll;   
    animation: displayText .5s 0s forwards;
  
    &.show{
        opacity: 1;
    }

    @keyframes displayText {
        0%{
            bottom:-100%; 
        }
        100%{   
            bottom:0% 
        }
    }
    
    .closeButton{
        position: absolute;
        display: unset;
        top:10px;
        right:30px;
        font-size: 14px;
        padding:5px 8px;
        border:grey solid thin;
        border-radius: 5px;
        cursor: pointer;
    }

    h3{}

    div{
        span {}      
        .longTextCover{
            display: none;

        }
    }

    div.paragraph{
        height:fit-content;
    }
}


</style>