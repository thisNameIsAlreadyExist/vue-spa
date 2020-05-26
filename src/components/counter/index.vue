<template>
  <div>
    {{count}}
    <button @click="addCount">addCount</button>
    <button @click="rduCount">rduCount</button>
  </div>
</template>

<script>
    export default {
        computed: {
            count(){
                return this.$store.state.count;
            }
        },
        methods:{
            addCount(){
                this.$store.commit("increment");
            },
            rduCount: function () {
                this.$store.commit("reduce");
            }
        }
    }
</script>
