import Vue from "vue";
import "bootstrap/dist/css/bootstrap.css";

Vue.filter("dateFormat", function (dateStr, patten) {
  //把时间字符串转换为时间对象
  var date = new Date(dateStr);
  //获取年份
  var year = date.getFullYear();
  //获取月份
  var month = (date.getMonth() + 1).toString().padStart(2, "0");
  //获取day
  var day = date.getDate().toString().padStart(2, "0");
  if (patten.toLowerCase() === "yyyy-mm-dd") {
    return `${year}-${month}-${day}`;
  } else {
    var hour = date.getHours().toString().padStart(2, "0");
    var minute = date.getMinutes().toString().padStart(2, "0");
    var second = date.getSeconds().toString().padStart(2, "0");
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
  }
});

Vue.directive("focus", {
  inserted(el) {
    el.focus();
  },
});

Vue.directive("color", {
  bind(el, binding) {
    el.style.color = binding.value;
  },
});

var vm = new Vue({
  el: "#app",
  data: {
    id: "",
    name: "",
    keywords: "", // 搜索的关键字
    list: [
      { id: 1, name: "奔驰", ctime: new Date() },
      { id: 2, name: "宝马", ctime: new Date() },
    ],
  },
  methods: {
    add() {
      if (this.id && this.name) {
        var obj = {
          id: this.id,
          name: this.name,
          ctime: new Date(),
        };
        this.list.push(obj);
        this.id = this.name = "";
        this.$refs.idRef.focus();
      }
    },
    // search() {
    //   return this.list.filter((item) => {
    //     if (item.name.includes(this.keywords)) {
    //       return true;
    //     }
    //   });
    // },
    del(id) {
      var index = this.list.findIndex((item) => item.id == id);
      this.list.splice(index, 1);
    },
  },
  //计算属性
  computed: {
    search: function () {
      return this.list.filter((item) => {
        if (item.name.includes(this.keywords)) {
          return true;
        }
      });
    },
  },
});
