<template>
  <div id="app">
    <Todo />
  </div>
</template>
<script>
  import Todo from "./components/Todo.vue";
  export default {
    //挂载的app
    name: "app",
    components: {
      Todo
    },
    mounted () {
      let obj = {
        name: 'zhangsan',
        age: 18,

      }
      console.log(obj);
    }
    
  }
  
</script>