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
            // return window.screen.height;      // This doesnt work in iPhone
            return window.innerHeight;

        },
        getWidth(){
             //get screen width
            // return window.screen.width;      // This doesnt work in iPhone
            return window.innerWidth;
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
        },
        checkScreensize(){
            // for use during development.
            // for device to pop use the width and height
            const w = window.screen.width;  
            const h = window.screen.height;

            alert(`width: ${w}   height${h}`)

        },

        disableIOSScalability(){
            // ISO has weird scale up performance when rotation
            // fix by Scott Jehl on github scottjehl/iOS-Orientationchange-Fix that works for iOS6.
            if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
                var viewportmeta = document.querySelector('meta[name="viewport"]');
                    if (viewportmeta) {
                        viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0';
                        document.body.addEventListener('gesturestart', function () {
                        viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
                    }, false);
                }
            }
        }
        

    }
}
</script>