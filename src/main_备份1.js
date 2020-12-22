import Vue from "vue";
var vm = new Vue({
  el: "#app",
  data: {
    flag: false,
    classObj: { red: true, thin: true, italic: false, active: false },
    styleObj1: { color: "red", "font-weight": 200 },
    styleObj2: { "font-style": "italic" },
  },
});
