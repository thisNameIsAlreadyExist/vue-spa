<template>
  <div class="flex doctor-item">
    <div class="flex img">
      <!--<img src="../../images/head-avatar.png" alt="">-->
    </div>
    <div class="flex text">
      <div class="doctor-name">{{milk.name}}</div>
      <div class="doctor-hospital">{{milk.address}}</div>
      <div class="doctor-cases">案例  {{milk.cases}}</div>
    </div>
  </div>
</template>

<style scoped>
  .flex{
    display: flex;
  }
  .doctor-item{
    padding: 3% 5%;
    background-color: #fff;
  }
  .doctor-item .img{
    width: 120px;
    height: 120px;
    flex-shrink: 0;
    background-color: #7f7f7f;
    align-items: center;
  }
  .doctor-item .text{
    width: 100%;
    padding: 0 20px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: #42b983;
  }
</style>

<script>
  export default {
    props: {
        milk: {
        type: Object,
        required:true,
        default(){
          return {
            name:"",
            address:"",
            cases:0
          }
        }
      }
    }
  }
</script>
