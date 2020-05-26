<template>
    <div id="page">
        <div class="card">
            <div class="card-item title">
                <span>帐号信息</span>
            </div>
            <router-link class="card-item" to="/personalData">
                <span>个人资料</span>
                <span class="placeholder username">{{username}}</span>
                <i class="fa fa-angle-right"></i>
            </router-link>
            <router-link class="card-item" to="/address/list">
                <span>收货地址</span>
                <span class="placeholder"></span>
                <i class="fa fa-angle-right"></i>
            </router-link>
        </div>
        <div class="card quit">
            <div class="flex btn btn-full" @click="logout">退出帐号</div>
        </div>
    </div>
</template>
<style>
    @import "../../styles/card.css";
    #page{
        height:100vh;
        position: relative;
        background-color: #f5f5f5;
    }
    .quit{
        position: absolute;
        bottom:20px;
        height:40px;
        width:100%;
        background-color: transparent;
    }
</style>
<script>
    import base from "../../base";
    export default {
        data(){
            return {
                username:"张哈哈"
            }
        },
        methods:{
            logout(){
                base.logout();
            }
        }
    }
</script>