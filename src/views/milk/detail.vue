<template>
  <div id="doctor-details">
    <div>这是奶粉详情页</div>
    <div>milkId={{milkId}}</div>
  </div>
</template>
<style>

</style>
<script>
    export default {
        data(){
            return {
                milkId:this.$route.params.milkId
            }
        },
        created(){
            console.log(this.$route.params.milkId);
        }
    }
</script>
