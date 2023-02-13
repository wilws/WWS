<script>
export default {
    data(){
        return {
            moveingExtent : 0,
            ref : null,
            pageIsShow : false,
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

        pageWheelerAddEventListener(){

            window.addEventListener("wheel", async(e) => {
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
        },

        pageWheelerIsReady(){
            console.log('pageWheeler mixin is ready!')
        }
     }
}
</script>