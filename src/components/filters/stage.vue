<template>
    <div v-show="show" class="shadow">
        <ul class="flex list">
            <li v-for="item of stage" @click="checkItem(item)">{{item.name}}</li>
        </ul>
    </div>
</template>
<style>
    @import "./filters.css";
</style>
<script type="text/ecmascript-6">
    export default {
        props:{
            stage:{
                type:Array,
                required:true,
                default(){
                    return [];
                }
            },
            show:{
                type:Boolean,
                default:false
            }
        },
        methods:{
            checkItem(item){
                this.$emit("checkStage",item);
            }
        }
    }
</script>