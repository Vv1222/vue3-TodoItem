<template>
 <input type="checkbox" name="" id="">{{item}}
</template>

<script lang="ts" setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
  item:{
    type: String,
    default: () => ''
  }
})
</script>

<style scoped>

</style>
