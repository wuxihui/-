<template>
<div class="todo">
    <input type="text"
           v-model="inputVal"
           placeholder="请输入内容。。。"
    />
    <button @click="addTodo">add</button>
  <ul>
      <Todoitem
        v-for="(item, index) in list"
        :key="item.id"
        :item="item.name"
        :index="index"
        @abc="delTodo"
        />
  </ul>
</div>
</template>
<script>
import axios from "axios";
import Todoitem from "./Todoitem.vue";
export default {
  data () {
    return {
      inputVal: "",
      list: []
    };
  },
  components: {
    Todoitem
  },
  methods: {
    addTodo() {
      this.list.push(this.inputVal);
    },
    delTodo(index) {
      this.list.splice(index, 1);
    }
  },
  created() {
    axios
      .get("http://localhost:8080/api/list.json")
      .then(response => {
        let res = response.data;
        console.log(res.data);
        if (res.code === 0) {
          this.list = res.data;
        } else {
          alert(res.msg);
        }
      })
      .catch(error => {
        alert("网络异常，请稍后重试");
      });
  }
};
</script>
<style lang="less">
</style>