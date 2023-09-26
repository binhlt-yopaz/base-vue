<template>
  <el-card class="w-[480px] m-auto">
    <Form @submit="onSubmit" :validation-schema="schema">
      <div class="flex flex-col mb-2">
        <label for="title">Title</label>
        <Field name="title" type="text" class="p-2 my-1" />
        <ErrorMessage name="title" class="text-red-500" />
      </div>
      <div class="flex flex-col">
        <label for="slug">Slug</label>
        <Field name="slug" type="text" class="p-2 my-1" />
        <ErrorMessage name="slug" class="text-red-500" />
      </div>
      <div class="flex flex-col mb-2">
        <label for="describe">Describe</label>
        <Field name="describe" type="text" class="p-2 my-1" />
        <ErrorMessage name="describe" class="text-red-500" />
      </div>
      <div class="flex flex-col">
        <label for="status">Status</label>
        <Field name="status" type="text" class="p-2 my-1" />
        <ErrorMessage name="status" class="text-red-500" />
      </div>
      <button class="mt-3 px-2 py-1 bg-blue-500 text-white cursor-pointer">Create</button>
    </Form>
  </el-card>
</template>

<script setup>
import router from '@/router';
import store from '@/store';
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
const schema = yup.object({
  title: yup.string().required(),
  slug: yup.string().required(),
  describe: yup.string().required(),
  status: yup.number().required(),
});
async function onSubmit(values) {
  await store.dispatch('categoryStore/createCategory', { data: values });
  router.push('/admin');
}
</script>
