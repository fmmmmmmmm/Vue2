import Vue from "vue";

var vm = new Vue({
  el: "#app",
  // template:"#app2",
  data: {
    msg: 'ok',
    flag:false
  },
  methods:{
    say(){
      console.log("saysaysay")
    },
    modify(){
      this.msg = "修改了"
      //意味数据源修改之后能够立马获取最新页面吗？不能，因为数据源改掉之后页面的更新是异步
      // console.log("修改了",document.getElementById("app").innerHTML);

      //如果我们想数据源变化之后立马获取最新页面，怎么办? 可以使用Vue.nextTick方法
      //Vue.nextTick方法需要入参一个函数，该函数会在下一次dom更新循环之后执行
      Vue.nextTick(function(){
        console.log("修改了",document.getElementById("app").innerHTML);
      })
    },
    modifyFlag(){
      this.flag = !this.flag; 
      Vue.nextTick(()=>{
        this.$refs.inputRef.focus();
      })
    }
  },
  //Vue生命周期:Vue实例从创建到销毁的整个过程，在创建和销毁过程中会触发的函数就叫生命周期的钩子函数
  //生命周期钩子函数的方法是自动调用的，不需要程序员手动来触发
  //Vue生命周期分为三个阶段：组件的创建阶段、组件的运行阶段、组件的销毁阶段

  //------------------------------1.组件的创建阶段(只会执行一次)---------------------------------
  //beforeCreate是vue生命周期的第一个钩子函数，当beforeCreate执行的时候，vue的实例还没有完全创建好
  //在beforeCreate中不能访问data和methods
  beforeCreate(){
    console.log("beforeCreate",this.msg,this.say)
  },
  //created是vue生命周期的第二个钩子函数，该函数执行的时候，可以访问data和methods中的数据，但是页面还没有准备好
  created(){
    console.log("created",this.msg,this.say)
    // console.log(document.getElementById("app").innerHTML)
  },
  //beforeMount是vue生命周期的第三个钩子函数，该函数执行的时候，表示虚拟dom已经在内存中构建好了，但是还没有把虚拟dom挂载到页面
  beforeMount(){
    console.log("beforeMount")
    // console.log(document.getElementById("app").innerHTML)
  },
  //mounted是vue生命周期的第四个钩子函数，该函数执行的时候，内存中的虚拟dom已经挂载到页面了，用户可以获取到最新的页面
  mounted(){
    console.log("mounted")
    // console.log(document.getElementById("app").innerHTML)
  },


  //------------------------------2.组件的运行阶段(会执行多次)---------------------------------
  //beforeUpdate组件运行的阶段的第一个钩子，该函数会在数据源改变之后，页面更新之前执行。该方法执行的时候，页面不是最新的
  beforeUpdate(){
    console.log("beforeUpdate")
    // console.log(document.getElementById("app").innerHTML)
  },
  //updated是组件运行阶段的第二个钩子，该函数会在数据源改变之后，页面更新之后执行。
  updated(){
    console.log("updated")
    // console.log(document.getElementById("app").innerHTML)
  },


  //-------------------------------3.组件销毁阶段-----------------------------------------
  beforeDestroy(){
    console.log("beforeDestroy")
  },
  destroyed(){
    console.log("destroyed")
  }
});


//手动挂载el
// vm.$mount("#app")
