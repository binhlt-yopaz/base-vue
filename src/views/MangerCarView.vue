<template>
  <main>
    <div class="flex justify-between items-center my-4">
      <h1 class="text-red">Manage</h1>
      <el-button type="info" @click="() => router.push({ name: 'createCar' })"
        >Create car</el-button
      >
    </div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">ID</th>
            <th scope="col" class="px-6 py-3">Name</th>
            <th scope="col" class="px-6 py-3">Image</th>
            <th scope="col" class="px-6 py-3">Option</th>
            <th scope="col" class="px-6 py-3">Description</th>
            <th scope="col" class="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="car in data"
            :key="car.id"
            class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
          >
            <th class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {{ car.id }}
            </th>
            <td class="px-6 py-4">
              {{ car.name }}
            </td>
            <td class="px-6 py-4">
              <img :src="car.image" class="w-[80px] object-cover h-[80px]" />
            </td>
            <td class="px-6 py-4">
              {{ car.state === 1 ? 'Full options' : 'Standard' }}
            </td>
            <td class="px-6 py-4">
              {{ car.description }}
            </td>
            <td class="px-6 py-4">
              <el-icon
                :size="20"
                @click="editHandle(car.id)"
                color="#409EFC"
                class="cursor-pointer mr-1"
              >
                <Edit />
              </el-icon>
              <el-icon
                :size="20"
                color="#F56C6C"
                class="cursor-pointer"
                @click="() => setId(car.id)"
              >
                <Delete />
              </el-icon>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="mt-5">
      <Pagination :total="13" @current-change="setPage" />
    </div>
    <el-dialog v-model="centerDialogVisible" title="Warning" width="30%" center>
      <span> It should be noted that the content will not be aligned in center by default </span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="centerDialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="deleteHandle"> Confirm </el-button>
        </span>
      </template>
    </el-dialog>
  </main>
</template>

<script setup>
import router from '@/router';
import store from '@/store';
import { computed, ref, watch } from 'vue';
import Pagination from '@/components/Pagination/index.vue';
const page = ref(1);
const centerDialogVisible = ref(false);
// func
const setId = (id) => {
  store.commit('carStore/setId', id);
  centerDialogVisible.value = true;
};

const setPage = (value) => {
  page.value = value;
};

const editHandle = (id) => {
  router.push({ name: 'editCar', params: { id } });
};

const deleteHandle = () => {
  const id = store.state.carStore.id;
  store.dispatch('carStore/deleteCar', { id });
  centerDialogVisible.value = false;
  store.dispatch('carStore/getCars', { page: page.value });
};

watch(
  page,
  (page) => {
    store.dispatch('carStore/getCars', { page });
  },
  { immediate: true },
);

const data = computed(() => {
  return store.getters.car;
});
</script>

<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
