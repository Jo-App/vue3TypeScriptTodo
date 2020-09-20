<template>
  <div class="inputBox shadow">
    <input type="text" v-model="inputText" @keyup.enter="addItem()">
    <span @click="addItem()" class="addContainer">
      <i class="fas fa-plus">버튼</i>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    const inputText = ref("");

    const addItem = () => {
      //console.log(inputText.value)
      store.commit("addTodoItems", { inputText: inputText.value });
      //state.inputText = '';
    }

    return {
      inputText,
      addItem
    }
  }
})
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: inline-block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
  float:right;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalBtn{
    color : #42b983;
}
</style>
