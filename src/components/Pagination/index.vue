<template>
  <el-pagination
    @current-change="setPage"
    background
    layout="pager, next"
    :total="total"
    next-text="次へ>>"
  />
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
<style>
  .el-pagination li {
    width: 47px;
    height: 47px;
    font-size: 16px;
  }
  .el-pagination button {
    width: 74px;
    height: 47px;
    font-size: 16px;
  }
  .el-pagination .is-active{
    background-color: #707070 !important;
    color: #fff;
  }
</style>
