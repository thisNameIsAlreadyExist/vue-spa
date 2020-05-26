<template>
    <div id="page">
        <div id="center">
            <div class="flex user-info">
                <div class="flex head-avatar">
                    <img :src="baseUri+'/images/head-avatar.png'" alt="用户头像">
                    <p>你好,{{user.name}}</p>
                </div>
            </div>
            <div class="card">
                <router-link class="card-item" to="/order/list">
                    <i class="icon fa fa-reorder"></i>
                    <span class="name placeholder">我的订单</span>
                    <i class="fa fa-angle-right"></i>
                </router-link>
                <a href="https://www.baidu.com" class="card-item">
                    <i class="icon fa fa-reorder"></i>
                    <span class="name placeholder">我的订单</span>
                    <i class="fa fa-angle-right"></i>
                </a>
                <router-link class="card-item" to="/discount">
                    <i class="icon fa fa-diamond"></i>
                    <span class="name placeholder">优惠券</span>
                    <i class="fa fa-angle-right"></i>
                </router-link>
                <router-link class="card-item" to="/vip">
                    <i class="icon fa fa-address-book"></i>
                    <span class="name placeholder">会员中心</span>
                    <i class="fa fa-angle-right"></i>
                </router-link>
                <router-link class="card-item" to="/settings">
                    <i class="icon fa fa-cogs"></i>
                    <span class="name placeholder">设置</span>
                    <i class="fa fa-angle-right"></i>
                </router-link>
            </div>
            <div class="card">
                <router-link class="card-item" to="/contact">
                    <i class="icon fa fa-phone"></i>
                    <span class="name placeholder">联系我们</span>
                    <i class="fa fa-angle-right"></i>
                </router-link>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<style>
    @import "../../styles/card.css";
    *{
        font-family:'FontAwesome';
    }
    #center{
        background-color: #f5f5f5;
    }
    #center .user-info{
        height:200px;
        align-items: center;
        justify-content: center;
        background-color: #2b81af;
    }
    #center .user-info .head-avatar{
        flex-direction: column;
        align-items: center;
        width:120px;
        color: #ffffff;
    }
    #center .user-info .head-avatar img{
        width:100%;
        border-radius: 50%;
        margin-bottom: 20px;
    }

    #center .card .card-item .name{
        flex-grow: 1;
        margin-left: 15px;
    }
    #center .card .card-item .icon{
    display: flex;
    width:20px;
    color: #666;
    justify-content: center;
    }
</style>
<script>
    import {store} from "../../store/store";
    import Footer from "../../components/footer/index.vue";
    import base from "../../base";

    export default {
        data(){
            return {
                user:{
                    name:"张哈哈"
                },
                baseUri:base.ImageBase
            }
        },
        store,
        components:{
            Footer
        }
    }
</script>
