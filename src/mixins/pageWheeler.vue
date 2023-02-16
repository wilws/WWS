<script>
export default {
    data(){
        return {
            moveingExtent : 0,
            ref : null,
            pageIsShow : false,
            scrollSpeed : 100,
            clientYStart : 0,
            clientYEnd : 0,
            currentYValue : 0,
        }
    },
    
    methods:{
        pageWheelerInit(refId,pageIsShow){
            this.pageWheelerSetRefId(refId);
            this.pageWheelerSetIsShow(pageIsShow);
            this.pageWheelerAddEventListener();
        },

        pageWheelerSetIsShow(bool) {
            this.ref.scroll(0,0);
            this.moveingExtent = 0;
            this.pageIsShow = bool;
        },

        pageWheelerSetRefId(refId) {
            this.ref = refId;
        },

        wheelFunction(e){

            if (!this.pageIsShow) return ;

        
            if (e.type === "touchstart") {
                // Just need to get the start point.
                // No need to preform furher action
                this.clientYStart =  e.touches[0].clientY ;
                return;  
            }

            if (e.type !== "touchmove") return;

            // Below only process when Event is "touchmove"

          
            const clientHeight = this.ref.clientHeight;
            const scrollHeight = this.ref.scrollHeight
    

            // Find out the moving distance
            this.clientYEnd =  e.changedTouches[0].clientY ;
            const moveDistance = this.clientYStart - this.clientYEnd;
 
            // divided by 20 means reduced scrolling speed
            this.currentYValue += moveDistance/20;

            // if scroll Y value over the height of the div
            if (this.currentYValue > (scrollHeight)) {
                this.currentYValue = scrollHeight-clientHeight;
            }

            // if scroll Y value beyond the top
            if (this.currentYValue < 0) {
                this.currentYValue = 0;
            }

            this.ref.scrollTo(0,this.currentYValue);
        },

        pageWheelerAddEventListener(){

            window.addEventListener("wheel", (e) => {
                if (!this.pageIsShow) return ;
                this.moveingExtent += e.deltaY;
                if ( this.moveingExtent < 0 ){
                    this.moveingExtent = 0;
                }
                if ( this.moveingExtent > this.ref.scrollHeight ){
                    this.moveingExtent = this.ref.scrollHeight;
                }
                this.ref.scroll(0,this.moveingExtent)
             })
            
            // window.addEventListener("touchmove",(e) => this.wheelFunction(e))
            // window.addEventListener("wheel",(e) => this.wheelFunction(e))
            window.addEventListener('touchmove',(e) => this.wheelFunction(e));
        },

        pageWheelerIsReady(){
            console.log('pageWheeler mixin is ready!')
        }
     }
}
</script>