import Vue from "vue";
import VueRouter from "vue-router";

//views
import index from "../views/index/index.vue";

import diapers_list from "../views/diapers/index.vue";

import milk_list from "../views/milk/index.vue";
import milk_detail from "../views/milk/detail.vue";

import toy_list from "../views/toy/index.vue";

import center from "../views/center/index.vue";

import settings from "../views/settings/index.vue";

import personalData from "../views/personalData/index.vue";

import address_list from "../views/address/index.vue";
import address_detail from "../views/address/detail.vue";

Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        { path:"/", name:"index", component:index },
        { path:"/index", redirect:"/" },

        { path:"/diapers/list", name:"diapers", component:diapers_list },

        { path:"/milk/list", name:"milk", component:milk_list },
        { path:"/milk/detail/:milkId", name:"detail", component:milk_detail },

        { path:"/toy/list", name:"toy", component:toy_list },

        { path:"/center", name:"center", component:center },

        { path:"/settings", name:"settings", component:settings },

        { path:"/personalData", name:"personalData", component:personalData },

        { path:"/address/list", name:"address_list", component:address_list },
        { path:"/address/detail/:addressId", name:"address_detail", component:address_detail },
    ]
});


