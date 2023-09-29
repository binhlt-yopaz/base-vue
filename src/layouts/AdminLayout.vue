<!-- AdminLayout.vue -->

<template>
  <div class="flex flex-col min-h-screen">
    <header class="p-8 bg-blue-300">
      <div class="flex justify-between items-center">
        <nav>
          <RouterLink class="mr-2" to="/admin">Manage</RouterLink>
          <RouterLink to="/admin/cars">Cars</RouterLink>
        </nav>
        <el-button
          @click="
            () => {
              logout();
            }
          "
          type="danger"
          >Logout</el-button
        >
      </div>
    </header>
    <div class="flex-grow p-4">
      <router-view></router-view>
    </div>
    <footer class="p-8 bg-gray-500">footer</footer>
  </div>
</template>

<script setup>
import { logout } from '@/utils/auth';
</script>
