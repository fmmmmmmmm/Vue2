import Vue from "vue";

//自定义按键修饰符  具体按键码的值去查看按键码表
Vue.config.keyCodes.ooo = 114


var vm = new Vue({
  el: "#app",
  data: {
   
  },
  methods:{
    enterHandler(){
      console.log("enter")
    },
    clear(){
      console.log("alt+c")
    },
    doSomething(){
      console.log("ctrl+鼠标点击")
    },
    keyupHandler(){
      console.log("f5按键")
    }
  }
  
});
