<template>
  <input type="text" placeholder="添加事件" v-model="inputInfo"> <button @click="addItem">添加</button>
  <TodoList  :todo-list="state.todoList"/>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import TodoList from './TodoList.vue'

const inputInfo = ref('')
const state = reactive({
  todoList: [] as any
})
const addItem = () => {
  console.log(333, inputInfo.value);
  if(inputInfo.value === '') return
  let value = inputInfo.value.trim()
  state.todoList.unshift({
    id:state.todoList.length+1,
    item:value,
    status:false,
  })
}

</script>

<style scoped>

</style>
