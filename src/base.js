import axios from "axios";

export default {
    // HttpBase:"/datas",
    HttpBase:"/src/datas",
    // ImageBase:"",
    ImageBase:"/src",
    /**
     * 日期格式化
     * @param options
     * @returns {*}
     */
    dateFormat(options){
        let date = new Date(options.value),
            year = date.getFullYear(),
            month = date.getMonth() + 1,
            day = date.getDate(),
            hour = date.getHours(),
            min = date.getMinutes(),
            sec = date.getSeconds(),
            rt = year;
        //日期格式化
        [month,day,hour,min,sec].map(item=>{
            (item < 10) && (item = "0" + item);
            rt += (options.split + item);
        });
        options.short && (rt = rt.substr(0,10));
        return rt;
    },
    /**
     * http请求
     * @param options
     * @constructor
     */
    HttpRequest(options){
        let method = (options.method  || "get").toLowerCase();
        axios[method](
            options.url,
            options.data || {}
        ).then(
            res=>{
                //错误处理
                if(res.data.status !== 200){
                  this.HttpError();
                }else{
                  options.callback && options.callback(res);
                }
            }
        ).catch(err=>{
            this.HttpError(err);
        });
    },
    /**
     * 错误处理
     * @param err
     * @constructor
     */
    HttpError(err){
        alert(err);
    },
    /**
     * 获取数据类型
     * @param str
     * @returns {string}
     */
    getType(str){
        return Object.prototype.toString.call(str).slice(8,-1).toLowerCase();
    },
    /**
     * 验证规则
     * @param type
     * @param value
     * @returns {boolean}
     */
    validRules(type,value){
        let rt = false;
        switch (type){
            case "required" : {
                rt = !!value;
            } break;
            case "phone" : {
                let exp = new RegExp("^1[34578]{1}[0-9]{9}$");
                rt = !!value.match(exp);
            } break;
            default : {
                rt = value;
            }
        }
        return rt;
    },
    /**
     * 验证内容是否符合期望
     * @param validate
     */
    validator(validate){
        let valid = false,
            type = this.getType(validate);
        //格式不正确
        if(type !=="array")
            throw new Error("type error: need an Array data!");

        for(let i=0,l=validate.length;i<l;i++){
            let val = validate[i];
            for(let k=0,m=val.except.length;k<m;k++){
                let item = val.except[k],
                    name = val.name;
                //验证失败
                if(!this.validRules(item,val.value)){
                    this.HttpError(name+" valid "+valid);
                    return false;
                }
            }
        }
        return valid;
    }
};
