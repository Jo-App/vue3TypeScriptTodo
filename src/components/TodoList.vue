<template>
  <div>
    {{todoItems}}
    <ul>
      <li class="shadow" v-for="(item, index) in todoItems" :key="index">
        {{ item.title }}
        {{ item.content }}
        <span class="removeBtn" @click="removeItem(item, index)">
          <i class="far fa-trash-alt"></i>
        </span>
      </li>
    </ul>
    <hr>
    <!-- {{lists}}
    <div v-for="(item, index) in lists" :key="index">
      {{item}}
    </div> -->
    <hr>
  </div>
</template>

<script>
import { defineComponent, ref, reactive } from 'vue';
import { useStore } from "vuex";
//import _ from "lodash";
//import { mapGetters } from 'vuex';

export default defineComponent({
  setup() {
    const todoList = reactive([{
      title: "Hello, reactive",
      content: "content",
      date: ""
    }]);

    const store = useStore();
    const todoItems = ref(store.state.todoItems);
    //const book = reactive<todoItemsShow>({ title: 'Vue 3 Guide' })
    // or
    //const book: Book = reactive({ title: 'Vue 3 Guide' })
    // or
    //const book = reactive({ title: 'Vue 3 Guide' }) as Book

    return {
      todoItems,
    }
    
  }
})


  // computed: _.extend(
  //   {
  //     totalpage: function() {
  //       var totalcount = this.backupList.totalcount;
  //       var pagesize = 10;
  //       return Math.floor(totalcount / pagesize) + 1;
  //     }
  //   },
  //   mapState(["backupList", "backupGroupList"])
  // ),
// export default {
//   computed : {
//     // ...mapGetters({
//     //   todoList : todoList,
//     // }),
//     ...mapGetters(['todoList'])
//   },
//   methods : {
//     removeItem: function(item, index){
//       //this.$emit('delete:item', item, index);
//       //var obj = { item, index };
//       this.$store.commit('removeTodoItem', { item, index });
//     },
//   },

//   beforeMount: function() {
//     console.log("befor Mount");
//   },

//   //화면에 인스턴스가 붙고 난 직후
//   mounted: function() {
//     console.log("mounted");
//   }
// };
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}

.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>