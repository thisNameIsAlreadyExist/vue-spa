import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let store = new Vuex.Store({
  debug:true,
  state:{
    count:0
  },
  mutations: {
    increment (state) {
      state.count++;
    },
    reduce(state){
      state.count--;
    }
  },
  actions:{
    increment({commit}){
      setTimeout(function(){
        commit("increment");
      },1000);
    }
  }
});

export {
  store
}
