<template>
  <el-card class="w-[480px] m-auto">
    <Form @submit="onSubmit" :validation-schema="schema">
      <div class="flex flex-col mb-2">
        <label for="title">Title</label>
        <InputField type="text" name="title" inputClass="p-2 my-1" />
      </div>
      <div class="flex flex-col">
        <label for="slug">Slug</label>
        <InputField type="text" name="slug" inputClass="p-2 my-1" />
      </div>
      <div class="flex flex-col mb-2">
        <label for="describe">Describe</label>
        <InputField type="text" name="describe" inputClass="p-2 my-1" />
      </div>
      <div class="flex flex-col">
        <label for="status">Status</label>
        <InputField type="text" name="status" inputClass="p-2 my-1" />
      </div>
      <button class="mt-3 px-2 py-1 bg-blue-500 text-white cursor-pointer">Create</button>
    </Form>
  </el-card>
</template>

<script setup>
import router from '@/router';
import store from '@/store';
import { Form } from 'vee-validate';
import InputField from '@/components/InputField/index.vue';
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
