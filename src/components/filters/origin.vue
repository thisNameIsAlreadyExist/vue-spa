<template>
    <div v-show="show" class="shadow">
        <ul class="flex list">
            <li v-for="item of origin" @click="checkItem(item)">{{item.name}}</li>
        </ul>
    </div>
</template>
<style>
    @import "./filters.css";
</style>
<script type="text/ecmascript-6">
    export default {
        props:{
            origin:{
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
                this.$emit("checkOrigin",item);
            }
        }
    }
</script>