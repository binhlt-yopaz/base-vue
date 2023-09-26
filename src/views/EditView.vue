<template>
  <el-card class="w-[480px] m-auto">
    <Form @submit="onSubmit" :validation-schema="schema" :initial-values="formValues">
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
      <button class="mt-3 px-2 py-1 bg-blue-500 text-white">Update</button>
    </Form>
  </el-card>
</template>

<script setup>
import CategoryApi from '@/api/CategoryApi';
import router from '@/router';
import { useRoute } from 'vue-router';
import store from '@/store';
import { Form, Field, ErrorMessage } from 'vee-validate';
import { onMounted, ref } from 'vue';
import * as yup from 'yup';
const schema = yup.object({
  title: yup.string().required(),
  slug: yup.string().required(),
  describe: yup.string().required(),
  status: yup.number().required(),
});

// Initial values
const formValues = ref({});
const route = useRoute();
const id = route.params.id;
onMounted(async () => {
  try {
    const response = await CategoryApi.getItem({ id });
    formValues.value = response.data;
  } catch (error) {
    console.log(error);
  }
});
async function onSubmit(values) {
  await store.dispatch('categoryStore/updateCategory', { id, data: values });
  router.push('/admin');
}
</script>
