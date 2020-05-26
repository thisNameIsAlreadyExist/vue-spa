<template>
    <div id="page">
        <div id="filters" class="flex">
            <div class="filter-item" :class="{active:brands.show}" @click="filtersClick('brands')">
                <span class="name">{{brands.name}}</span>
                <i class="fa fa-angle-down"></i>
            </div>
            <div class="split-line"></div>
            <div class="filter-item" :class="{active:stage.show}" @click="filtersClick('stage')">
                <span class="name">{{stage.name}}</span>
                <i class="fa fa-angle-down"></i>
            </div>
            <div class="split-line"></div>
            <div class="filter-item" :class="{active:origin.show}" @click="filtersClick('origin')">
                <span class="name">{{origin.name}}</span>
                <i class="fa fa-angle-down"></i>
            </div>
        </div>
        <div id="milk-list">
            <router-link :class="'milk-item-link'" v-for="milk of milkList" :to="'/milk/detail/'+milk.id" :key="milk.id">
                <Milk :milk="milk"></Milk>
            </router-link>
        </div>
        <Footer></Footer>
        <Filter_brands :show="brands.show" :brands="brands.data" @checkBrand="checkBrand"></Filter_brands>
        <Filter_stage :show="stage.show" :stage="stage.data" @checkStage="checkStage"></Filter_stage>
        <Filter_origin :show="origin.show" :origin="origin.data" @checkOrigin="checkOrigin"></Filter_origin>
    </div>
</template>
<style>
    #page{
        height:100vh;
    }
    #filters .filter-item{
        width:33.333%;
    }
    #milk-list{
        background-color: #f5f5f5;
        margin-top: 40px;
        margin-bottom: 40px;
    }
    #milk-list .milk-item-link:not(:first-of-type){
        display: block;
        margin-top: 15px;
    }
</style>
<script type="text/ecmascript-6">
    import Milk from "../../components/milk/index.vue";
    import base from "../../base";
    import Footer from "../../components/footer/index.vue";
    import Filter_brands from "../../components/filters/brands.vue";
    import Filter_stage from "../../components/filters/stage.vue";
    import Filter_origin from "../../components/filters/origin.vue";

    export default {
        data(){
            return {
                brands:{
                    show:false,
                    data:[
                        {name:"全部品牌",id:""},
                        {name:"贝优美",id:1},
                        {name:"贝智康",id:2},
                        {name:"婴之道",id:3}
                    ],
                    name:"全部品牌"
                },
                stage:{
                    show:false,
                    data:[
                        {name:"全部阶段",id:""},
                        {name:"一段",id:1},
                        {name:"二段",id:2},
                        {name:"三段",id:3}
                    ],
                    name:"全部阶段"
                },
                origin:{
                    show:false,
                    data:[
                        {name:"中国",id:1},
                        {name:"澳大利亚",id:2},
                        {name:"美国",id:3},
                        {name:"法国",id:4}
                    ],
                    name:"中国"
                },
                filters:{
                    brandId:""
                },
                milkList:[]
            }
        },
        created(){
            let _this = this;
            base.HttpRequest({
                url:base.HttpBase+"/milkList.json",
                method:"get",
                callback(res){
                    _this.milkList = res.data.data || [];
                }
            });
        },
        components:{
            Milk,
            Footer,
            Filter_brands,
            Filter_stage,
            Filter_origin,
        },
        methods:{
            filtersClick(checked){
                let arr = ["brands","stage","origin"];

                arr.map(item=>{
                    if(checked === item)
                        this[item].show = !this[item].show;
                    else
                        this[item].show = false;
                });
            },
            checkBrand(item){
                this.brands.show = false;
                this.brands.name = item.name;
                this.filters.brandId = item.id;
            },
            checkStage(item){
                this.stage.show = false;
                this.stage.name = item.name;
                this.filters.stageId = item.id;
            },
            checkOrigin(item){
                this.origin.show = false;
                this.origin.name = item.name;
                this.filters.originId = item.id;
            }
        }
    }
</script>
