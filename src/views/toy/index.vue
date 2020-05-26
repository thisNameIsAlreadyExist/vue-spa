<template>
    <div id="page">
        <div>这是玩具页</div>
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
