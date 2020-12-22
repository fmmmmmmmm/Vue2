import Vue from "vue";

//过滤器的作用：主要对文本进行过滤
//过滤器的声明：
//1.全局过滤器  Vue.filter  在所有的组件中都可以用
Vue.filter("msgFormat", function (msg, arg1, arg2) {
  //msg是要处理的文本
  //arg1 arg2就是使用过滤器的时候传递的参数
  console.log(msg, arg1, arg2);
  var reg = new RegExp(arg1, "g");
  return msg.replace(reg, arg2);
});

//2.局部过滤器 ： 写在vue实例中
//当有同名的全局和局部过滤器的时候，有限使用局部过滤器

//过滤器的使用:在插值表达式和v-bind中可以通过管道符来使用过滤器。比如 {{msg | msgFormat}}

var vm = new Vue({
  el: "#app",
  data: {
    msg:
      "曾经，我也是一个单纯的少年，单纯的我，傻傻的问，谁是世界上最单纯的男人",
  },
  //局部过滤器  在当前组件中可以用
  filters: {
    msgFormat: function (msg, arg1, arg2) {
      console.log(msg, arg1, arg2);
      var reg = new RegExp(arg1, "g");
      return msg.replace(reg, "天真");
    }
  },
});
