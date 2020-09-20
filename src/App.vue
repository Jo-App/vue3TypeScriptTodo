<template>
  <!-- HTML -->
  <div>
    <todo-header></todo-header>
    <todo-input></todo-input>
    <todo-list></todo-list>
    <todo-footer></todo-footer>
    <Counter></Counter>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";
//import Counter from "./components/Counter.vue";

export default {
  // 인스턴스 옵션 & 컴포넌트 속성들이 들어가는 곳
  components: {
    // '컴포넌트 이름': 컴포넌트 내용,
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
    //Counter
  },
};
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}
input {
  border-style: groove;
  width: 300px;
  padding: 10px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>