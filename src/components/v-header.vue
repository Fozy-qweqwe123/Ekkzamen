<template>
    <div class="vHeader">
        <div class="container">
            <div class="header-line">

                <div class="header-logo">
                    <a class="nav-item" href="#post">My Social Network</a>
                </div>

                <div class="nav">
                    <a class="nav-item" href="#/post">Новости </a>
                    <a class="nav-item" href="">Группы</a>
                    <a class="nav-item" href="">Друзья</a>
                    <a class="nav-item" href="#/Reviews">Сообщения</a>
                    <a class="nav-item" href="https://github.com/Fozy-qweqwe123/Ekkzamen.git">GitHub</a>
                    <a class="nav-item" href="#/components/UserInfo.vue" >Rubik Agamiryan</a>
                   
                </div>

                
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'vHeader',   
        components: {  
        },
        props: {},
        data() {
            return{}
        },
        computed: {},
    }
</script>

<style>
    .vHeader {
        background-color: #0069d9;
    }
    .container {
        margin: 0px 120px;
    }
    .header-line {
        padding-top: 25px;
        padding-bottom: 20px;
        display: flex;
        align-items: center;
        justify-content: space-around;    
    }
    .nav-item {
        color: #fff;
        text-decoration: none;
        font-weight: 400;
        font-size: 21px;
        margin-right: 50px;
        transition: color 0.2s linear;
    }
    .nav-item:hover {
        color: rgb(0, 0, 0);
    }

    
    .num {
        color: #fff;
        text-decoration: none;
        font-weight: 400;
        transition: color 0.2s linear;
        margin-left: 25px;
        font-size: 21px;
    }
    .num:hover {
        color:orange;
    }
  
</style>