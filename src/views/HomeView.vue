<script setup>
import { computed, ref, watch } from 'vue';
import store from '../store/index';

const switchs = ref(false);

const status = computed(() => switchs.value);

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
];

const value = computed(() => store.getters.count);
const test = computed(() => store.getters.test);

const increment = () => {
  store.dispatch('countStore/asyncIncrement');
};

const decrement = () => {
  store.dispatch('countStore/asyncDecrement');
};

watch(switchs, (status) => {
  store.commit('authStore/toggle', { status: status });
});
</script>

<template>
  <main>
    <h1 class="text-red-500 text-2xl">Home view1</h1>
    <el-switch v-model="switchs" />
    <p>status : {{ status ? 'logout' : 'login' }}</p>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>
    <p>count:{{ value }}</p>
    <p>test:{{ test }}</p>

    <div class="flex">
      <button @click="increment">Increment</button>
      <button @click="decrement">Decrement</button>
    </div>
  </main>
</template>
