<template>
  <div :style="{ width: width }" class="relative">
    <input
      :name="name"
      :type="inputType"
      :class="[
        'w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none dark:focus:ring-blue-500 dark:focus:border-blue-500',
        inputClass,
      ]"
      v-bind="regiter"
    />
    <button @click="togglePasswordVisibility" v-if="isPassword" class="toggle-password">
      <el-icon v-if="passwordVisible"><Open /></el-icon>
      <el-icon v-else><TurnOff /></el-icon>
    </button>
    <span class="text-red-500" v-if="errors[name]">{{ errors[name] }}</span>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
const props = defineProps({
  name: String,
  type: String,
  inputClass: String,
  width: String,
  errors: Object,
  regiter: Object,
});

const isPassword = props.type === 'password';
const passwordVisible = ref(false);
const inputType = computed(() =>
  isPassword ? (passwordVisible.value ? 'text' : 'password') : props.type
);

function togglePasswordVisibility() {
  if (isPassword) {
    passwordVisible.value = !passwordVisible.value;
  }
}
</script>

<style scoped>
.toggle-password {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
}
</style>
