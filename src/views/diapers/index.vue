<template>
    <div id="page">
        <div>这是纸尿裤页</div>
        <Footer></Footer>
    </div>
</template>

<script>
  import {store} from "../../store/store";
  import Footer from "../../components/footer/index.vue";

  export default {
    data(){
      return {

      }
    },
    store,
    components:{
        Footer
    }
  }
</script>
