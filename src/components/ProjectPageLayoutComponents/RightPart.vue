<template>
    <div class="right-wrapper">
        <div v-if="mediaType == 'video'" class="vidoe">
            <video :key="video" loop autoplay muted>
                <source :src="mediaDisplayUrl" type="video/mp4">
            </video>
        </div>
        <div v-else class="img">
            <img :src="mediaDisplayUrl" alt="cover">
        </div>
    </div>
</template>

<script>
export default {
    props: ['mediaType','mediaDisplayUrl']
}
</script>


<style lang="scss" scoped>

  
.right-wrapper{

    display: none;
   
    @media(min-width: 1134px){
        position: relative;
        width:40%;
        height:100vh;  
        background-color: rgb(255, 255, 255);
        display: flex;
        flex-direction: column;
        justify-content: start;
        z-index: 2;
    }

    .vidoe{
        
        position: relative;
        width:100%;
        height: 100%;
        background:rgb(255, 255, 255);
        text-align: right;
        
        video{
            width:100%;
            object-fit:cover;
            @media(min-width: 1300px){
                height:100%;
                width:fit-content;
                object-fit:cover;
            }
        }
    }

    .img {
        width: 100%;
        height: 100%;  

        img {
            height: 100%;
            width:100%;
            object-fit: cover;  
        }
    }
}

</style>