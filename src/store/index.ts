import { createStore } from "vuex";
//import Vuex, { StoreOptions } from 'vuex';

// export type State = { 
//   counter: number,
//   items: string[], //요롱케하면 스타일 에러남...
// };
export type State = { 
  counter: number;
  items: string[];
  todoItems: TodoItem[];
};

const state: State = { 
  counter: 0,
  items: [],
  todoItems: [],
};

export interface TodoItem {
  title: string;
  content: string;
}

// export interface RootState {
//   todoItems: TodoItem[];
// }


export const store = createStore({
//const store: StoreOptions<RootState> = {
  state: {
    //counter: 0,
    //items: [],
    todoItems: [],
  },
  mutations: {
    // increment(state) {
    //   state.counter++;
    // },

    // clearAll(state) {
    //   localStorage.clear();
    //   state.items = [];
    // },

    addTodoItems(state: any, payload: any): TodoItem[] {
      console.log("addTodoItems")
      console.log(payload.inputText)
      console.log(state)
      //state.list.push(payload.inputText);
      console.log()
      return state.todoItems.push({
        title: "제목",
        content: payload.inputText
      });
    },
  },
  actions: {
    increment({ commit }) {
      commit("increment");
    }
  },

  getters: {
    // counter(state) {
    //   return state.counter;
    // }
    // todoItemsShow({ todoItems }): TodoItem[] {
    //   return todoItems;
    // },
  },
  modules: {}
});
//};

//export default new Vuex.Store<RootState>(store);

