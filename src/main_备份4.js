import Vue from "vue";

//自定义指令:
//1.自定义全局指令   focus是指令的名字，在页面上可以使用v-focus来使用当前的指令
Vue.directive("focus", {
  //bind是指令绑定到元素的时候执行，但是此时元素还没有插入到dom
  bind: function (el) {
    console.log("bind", el);
  },
  //绑定指令的元素插入到dom的时候执行,此时页面已经有这个元素了
  inserted: function (el) {
    console.log("inserted", el);
    el.focus();  //el.focus()一定要保证元素在页面存在
  },
  //组件更新的时候调用
  update: function (el) {
    console.log("update", el);
  },
});

var vm = new Vue({
  el: "#app",
  data: {
    flag:true
  },
  methods: {},
  //2.自定义局部指令
  directives:{
    //这个function 等同于把代码写到了 bind 和 update 中去
    fontsize:function(el,binding){
      console.log(el,binding)
      el.style.fontSize = binding.value + "px"
    }
  }
});
