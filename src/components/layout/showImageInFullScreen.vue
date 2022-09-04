<template>
        
    <div class="imageInFullScreen">
        <div class="content-wrapper">
            <button class="closeScreenBtn" @click="screenController()">Close Picture</button>
            <div class="image-Wrapper">
                <img v-if="!!imgUrl" :src="imgUrl">
            </div>
        </div>
        
    </div>

</template>

<script>
export default {

    computed:{
        imgUrl(){      
            if(this.filename !== ""){
     
                switch (this.projectCode){         
                    case "Web_Project_1":
                        return require(`@/assets/img/projects/web_project_1/${this.filename}`);
                        
                    case "Web_Project_2":
                        return require(`@/assets/img/projects/web_project_2/${this.filename}`);

                    case "Web_Project_3": 
                        return require(`@/assets/img/projects/web_project_3/${this.filename}`);
                       
                    case "Web_Project_4": 
                        return require(`@/assets/img/projects/web_project_4/${this.filename}`);
                       
                    case "Interior_Project_1": 
                        return require(`@/assets/img/projects/interior_design_project_1/${this.filename}`);                   

                    case "Graphic_Project_1": 
                        return require(`@/assets/img/projects/design_project_1/${this.filename}`);
                        
                    default:
                        return false
                }
            }else{
                return false
            }
        }
    },
   data(){
       return{
            projectCode : "",
            filename : ""

       }
   },
   methods:{
       screenController(turnOn=false,id="",project='',filename=''){
           if (turnOn) {
                document.querySelector(`#${id}`).classList.add('show');
                this.projectCode =  project;
                this.filename = filename;
           } else {           
                document.querySelectorAll(".imageInFullScreen").forEach((e)=>{
                    if (e){
                        e.classList.remove('show');
                    }
                });
           }
       }

   }
}
</script>

<style lang="scss" scoped>


.imageInFullScreen.show{
     width:100%;

     .content-wrapper{

        .closeScreenBtn{
            opacity: 1;
            visibility: visible;
        }
     }
}
.imageInFullScreen{
    position: absolute;
    width:0%;
    height:100%;
    @include vertical-horizontal-center();

    background-color: rgba(26, 24, 24, 0.863);
    z-index: 2;
    transition: width 1s;


    .content-wrapper{
        width:90%;
        height:90%;

        .closeScreenBtn{
            position: relative;
            width:100%; 
            opacity: 0;
            visibility: hidden;
            margin-bottom: 1rem;
            text-align: center;
            border:none;
            background-color: transparent;;
            color: white;
            font-size:100%;
            letter-spacing: .2rem;
            cursor: pointer;
            transition: opacity 1s 1s;
            font-family: 'Courier New', Courier, monospace;
        }

        .image-Wrapper{
            position: relative;
            width:100%;
            height:calc(100% - 1.5rem);

  
            img{
                position: relative;
                width:100%;
                height:100%;
                object-fit: contain;
            }
        }
        
    }

}
</style>