<template>
    <li>
      {{ item }} - <button @click="delTodo">del</button>
    </li>
</template>
<script>
//通过export default 来暴露出来
   export default {
     props: {
      item: String,
      index: Number
     },
     methods: {
       delTodo () {
         this.$emit('abc',this.index);
       }
     }
   }
</script>
<style lang="less">

</style>