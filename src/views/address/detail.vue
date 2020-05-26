<template>
    <div id="page">
        <div class="card">
            <div class="form-item">
                <span>收货人姓名 : </span>
                <input type="text" maxlength="20" v-model.trim="addressInfo.username">
            </div>
            <div class="form-item">
                <span>手机号码 : </span>
                <input type="text" maxlength="11" v-model.trim="addressInfo.phone">
            </div>
            <div class="form-item">
                <span>详细地址 : </span>
                <input type="text" maxlength="100" v-model.trim="addressInfo.address">
            </div>
        </div>
        <div class="card set-default">
            <div class="form-item">
                <span>设为默认地址</span>
                <mt-switch @change="switchChange" v-model="isDefault"></mt-switch>
            </div>
        </div>
        <div class="card save">
            <div class="flex btn btn-full" @click="save">保存</div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import base from "../../base";
    export default {
        data(){
            return {
                id:this.$route.params.addressId,
                isDefault:false,
                addressInfo:{
                    username:"",
                    phone:"",
                    address:""
                }
            }
        },
        created(){
            //编辑地址
            if(+this.id !== -1){
                let _this = this;
                base.HttpRequest({
                    url:base.HttpBase+"/addressDetail.json",
                    method:"get",
                    callback(res){
                        Object.assign(_this.addressInfo,res.data.data);
                    }
                });
            }
            //新增地址
            else{

            }
        },
        methods:{
            save(){
                let _this = this;
                //此处验证输入
                base.validator([
                    {
                        name:"收货人姓名",
                        value:this.addressInfo.username,
                        except:["required"]
                    },
                    {
                        name:"手机号",
                        value:this.addressInfo.phone,
                        except:["phone"]
                    }
                ]);
                return ;
                let params = Object.assign(_this.addressInfo,{setDefault:_this.isDefault});
                base.HttpRequest({
                    url:base.HttpBase+"/addAddress",
                    method:"post",
                    data:params,
                    callback(res){

                    }
                });
            },
            switchChange(value){
                console.log(this.isDefault);
            }
        }
    }
</script>
<style>
    #page{
        background-color: #f5f5f5;
        height:100vh;
        position: relative;
    }
    .card{
        background-color: #fff;
    }
    .set-default{
        margin-top: 10px;
    }
    .form-item{
        display: flex;
        align-items: center;
        height:40px;
        padding: 0 15px;
        border-bottom: 1px solid #f5f5f5;
    }
    .form-item span{
        font-size: 12px;
        color: #666;
    }
    .form-item input{
        border:none;
        height:80%;
        flex-grow: 1;
        outline: none;
        font-size: 14px;
        margin-left: 10px;
    }
    .set-default .form-item span{
        flex-grow: 1;
    }
    .save{
        position: absolute;
        bottom:20px;
        height:40px;
        width:100%;
        background-color: transparent;
    }
    .save .btn{
        color: #fff;
        background-color: #f09900;
    }

    /*mint-ui style reset*/
    .mint-switch .mint-switch-core{
        height:17.5px;
        width:32px;
    }
    .mint-switch .mint-switch-core:before{
        height:16px;
        width:30px;
    }
    .mint-switch .mint-switch-core:after{
        height:15px;
        width:15px;
    }
    .mint-switch-input:checked + .mint-switch-core{
        background-color:#f09900;
        border-color: #f09900;
    }
    .mint-switch-input:checked + .mint-switch-core::after{
        transform: translateX(15px);
    }
</style>