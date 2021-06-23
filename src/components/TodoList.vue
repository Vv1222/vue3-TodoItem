<template>
  <div v-for="(i,index) in todoList" :key="index" >
    <TodoItem :item="i.item" />
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps,toRefs} from 'vue'
import TodoItem from './TodoItem.vue'
type todoList = {
  id:number
  item:string,
  status:boolean,
}
const props = defineProps({
  todoList:{
    type: Array,
    default: ()=>[]
  }
})
const {todoList} = toRefs(props)
 console.log(333,todoList.value );
</script>

<style scoped>

</style>
