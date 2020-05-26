<template>
    <div id="page">
        <div id="add-address" class="flex">
            <router-link to="/address/detail/-1">
                <i class="fa fa-plus-circle"></i>
            </router-link>
            <i v-if="!delState" class="fa fa-remove" @click="delState=true"></i>
            <span v-else @click="confirmDel">完成</span>
        </div>
        <div id="address-list">
            <address-item v-for="item of addressList" :key="item.id"
                          :item="item" :delState="delState" @checkItem="checkItem"></address-item>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import {Checklist} from "mint-ui";
    import base from "../../base";

    export default {
        data(){
            return {
                addressList:[],
                index:3,
                delState:false
            }
        },
        created(){
            let _this = this;
            base.HttpRequest({
                url:base.HttpBase+"/addressList.json",
                method:"get",
                callback(res){
                    _this.addressList = res.data.data || [];
                }
            })
        },
        components:{
            Checklist,
            addressItem:{
                props:["item","delState"],
                template:`<div class="flex address-item" @click="$emit('checkItem',item)">
                            <div class="checkbox" :class="[delState?'show':'hide']">
                                <input type="checkbox" v-model="item.checked">
                            </div>
                            <div class="text">
                                <div class="flex title">
                                    <div class="username">{{item.username}}</div>
                                    <div class="phone">{{item.phone}}</div>
                                </div>
                                <div class="address">{{item.address}}</div>
                            </div>
                            <i class="icon fa fa-angle-right" :class="[delState?'hide':'show']"></i>
                        </div>`
            }
        },
        methods:{
            //删除选中地址
            confirmDel(){
                let delArr = [];
                this.addressList.map(item=>{
                    item.checked && delArr.push(item.id);
                });
                //移除删除状态
                this.delState = false;
                //未选中不作响应
                if(!delArr.length) return false;
                //此处做删除操作
                console.log("此处删除");
            },
            //选中地址
            checkItem(item){
                //删除状态点击选中
                if(this.delState)
                    item.checked = !item.checked;
                //非删除状态点击跳转到地址详情
                else
                    this.$router.push({path:"/address/detail/"+item.id});
            }
        }
    }
</script>
<style>
    @import "../../assets/vars.css";
    body{
        background-color: #f5f5f5;
    }
    #add-address{
        align-items: center;
        height:60px;
        padding: 0 15px;
        justify-content: space-between;
    }

    .address-item{
        background-color: #fff;
        padding: 20px 15px;
        align-items: center;
        border-bottom: 1px solid #f5f5f5;
    }
    .address-item .checkbox,
    .address-item .icon
    {
        transition: all ease-in 0.25s;
        overflow: hidden;
    }
    .address-item .hide{
        width:0;
    }
    .address-item .show{
        width:40px;
    }
    .address-item .text{
        flex-grow: 1;
    }
    .address-item .icon{
        font-size: 24px;
        text-align: right;
    }
    .address-item .text .title{
        flex-direction: row;
        margin-bottom: 6px;
    }
    .address-item .text .title .username{
        color: #f09900;
        margin-right: 40px;
    }
</style>