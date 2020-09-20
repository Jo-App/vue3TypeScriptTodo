<template>
  <div class="clearAllContainer">
    <span 
      class="clearAllBtn"
      @click="clearAll()"
    >Clear All</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"; 
import { useStore } from "vuex";

export default defineComponent({ //전달 된 인수에 대한 유형을 얻으려면 setup()의  defineComponent 가 필요하다?
  // methods:{ vue2
  //   clearAll(){
  //     this.$store.commit('clearAll');
  //   }
  // }
  //vue3
  setup() {
    const store = useStore();
    const clearAll = () => {
      console.log("clearAll")
      store.commit("clearAll");
    };

    return {
      clearAll  //메소드를 리턴해줘야된다!?
    }
  }
})
</script>

<style scoped>
  .clearAllContainer {
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: white;
    border-radius: 5px;
    margin: 0 auto;
  }
  .clearAllBtn {
    color: #e20303;
    display: block;
  }
</style>
