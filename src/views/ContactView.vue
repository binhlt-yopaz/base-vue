<template>
  <main>
    <el-card class="max-w-[880px] m-auto p-0" body-class="!p-0">
      <div class="h-10 bg-gray-400 px-[90px] leading-10 font-bold">Title</div>
      <div class="px-5 mt-4">
        <Form @submit="onSubmit">
          <div class="grid grid-rows-10 gap-4">
            <div class="flex items-center">
              <div class="min-w-[200px]"></div>
              <InputRadio label="Tea" value="tea" name="drink" />
              <InputRadio label="Coffee" value="coffee" name="drink" />
              <ErrorMessage name="drink" />
            </div>
            <div class="flex items-center">
              <div class="min-w-[200px]">
                <span class="p-1 bg-red-500 text-white mr-2">required</span>
                <label for="name">Name</label>
              </div>
              <InputField width="100%" type="text" name="name" inputClass="p-2 my-1" />
            </div>
            <div class="flex items-center">
              <div class="min-w-[200px]">
                <span class="p-1 bg-red-500 text-white mr-2">required</span>
                <label for="address">Address</label>
              </div>
              <InputField width="100%" type="text" name="Address" inputClass="p-2 my-1" />
            </div>
            <div class="flex items-center">
              <div class="min-w-[200px]">
                <span class="p-1 bg-red-500 text-white mr-2">required</span>
                <label for="company">Company</label>
              </div>
              <div class="w-full">
                <div class="flex items-center">
                  <label for="company1">T</label>
                  <InputField
                    width="200px"
                    type="text"
                    name="company1"
                    inputClass="p-2 my-1 ml-4"
                  />
                </div>
                <!-- <Field name="field" as="select">
                  <option value="">Select value</option>
                  <option value="..">...</option>
                </Field> -->
                <!-- <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
                  <input v-model="email" type="text">
                  <span>{{ errors[0] }}</span>
                </ValidationProvider> -->
                <InputField width="100%" type="text" name="company2" inputClass="p-2 my-1" />
              </div>
            </div>
          </div>
          <button class="mt-3 px-2 py-1 bg-blue-500 text-white">submit</button>
        </Form>
      </div>
    </el-card>
  </main>
</template>

<script setup>
import { Form, ErrorMessage } from 'vee-validate';
import InputField from '@/components/InputField/index.vue';
import InputRadio from '@/components/InputRadio/index.vue';
function onSubmit(values) {
  console.log('🚀 ~ file: ContactView.vue:16 ~ onSubmit ~ values:', values);
}
</script>
