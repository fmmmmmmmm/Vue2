import Vue from "vue";

var vm = new Vue({
  el: "#app",
  data: {
    firstname: "",
    lastname: "",
  },
  methods: {},
  
  //监听属性的变化
  watch: {
    // firstname: function (newVal, oldVal) {
    //   this.fullname = newVal + this.lastname;
    // },
    // lastname: function (newVal, oldVal) {
    //   this.fullname = this.firstname + newVal;
    // },
  },

  //computed是计算属性: 当前的属性是由其他属性推导出来的
  //计算属性的特点：
  //1.计算属性是一个方法，但是我们在用的时候把它当成普通属性来用
  //2.计算属性的值会被缓存，在页面多次使用的时候，下一次使用的是上一次的缓存值
  //3.在计算属性所依赖的属性发生变化的时候会重新触发计算属性的方法执行
  computed: {
    fullname: function () {
      return this.firstname + this.lastname;
    },
  },
});
