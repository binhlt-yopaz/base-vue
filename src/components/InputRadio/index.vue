<script setup>
import { toRefs } from 'vue';
import { Field } from 'vee-validate';

const props = defineProps({
  label: String,
  name: String,
  value: {
    type: String,
  },
});

const { name, value, label } = toRefs(props);
</script>

<template>{{ label }} <Field :name="name" type="radio" :value="value" class="mx-2" /></template>

<style scoped>
button {
  background: none;
  border: none;
  font-size: 22px;
}
</style>
