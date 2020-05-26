<template>
    <div id="page">
        <div class="card">
            <div class="card-item" to="/personalData">
                <span>头像</span>
                <span class="placeholder"></span>
                <i class="fa fa-angle-right"></i>
            </div>
            <div class="card-item">
                <span>昵称</span>
                <span class="placeholder nickname">{{nickname}}</span>
                <i class="fa fa-angle-right"></i>
            </div>
            <div class="card-item" @click="sex.show=true">
                <span>性别</span>
                <span class="placeholder">{{sex.value}}</span>
                <i class="fa fa-angle-right"></i>
            </div>
            <!--actionsheet-->
            <mt-actionsheet
                    :actions="sex.data"
                    v-model="sex.show">
            </mt-actionsheet>
            <div class="card-item" @click="$refs['picker'].open()">
                <span>生日</span>
                <span class="placeholder">{{birthday.value}}</span>
                <i class="fa fa-angle-right"></i>
            </div>
            <!--picker-->
            <mt-datetime-picker
                    ref="picker"
                    type="date"
                    v-model="birthday.valueDate"
                    @confirm="checkBirthday">
            </mt-datetime-picker>
            <div class="card-item" @click="baby.show=true">
                <span>宝宝年龄</span>
                <span class="placeholder">{{baby.value}}岁</span>
                <i class="fa fa-angle-right"></i>
            </div>
            <!--picker-->
            <mt-popup
                :style="baby.style"
                position="bottom"
                v-model="baby.show">
                <mt-picker
                        :style="baby.style"
                        :slots="baby.data"
                        @change="onAgeChange"
                        :visible-item-count="3">
                </mt-picker>
            </mt-popup>
        </div>
        <div class="card">
            <div class="card-item">
                <span>密码设置</span>
                <span class="placeholder"></span>
                <i class="fa fa-angle-right"></i>
            </div>
        </div>
        <div class="card quit">
            <div class="flex btn btn-full" @click="save">确认修改</div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import base from "../../base";
    export default {
        data(){
            let _this = this;
            return {
                nickname:"张哈哈",
                sex:{
                    show:false,
                    value:"未填写",
                    data:[
                        {
                            name:"男",
                            method:_this.checkSex
                        },
                        {
                            name:"女",
                            method:_this.checkSex
                        }
                    ]
                },
                birthday:{
                    value:"未填写",
                    valueDate:new Date(),
                    position:"bottom"
                },
                baby:{
                    value:"未填写",
                    show:false,
                    style:{width:"100%"},
                    data:[{
                        flex: 1,
                        values: [0,1,2,3,4,5,6]
                    }]
                }
            }
        },
        created(){
            let _this = this;
            base.HttpRequest({
                url:base.HttpBase+"/personalData.json",
                method:"get",
                callback(res){
                    let data = res.data.data;
                    _this.headAvatar = data["head-avatar"];
                    _this.nickname = data.nickname;
                    _this.sex.value = data.sex;
                    _this.birthday.value = data.birthday;
                    _this.baby.value = data.baby;
                }
            });
        },
        methods:{
            onAgeChange(picker, values) {
                this.baby.value = values[0];
            },
            checkSex(val){
                this.sex.value = val.name;
            },
            checkBirthday(val){
                this.birthday.value = base.dateFormat({value:val,split:"-",short:true});
            },
            save(){
                console.log("save");
            }
        }
    }
</script>
<style scoped>
    @import "../../styles/card.css";
    #page{
        height:100vh;
    }
    .card-item .placeholder{
        text-align: right;
        margin: 0 10px;
    }
    .quit{
        position: absolute;
        bottom:20px;
        height:40px;
        width:100%;
        background-color: transparent;
    }
</style>