<script setup>
import { toRefs } from 'vue';

const props = defineProps({
  label: String,
  name: String,
  register: Object,
  state: Number,
  value: {
    type: String,
  },
});

const { name, value, label, state } = toRefs(props);
console.log('value', props.state);
</script>

<template>
  {{ label }}
  <input
    :checked="value === state ? 'true' : 'false'"
    v-bind="register"
    :name="name"
    type="radio"
    :value="value"
    class="mx-2"
  />
</template>

<style scoped>
button {
  background: none;
  border: none;
  font-size: 22px;
}
</style>
