<template>
  <el-pagination @current-change="setPage" background layout="prev, pager, next" :total="total" />
</template>

<script setup>
const emit = defineEmits(['setPage']);
defineProps({
  total: Number,
});
const setPage = (value) => {
  emit('current-change', value);
};
</script>
