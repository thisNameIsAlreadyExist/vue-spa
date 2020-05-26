<script src="dist/build.js"></script>
<template>
  <div id="view-container">
    <router-view></router-view>
  </div>
</template>

<style>
  #app {
    font-family: Microsoft YaHei, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  a,
  a:focus,
  a:active,
  a:visited{
    color: #333;
    text-decoration: none;
  }
  *{
    margin: 0;
    padding: 0;
  }

  .flex{
    display: flex;
  }
  .items-center{
    align-items: center;
  }
  .content-center{
    justify-content: center;
  }
  button.btn{
      border: none;
      background-color: transparent;
  }

  .btn.btn-full{
    height:100%;
    margin: 0 15px;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 3px;
    color: #f09900;
  }
</style>

<script>
  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to my Vue.js App'
      }
    }
  }
</script>
