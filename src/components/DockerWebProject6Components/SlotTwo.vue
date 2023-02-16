<template>
    <article class="slot-2" ref="dockerWebProject6slot2" @touchmove="scrolling" @touchstart="scrolling">

        <div class="header" >
            <header-title
                :mainTitle="mainTitle"
                :subTitle="subTitle"
                :fontColor="fontColor"
            />
        </div>

        <div class="content">

            <section class="introduction">
                <h3>Introduction</h3>
                <p>This is a cross container application with following structure: </p>
                <img class="img-1" :src="require('@/assets/img/projects/docker_web_project_6/img1_intro.png')" alt=""/>
                <p>For more details, please go to my <a href="https://wilsonsdevnotes.blogspot.com/2022/10/docker-11-cross-container-part-1-docker.html">Personal Blog </a></p>
            </section>


            <section class="pull-image">
                <h3>Step 1 - Pull Images from Docker Hub</h3>
            
                <p>Three images "Nginx", "PHP" and "Mysql" are pulled from docker Hub </p>
                <img class="img-2" :src="require('@/assets/img/projects/docker_web_project_6/img2_grabImages.png')" alt=""/>
            </section>

            <section class="mysql">
                <h3>Step 2 - Run Mysql Container</h3>
                <p>To run mysql container, type in terminal: </p>
                <p class="code">docker run --name mysql -e MYSQL_ROOT_PASSWORD=123456 -p 33267:3306 -v ~/web/mysql/data:/var/lib/mysql -v ~/web/mysql/conf:/etc/mysql/conf.d -v ~/web/mysql/mysql_sock:/var/run/mysqld -d  --network my-net mysql:8.0.31</p>
                <img :src="require('@/assets/img/projects/docker_web_project_6/img3_mysql.png')" alt=""/>
                <p>The command above will create directories in local machine. Those directories will bind to directories in docker host. Data created in app can therefore be persistedly holded in local machine. This folder binding process is called "Bind Mounts".</p>
            </section>

            <section class="php">
                <h3>Step 3 - Run php Container</h3>
                <p>To run mysql container, type in terminal: </p>
                <p class="code">docker run --name php -p 9000:9000 -v ~/web/www:/var/www/html -v ~/web/mysql/mysql_sock:/var/run/mysqld -d --network my-net php:7.4.33-fpm</p>
                <img :src="require('@/assets/img/projects/docker_web_project_6/img4_php.png')" alt=""/>
                <p> The php container will run php script in docker host's "www" folder which is binded to the local machine's "www" folder as seen in the picture above. The local machine's "www" folder is the place where we code our php scripts. </p>
            </section>

            <section class="all_containers">
                <h3>Step 4 - Run Nginx Container</h3>
                <p>To run Nginx container, type in terminal: </p>
                <p class="code">docker run --name nginx -p 80:80 -v ~/web/www:/usr/share/nginx/html -v ~/web/nginx/conf.d:/etc/nginx/conf.d --network my-net nginx:1.23.3</p>
                <img :src="require('@/assets/img/projects/docker_web_project_6/img5_all_containers.png')" alt=""/>
                <p> The php scripts in local machine's "www" folder will also be accessed by Nginx via bind mounted.</p>
            </section>


            <section class="vue">
                <h3>Step 5 - Run Vue Container</h3>
                <p>You need to write a dockerfile as below :</p>
                <img :src="require('@/assets/img/projects/docker_web_project_6/img6_vue.png')" alt=""/>
                <p>There are two step when dockerising vue container: </p>
                <p>1 - Build app: change vue files to HTML, CSS and JS</p>
                <p>2 - Move the above files (HTML, CSS and JS) to another Nginx Server (not the one in Step 4 )</p><br>
                <p>Now we have one Nginx container acts as backend hosting php script (Step-4); another Nginx cotainer is hosting the vue (frontend) application. Both ends are communicating by REST API.</p>
            </section>

            <section class="summary">
                <h3>Clone the Project</h3>
                <p>You can git clone the project from <a href="https://github.com/wilws/docker2_cross_container_php-mysql-nginx-vue">here</a>.</p>
                <p> After cloning the project in your machine, you can run all four containers by simpliy typing :</p>
                <p class="code">docker-compose up</p>
                <p> The go to "http://localhost:8080", you should see the app is running like: </p>
                <img :src="require('@/assets/img/projects/docker_web_project_6/img7_run.png')" alt=""/><br><br>
                <p>To checking the container status, you can use the following command:</p>
                <p class="code">docker ps</p>
                <img :src="require('@/assets/img/projects/docker_web_project_6/img8_check.png')" alt="" style="borderRadius:0"/>
            </section>

            <section class="Demo">
                <h3>View App Demo</h3>
                <p >You can view the app demo online <a href="https://wilphpserver.epizy.com/">here</a>.</p>
                <p class="notice">Please noted that: </p>
                <li class="notice">This online demo is not running on Docker.</li>
                <li class="notice">It is just php scripts stored in web storage.</li>
                <li class="notice">Items will be reseted when refreshing.</li>

            </section>
        </div>

    </article>
</template>

<script>
import HeaderTitle from "../layout/HeaderTitle.vue";
export default {
    props:['isShow'],
    components:{HeaderTitle},
    mixin:['pageWheeler'],
    watch:{
        isShow(value){
            this.pageWheelerSetIsShow(value);
        }
    },
    data(){
        return {
            mainTitle : "Docker Project",
            subTitle: "2022 - PHP Server (Cross Containers)",
            fontColor: "rgb(0, 0, 0)",
        }
    },
    mounted(){
        this.pageWheelerInit(this.$refs.dockerWebProject6slot2,this.isShow);
    },
    methods:{
        scrolling(event){
            this.wheelFunction(event);
        }
    }
}
</script>

<style lang="scss" scoped>
.slot-2{
    position:relative;
    width:100%;
    height:100%;
    padding:20px;
    padding-bottom:100px;
    background-color: rgb(212, 228, 246);
    font-family:$tertiary-font;
    overflow-y: scroll;
    overflow-x: hidden;
    @media(min-width:800px){
        padding-left:50px;
    }


    .header{
        position:relative;
        width:100%;
    }

    .content{

        position: relative;
        margin-top:20px;
        section {
            min-height: unset;
            max-width:1000px;
            height:fit-content;
            margin-bottom: 30px;
            @media(min-width:500px){
                margin-bottom: 50px;
            }

            @media(min-width:800px){
                margin-bottom: 80px;
            }
    
            
            h3{
                position:relative;
                width:100%;
                font-family:$primary-font;
                margin-bottom: 10px;
                text-decoration: underline;
                text-transform: uppercase;
                font-weight: 900;
                font-size: 1rem;
                @media(min-width:500px){
                    font-size: 1.2rem;
                
                }
                @media(min-width:800px){
                    margin-top:10px;
                    margin-bottom:10px;
                    font-size: 1.4rem;
                }
                @media(min-width:1000px){
                    /* font-size: 1.6rem; */
                }
            }
            p{
                position:relative;
                margin-bottom: 5px;

                a {
                    font-weight: bold;
                    text-decoration: underline;
                }

                @media(min-width:500px){
                    font-size: 1rem;
                    line-height: 25px;
                }
                @media(min-width:800px){
                    font-size: 1.2rem;
                    line-height: 30px;
                }
                @media(min-width:1000px){
                    /* font-size: 1.4rem; */
                
                }
            }
            img{
                position:relative;
                width:100%;
                /* height:100%; */
                object-fit: contain;
                border:black 2px solid;
                border-radius: 10px;;
            }
            .code{
                position:relative;
                margin-bottom: 10px;
                line-height: 18px;
                font-style:italic;
                color: rgb(3, 66, 3);
                background-color: rgba(248, 248, 248, 0.637);
    
            }
            .notice{
                color:red;
            }
        }

        .pull-image {

        }
    }

}
</style>