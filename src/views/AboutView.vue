<template>
  <div id="app">
    <DynamicForm :schema="formSchema" />
  </div>
</template>
<script setup>
import DynamicForm from '@/components/DynamicForm/index.vue';
import * as Yup from 'yup';
const formSchema = {
  fields: [
    {
      label: 'Your Name',
      name: 'name',
      as: 'input',
      rules: Yup.string().required(),
    },
    {
      label: 'Your Email',
      name: 'email',
      as: 'input',
      rules: Yup.string().email().required(),
    },
    {
      label: 'Your Password',
      name: 'password',
      as: 'input',
      type: 'password',
      rules: Yup.string().min(6).required(),
    },
  ],
};
</script>
<style></style>
