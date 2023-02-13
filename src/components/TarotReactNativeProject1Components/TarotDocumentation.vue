<template>
    
    <div class="tarot-documentation">
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
        </head>
    
 
        <div class="page-container">
            <header>
                <h1> Tarot App v1.0.0 Documentation </h1>
                <p> This is the documentation of using Tarot app's backend APIs</p>
                <a href="https://github.com/waiwong-nc/be-tarot.git">Github (Backend)</a> | 
                <a href="https://github.com/9RedThreads/fe-Tarot.git">Github (Fontend)</a>
            </header>

            <main>
                <div id="api-index">
                    <h1> APIs Index </h1>

                    <div class="api-index-box">

                        <h3>Authentication</h3>

                        <div class="api-end-point">
                            <p>POST /api/auth/signup</p>
                            <div class="api-hidden-box">
                                <div class="arrow"></div>
                                <h4>Input</h4> 
                                { <br>  {{'\xa0'}} username: STRING, <br>  {{'\xa0'}} password: STRING, <br>  {{'\xa0'}} email: STRING <br> }
                                <h4>Return</h4> 
                                pendingUserId : {  <br>pendingUserId : NUMBER <br>}
                            </div>
                        </div>

                        <div class="api-end-point">
                            <p>POST /api/auth/signUpConfirm</p>
                            <div class="api-hidden-box">
                                <div class="arrow"></div>
                                <h4>Input</h4> 
                                { <br>  
                                {{'\xa0'}} code: NUMBER, <br>  
                                {{'\xa0'}} pendingUserId: NUMBER, <br>  
                                } 
                                <h4>Return</h4> 
                                user : { <br>  
                                {{'\xa0'}} jwt: STRING, <br>  
                                {{'\xa0'}} user_id: NUMBER, <br>  
                                {{'\xa0'}} user_name: STRING, <br>  
                                {{'\xa0'}} email: STRING, <br>  
                                } 
                        </div>
                        </div>
                        <div class="api-end-point">
                        <p>POST  /api/auth/login</p>
                        <div class="api-hidden-box">
                                <div class="arrow"></div>
                                <h4>Input</h4> 
                                { <br>  
                                {{'\xa0'}} email: STRING, <br>  
                                {{'\xa0'}} password: STRING, <br>  
                                } 
                                <h4>Return</h4> 
                                user : { <br>  
                                {{'\xa0'}} jwt: STRING, <br>  
                                {{'\xa0'}} user_id: NUMBER, <br>  
                                {{'\xa0'}} user_name: STRING, <br>  
                                {{'\xa0'}} email: STRING, <br>  
                                } 
                        </div>
                        </div>
                    </div>
                    
                    <div class="api-index-box">
                        <h3>Users</h3>
                        <div class="api-end-point">
                            <p>GET /api/users</p>
                            <div class="api-hidden-box">
                                <div class="arrow"></div>
                                <h4>Return</h4> 
                                user : { <br>  
                                {{'\xa0'}} user_id: NUMBER, <br>  
                                {{'\xa0'}} user_name: STRING, <br>  
                                {{'\xa0'}} email: STRING, <br>  
                                {{'\xa0'}} password: STRING, <br>  
                                } 
                            </div>

                        </div>
                        <div class="api-end-point">
                        <p>GET /api/users/profile</p>
                        <div class="api-hidden-box">
                                <div class="arrow"></div>
                                <h4>Return</h4> 
                                user : { <br>  
                                {{'\xa0'}} user_id: NUMBER, <br>  
                                {{'\xa0'}} user_name: STRING, <br>  
                                {{'\xa0'}} email: STRING, <br>  
                                } 
                            </div>
                        </div>
                    </div>

                    <div class="api-index-box">
                        <h3>Entries</h3>
                        <div class="api-end-point">
                        <p>GET /api/entries</p>
                        <div class="api-hidden-box">
                                <div class="arrow"></div>
                                <h4>Return</h4> 
                                entries : [ <br>{ <br>  
                                {{'\xa0'}} user_id: NUMBER, <br>  
                                {{'\xa0'}} entry_body: STRING, <br>  
                                {{'\xa0'}} intention: STRING, <br>  
                                {{'\xa0'}} created_at: DATE, <br>  
                                {{'\xa0'}} tarot_card_id: [ <br>
                                    {{'\xa0'}} {{'\xa0'}}  { <br>
                                    {{'\xa0'}} {{'\xa0'}}{{'\xa0'}} {{'\xa0'}}   id: STRING,<br>
                                    {{'\xa0'}} {{'\xa0'}}{{'\xa0'}} {{'\xa0'}}    isLight: BOOL,<br>
                                    {{'\xa0'}} {{'\xa0'}}{{'\xa0'}} {{'\xa0'}}      readingStyle: STRING<br>
                                    {{'\xa0'}} {{'\xa0'}}{{'\xa0'}}   }, <br>
                                    {{'\xa0'}} {{'\xa0'}}  {{'\xa0'}} {{'\xa0'}}   ...<br>
                                {{'\xa0'}}  ],<br>
                                } <br>
                                { ... }<br>
                                { ... }<br>   
                                { ... }<br>   
                                { ... }<br>    
                                ] 
                                
                            </div>
                        </div>
                        <div class="api-end-point">
                        <p>GET /api/entries/:entry_id</p>
                        <div class="api-hidden-box">
                                <div class="arrow"></div>
                                <h4>Return</h4> 
                                entries : [{ <br>  
                                {{'\xa0'}} user_id: NUMBER, <br>  
                                {{'\xa0'}} entry_body: STRING, <br>  
                                {{'\xa0'}} intention: STRING, <br>  
                                {{'\xa0'}} created_at: DATE, <br>  
                                {{'\xa0'}} tarot_card_id: [ <br>
                                    {{'\xa0'}} {{'\xa0'}}  { <br>
                                    {{'\xa0'}} {{'\xa0'}}{{'\xa0'}} {{'\xa0'}}   id: STRING,<br>
                                    {{'\xa0'}} {{'\xa0'}}{{'\xa0'}} {{'\xa0'}}    isLight: BOOL,<br>
                                    {{'\xa0'}} {{'\xa0'}}{{'\xa0'}} {{'\xa0'}}      readingStyle: STRING<br>
                                    {{'\xa0'}} {{'\xa0'}}{{'\xa0'}}   }, <br>
                                    {{'\xa0'}} {{'\xa0'}}  {{'\xa0'}} {{'\xa0'}}   ...<br>
                                    {{'\xa0'}}  ],<br>
                                    }] 
                                
                            </div>
                        </div>
                        <div class="api-end-point">
                        <p>POST /api/entries</p>
                            <div class="api-hidden-box">
                                    <div class="arrow"></div>
                                    <h4>Input</h4> 
                                    { <br>  
                                    {{'\xa0'}} intention: STRING, <br>
                                    {{'\xa0'}} entry_body: STRING, <br>
                                    {{'\xa0'}} tarot_card_id: [ <br>
                                    {{'\xa0'}} {{'\xa0'}}  { <br>
                                    {{'\xa0'}} {{'\xa0'}}{{'\xa0'}} {{'\xa0'}}   id: STRING,<br>
                                    {{'\xa0'}} {{'\xa0'}}{{'\xa0'}} {{'\xa0'}}    isLight: BOOL,<br>
                                    {{'\xa0'}} {{'\xa0'}}{{'\xa0'}} {{'\xa0'}}      readingStyle: STRING<br>
                                    {{'\xa0'}} {{'\xa0'}}{{'\xa0'}}   }, <br>
                                    {{'\xa0'}} {{'\xa0'}}  {{'\xa0'}} {{'\xa0'}}   ...<br>
                                    {{'\xa0'}}  ],<br>
                                    } 
                                    <h4>Return</h4> 
                                    entries :   { <br>  
                                    {{'\xa0'}} entry_id: NUMBER, <br>
                                    {{'\xa0'}} intention: STRING, <br>
                                    {{'\xa0'}} entry_body: STRING, <br>
                                    {{'\xa0'}} tarot_card_id: [ <br>
                                    {{'\xa0'}} {{'\xa0'}}  { <br>
                                    {{'\xa0'}} {{'\xa0'}}{{'\xa0'}} {{'\xa0'}}   id: STRING,<br>
                                    {{'\xa0'}} {{'\xa0'}}{{'\xa0'}} {{'\xa0'}}    isLight: BOOL,<br>
                                    {{'\xa0'}} {{'\xa0'}}{{'\xa0'}} {{'\xa0'}}      readingStyle: STRING<br>
                                    {{'\xa0'}} {{'\xa0'}}{{'\xa0'}}   }, <br>
                                    {{'\xa0'}} {{'\xa0'}}  {{'\xa0'}} {{'\xa0'}}   ...<br>
                                    {{'\xa0'}}  ],<br>
                                    } 
                            </div>
                        </div>
                    </div>
                </div>


                <div id="api-explanation">

                    <h1> APIs Explanation </h1>
                    <div class="tag" ref="tag">
                        <div id="create_user_tag" class="tag-active" :class="{tagActive:createUserTag}" @click="switchPage('createUserTag')">Create User</div>
                        <div id="login_tag" :class="{tagActive:loginTag}" @click="switchPage('loginTag')">Login</div>
                        <div id="post_entry_tag" :class="{tagActive:postEntryTag}" @click="switchPage('postEntryTag')">Post Entry</div>
                    </div>
                    
                    <article id="create_user" class="explanation" :class="{contentActive:createUserTag}">
    
                        <h2>Create User</h2> 
                        
                        <h3>Step 1</h3>
                        The first step to create user is to make a sign up request: <br> 
                        <code>POST /api/auth/signup</code> <br><br>
                        Following object is required when you post the above request: <br>
                        <code>
                        { <br>  
                            {{'\xa0'}} username: STRING, <br>  
                            {{'\xa0'}} password: STRING, <br>  
                            {{'\xa0'}} email: STRING <br>  
                        } </code>
                        <br><br>
                        

                        Remark:<br>
                        <code>username</code> Cannot be empty and length must be within 1 to 30 characters long <br>
                        <code>password</code> Cannot be empty and length must be within 1 to 30 characters long <br>
                        <br>

                        If success, it will return a "Pending User ID" <code>pendingUserId</code><br>
                        Then check your email, you will receive a 4-digit<code>code</code>. You will need the <code>code</code> in next step. <br><br>

                        <h3>Step 2</h3>
                        The second step is to send a confirm request:<br>
                        <code>POST /api/auth/signUpConfirm</code> <br><br>
                        You need to post the <code>pendingUserId</code> and the 4-digit<code>code</code> to complete this process:<br>
                        <code>
                        { <br>  
                            {{'\xa0'}} code: NUMBER, <br>  
                            {{'\xa0'}} pendingUserId: NUMBER, <br>  
                        } </code>
                        <br><br>
                        If the request is succeful, a user object will be returned :<br>
                        <code>
                        user : { <br>  
                            {{'\xa0'}} jwt: STRING, <br>  
                            {{'\xa0'}} user_id: NUMBER, <br>  
                            {{'\xa0'}} user_name: STRING, <br>  
                            {{'\xa0'}} email: STRING, <br>  
                        } </code>
                        <br>

                        Save the <code>jwt</code> into you local device. You will need this token for identification when you are using the app.

                        This token will be valid for 24 hours. <br><br>
                        

                    </article>

                    <article id="login" class="explanation" :class="{contentActive:loginTag}">
                        <h2>Login</h2> 
                        <p>
                            The JWT will be invalid 24 hours after logging in. You will need to log in again in order to get access to different api end points. <br>
            To log in, you need to post a request to  <code>POST /api/auth/signup</code>  with folloing data:<br>
            <code>{ <br>  
                                {{'\xa0'}} username: STRING, <br>  
                                {{'\xa0'}} password: STRING, <br>  
                            } </code>
                            <br><br>
                            If the request is succeful, a user object will be returned :<br>
                            <code>
                            user : { <br>  
                                {{'\xa0'}} jwt: STRING, <br>  
                                {{'\xa0'}} user_id: NUMBER, <br>  
                                {{'\xa0'}} user_name: STRING, <br>  
                                {{'\xa0'}} email: STRING, <br>  
                            } </code>
                            <br>
                            Save the new <code>jwt</code> in you device and attach it to every reaquest's (attach in "Authorization");
        
                        </p>
                    </article>

                    <article id="post_entry" class="explanation" :class="{contentActive:postEntryTag}">
                        <h2>Post Entry</h2> 
                        <p>To Create an entry, you need to post a request to  <code>POST /api/entries</code>  with folloing data:<br>
                            <code>
                                    { <br>  
                                    {{'\xa0'}} intention: STRING, <br>
                                    {{'\xa0'}} entry_body: STRING, <br>
                                    {{'\xa0'}} tarot_card_id: [ <br>
                                    {{'\xa0'}} {{'\xa0'}}  { <br>
                                    {{'\xa0'}} {{'\xa0'}}{{'\xa0'}} {{'\xa0'}}   id: STRING,<br>
                                    {{'\xa0'}} {{'\xa0'}}{{'\xa0'}} {{'\xa0'}}    isLight: BOOL,<br>
                                    {{'\xa0'}} {{'\xa0'}}{{'\xa0'}} {{'\xa0'}}      readingStyle: STRING<br>
                                    {{'\xa0'}} {{'\xa0'}}{{'\xa0'}}   }, <br>
                                    {{'\xa0'}} {{'\xa0'}}  {{'\xa0'}} {{'\xa0'}}   ...<br>
                                    {{'\xa0'}}  ],<br>
                                    } 
                                </code> <br>
                                The following is the return from server: <br>
                                    <code>
                                    entries :   { <br>  
                                    {{'\xa0'}} entry_id: NUMBER, <br>
                                    {{'\xa0'}} intention: STRING, <br>
                                    {{'\xa0'}} entry_body: STRING, <br>
                                    {{'\xa0'}} tarot_card_id: [ <br>
                                    {{'\xa0'}} {{'\xa0'}}  { <br>
                                    {{'\xa0'}} {{'\xa0'}}{{'\xa0'}} {{'\xa0'}}   id: STRING,<br>
                                    {{'\xa0'}} {{'\xa0'}}{{'\xa0'}} {{'\xa0'}}    isLight: BOOL,<br>
                                    {{'\xa0'}} {{'\xa0'}}{{'\xa0'}} {{'\xa0'}}      readingStyle: STRING<br>
                                    {{'\xa0'}} {{'\xa0'}}{{'\xa0'}}   }, <br>
                                    {{'\xa0'}} {{'\xa0'}}  {{'\xa0'}} {{'\xa0'}}   ...<br>
                                    {{'\xa0'}}  ],<br>
                                    } 
                                    </code>
                        </p>
                    </article>
                </div>
                
            </main>

            <footer>
                <h1>Creators - TEAM OVER REACT: </h1>
                <ul>
                    <li>Bali</li>
                    <li>Joseph Shearon</li>
                    <li>Richard Hoyle</li>
                    <li>Sidney Pinsent </li>
                    <li>Wilson Wong</li>
                </ul>
            </footer>

        </div>
        


    </div>



</template>



<script>

export default {
    data(){
        return {
            loginTag:false,
            createUserTag:false,
            postEntryTag:false,
        }
    },
    mounted(){
         this.createUserTag = true;
    },
    methods:{

        reset(){
            this.loginTag = false;
            this.createUserTag = false;
            this.postEntryTag = false;
        },

        switchPage(tag){
            this.reset();

            switch (tag) {
                case 'loginTag':
                    this.loginTag = true;
                    break;

                case 'createUserTag':
                    this.createUserTag = true;
                    break;

                case 'postEntryTag':
                    this.postEntryTag = true;
                    break;
            }
        }
    }
}




</script>



<style lang="scss" scoped>

* {
    margin:0;
    padding:0;
}



.tarot-documentation {
    position: relative;
    font-family: 'Rubik', sans-serif;
    width: 100%;
    /* max-width:1000px; */
    height:auto;
    margin-top:20px;
    color:rgb(204, 153, 0);
    
}

.page-container {
    position: relative;
    width:100%;
    padding: 10px;
     height:auto;
    box-sizing:border-box;

    header {
        position: relative;
        width:100%;
        border: solid 3px rgb(204, 153, 0);
        box-sizing: border-box;
        padding: 20px 20px 20px 20px;
   

        h1{
            font-size: 1rem;
            margin-bottom: 10px;
            @media(min-width:500px){
                font-size: 1.2rem;
                line-height: 25px;
            }
            @media(min-width:800px){
                font-size: 1.4rem;
                line-height: 30px;
            }
        }

        p,a{
            font-size: .8rem;
            margin-bottom:10px;

            @media(min-width:500px){
                font-size: 1rem;
            }
            @media(min-width:800px){
                font-size: 1.2rem;
            }
        }
    }

    #api-index {
        position: relative;
        width:100%;
        margin-top:2rem;
        height:fit-content;
        display: flex;
        flex-direction: column;
        justify-content:flex-start;
        padding-top:   40px;
        flex-wrap: wrap;
        gap:10px;
        /* border:white thin solid; */
        @media(min-width:1000px){
            flex-direction: row;
            justify-content:space-between;

        }

        h1{
            position: absolute;
            top:0;
            height:20px;
            width:100%;
        }

        .api-index-box{ 
            position: relative;
            border: solid 3px rgba(255, 255, 255, 0.356);
            width:100%;
            height:fit-content;
            padding:15px;
            border-radius: 10px;
            @media(min-width:1000px){
                width:32%;
                height:200px;
            }
           
        

            h3 {
                font-size: .8rem;
                margin-bottom: 4px;
                @media(min-width:500px){
                    font-size: 1rem;
                }
                @media(min-width:800px){
                    font-size: 1.2rem;
                }
            }


            .api-end-point:hover >.api-hidden-box{
                visibility: visible;
                opacity: 1;
            }

            .api-end-point:hover {
                background: rgba(255, 255, 255, 0.356);
            }

            .api-end-point{
                position: relative;
                width:100%;
                font-size: .8rem;
                cursor: pointer;
                @media(min-width:500px){
                    font-size: 1rem;
                }
                @media(min-width:800px){
                    font-size: 1.2rem;
                }

                .api-hidden-box{
                    position: absolute;
                    min-width:200px;
                    width:fit-content;
                    left:10vw;
                    top:-10px;
                    background: rgb(204, 153, 0);
                    border: solid 3px rgba(255, 255, 255, 0.356);
                    color:white;
                    z-index: 3;
                    padding: 0px 20px 20px 20px;
                    visibility: hidden;
                    opacity: 0;
                    transition: opacity .5s;
                }

                .api-hidden-box h4 {
                    margin: 15px 10px 10px 0px;
                    color:white;
                }
                .arrow{
                    position:absolute;
                    left:-24px;
                    top: 5px;
                    transform: rotate(149deg);
                    width: 0;
                    height: 0;
                    border: 15px solid transparent;
                    border-top: 0;
                    border-bottom: 25px solid rgba(255, 255, 255, 0.356);
                }
            } // end of .api-end-point
        }// end of .api-index-box
    }// end of #api-index

    #api-explanation {
        position: relative;
        width:100%;
        margin-top:2rem;
        padding-top: 40px;

        h1 {
            position: absolute;
            top:0;
            left:6px;
            height:20px;
            width:100%;

        }

        .tag {
            
            position: relative;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            div {
                width:33%;
                display: inline-block;
                border: rgb(204, 153, 0) 1px solid;
                border-top-left-radius: 10px ;
                padding: 10px 10px 4px 10px;
                text-transform:uppercase;
                cursor: pointer;
                font-size: .8rem;
                @media(min-width:500px){
                    font-size: 1rem;
                }
                @media(min-width:800px){
                    font-size: 1.2rem;
                }

                &.tagActive{
                    background-color: rgb(204, 153, 0);
                    color:white;
                }
            }
           
        }
    
        .explanation {
            width:100%;
            box-sizing:border-box;
            border:rgb(204, 153, 0) 1px solid;
            border-top:rgb(204, 153, 0) 1px solid;
            transform:translateY(-5px);
            background-color: rgb(15, 4, 30);
            padding: 10px;
            display: none;
            font-size: .8rem;
            @media(min-width:500px){
                font-size: 1rem;
            }
            @media(min-width:800px){
                font-size: 1.2rem;
            }

            &.contentActive{
                display: inline-block;
            }

            h2{
                font-size: 1rem;
                margin-bottom: 10px;
            }
            h3{
                font-size: .8rem;
            }
        }
    }


    footer {

        position: relative;
        margin-top:2rem;
        /* padding-top: 40px; */
        font-size: .8rem;
        @media(min-width:500px){
            font-size: 1rem;
        }
        @media(min-width:800px){
            font-size: 1.2rem;
        }

        ul {
            list-style-position: inside;

            li {
                text-transform: capitalize;
            }
        }
    }
}
code {
    font-style: italic;
    color:gray;
}

</style>

