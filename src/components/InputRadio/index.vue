<script setup>
import { toRefs } from 'vue';

const props = defineProps({
  label: String,
  name: String,
  register: Object,
  value: {
    type: String,
  },
});

const { name, value, label } = toRefs(props);
</script>

<template>
  {{ label }}
  <input v-bind="register" :name="name" type="radio" :value="value" class="mx-2" />
</template>

<style scoped>
button {
  background: none;
  border: none;
  font-size: 22px;
}
</style>
