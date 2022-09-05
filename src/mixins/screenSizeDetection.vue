<script>
export default {
    methods:{
        screenRotatedDetector(){
            // return "true" if the screen is horizontal
            // return "false" if the screen is vertical
  
            return this.getWidth() > this.getHeight() ? true : false
        },
        getHeight(){
            //get screen height
            return window.screen.height;
        },
        getWidth(){
             //get screen width
            return window.screen.width;
        },
        deviceRotationResponse(id){
            // if the screen is horizontal, meaning that the device is rotated.
            // in this case, a class "rotated" will be attached to the page
            // in CSS, we seperately handle the design of rotated screen.
            if (this.screenRotatedDetector()){
                document.querySelector(id).classList.add('rotated');
            } else {
                document.querySelector(id).classList.remove('rotated');
            }
        },
        defaultBoxes(){
            // turn all boxes back to the first page
            document.querySelectorAll(".firstPage").forEach((e)=>{
                e.click();
            });
        }

    }
}
</script>