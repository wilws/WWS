<template>
    <div class="spec" :class="{show:scrollToPage}" v-if="!!FrontEndTechList.length">

        <h3 >Specification</h3>

        <div  class="tech-cat" v-if="FrontEndTechList.length > 0">
            <p class="tech-cat-tittle">Front End</p>
            <ul>
                <li v-for="(tech, index) in FrontEndTechList" :key="index">
                    {{ tech }}
                </li> 
            </ul>              
        </div>

        <div class="tech-cat" v-if="BackEndTechList.length > 0">
            <p class="tech-cat-tittle">Back End</p>
            <ul>
                <li v-for="(tech, index) in BackEndTechList" :key="index">
                    {{ tech }}
                </li>    
            </ul>           
        </div>

        <div  class="tech-cat" v-if="DesignStyleList.length > 0">
            <p class="tech-cat-tittle">Others</p>
            <ul>
                <li v-for="(tech, index) in DesignStyleList" :key="index">
                    {{ tech }}
                </li>   
            </ul>            
        </div>
     </div>
</template>


<script>
export default {
    props:['FrontEndTechList','BackEndTechList','DesignStyleList','scrollToPage','id']    
}
</script>


<style lang="scss" scoped>
   
.spec{
    position: relative;
    width:100%;
    margin-bottom:10px;
    opacity:0;
    transition:opacity 1s 1s;
    display: flex;
    flex-wrap: wrap;
    padding-top: 38px;
    justify-content: space-between;

    @media(min-width:500px){
        padding-top: 36px;
    }

    @media(min-width:800px){
        padding-top: 39px;
    }

    &.show{
        opacity: 1;
    }
   

    
    h3{
        position:absolute;
        top:0;
        width: 100%;
        height: 18px;
        margin-bottom:.5rem;
        text-transform: uppercase;
        letter-spacing: .1rem;
        font-size: 1rem;

        @media(min-width:500px){
            font-size: 1.2rem;
        }
    }

    .tech-cat{
        position: relative;
        width:30%;
        padding: 7px;
        font-family:'Lucida Sans';
        box-sizing:border-box;
        border:thin rgba(156, 156, 156, 0.267) solid;
        border-radius: 10px;
        box-shadow: 4px 4px 10px rgba(175, 175, 175, 0.575);
        
        @media(min-width:500px){
            height:120px;
            padding: 9px;
        }

        @media(min-width:800px){
            height:160px;
            padding: 10px;
        }


        .tech-cat-tittle{
            font-weight: bold;
            font-size: .8rem;
            margin-bottom: 12px;
            text-align: left;
            letter-spacing: 0.05rem;

            @media(min-width:500px){
                font-size: 1rem;
            }
            @media(min-width:800px){
                font-size: 1.2rem;
            }
        }
        ul{
            li{
                list-style: none;
                text-align: left;
                font-size: .6rem;
                margin-bottom: 6px;
                letter-spacing: 0.05rem;
                font-family: Helvetica;
                font-weight: lighter;
                @media(min-width:500px){
                    font-size: 1rem;
                }
                /* @media(min-width:800px){
                    font-size: 1rem;
                } */
            }
        }
    }
}


</style>