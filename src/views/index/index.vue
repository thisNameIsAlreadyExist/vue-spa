<template>
    <div id="page">
        <div>这是首页</div>
        <Footer></Footer>
    </div>
</template>
<style>
  #doctor-list{
    background-color: #f5f5f5;
  }
  #doctor-list .doctor-item-link:not(:first-of-type){
    display: block;
    margin-top: 15px;
  }
</style>
<script type="text/ecmascript-6">
  import Footer from "../../components/footer/index.vue";
  import mpSpa from "../../base";

  export default {
    data(){
      return {

      }
    },
    components:{
      Footer
    }
  }
</script>
