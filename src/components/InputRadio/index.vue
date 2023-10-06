<template>
  <div>
    <div style="display: flex">
      <div v-for="option in options" :key="option.value" class="flex">
        <input
          type="radio"
          :value="option.value"
          :name="name"
          v-model="radioValue"
          @change="handleChange"
        />
        <label class="ml-1 mr-9 text-base">{{ option.key }}</label>
      </div>
    </div>
    <div class="error-feedback">{{ errors[name] }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
  name: String,
  options: Array,
  value: String,
  handleChange: Function,
  errors: Object,
});
const radioValue = ref(props.value);
</script>
