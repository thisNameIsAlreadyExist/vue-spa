<template>
    <div id="footer">
        <ul class="menu">
            <template v-for="(menu,idx) of menus">
                <li v-if="idx > 0" class="split-line"></li>
                <li>
                    <router-link :to="menu.link">{{menu.name}}</router-link>
                </li>
            </template>
        </ul>
    </div>
</template>

<style>
  #footer .menu{
    position: fixed;
    bottom: 0;
    left:0;
    width:100%;
    height:40px;
    border-top:1px solid #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #fff;
      z-index: 1;
  }
    #footer .menu li{
        margin: 0;
    }
  #footer .menu li.split-line{
    width: 1px;
    height:30%;
    background-color: #f5f5f5;
  }
  #footer .menu li:last-of-type{
    border: none;
  }
  #footer .menu li a{
    text-decoration: none;
    color: #333;
  }
</style>

<script>
    import menus from "./../../configs/menus";

    export default {
        data(){
            return {
                menus
            }
        }
    }
</script>
