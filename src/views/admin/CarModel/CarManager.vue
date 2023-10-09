<template>
  <NavBar />
  <div class="bg-[rgb(224,224,224)] flex-grow px-[29px] py-[19px]">
    <div class="py-[14px] bg-[#FFFFFF] mb-5">
      <form>
        <div class="flex items-center">
          <div
            class="text-center text-base px-10 py-[10px]"
            style="border-right: 1px solid #707070"
          >
            車種マスタ検索<br />
            データ件数　15件
          </div>
          <div class="mr-2 px-[22px]" style="border-right: 1px dashed #707070">
            <p class="mb-1 text-[15px]">車名</p>
            <InputField
              placeholder="車名を入力"
              :className="inputStyle + '!w-[233px]'"
              type="text"
              name="name"
              :value="name"
              :handle-change="nameChange"
              :handle-blur="nameBlur"
              :errors="errors"
            />
            <div class="error-feedback text-sm mt-2 font-normal text-red-500">
              {{ errors.user_name }}
            </div>
          </div>
          <div class="mr-2 px-[22px] relative" style="border-right: 1px dashed #707070">
            <p class="mb-1 text-[15px]">排気量</p>
            <label class="mb-1 text absolute right-[30px] top-[30px]">cc</label>
            <InputField
              placeholder="排気量を入力"
              :className="inputStyle + ' pr-7'"
              type="text"
              name="capacity"
              :value="capacity"
              :handle-change="capacityChange"
              :handle-blur="capacityBlur"
              :errors="errors"
            />
            <div class="error-feedback text-sm mt-2 font-normal text-red-500">
              {{ errors.capacity }}
            </div>
          </div>
          <div class="mr-2 px-[22px]" style="border-right: 1px dashed #707070">
            <p class="mb-1 text-[15px]">型式</p>
            <InputField
              placeholder="型式を入力"
              :className="inputStyle"
              type="text"
              name="style"
              :value="style"
              :handle-change="styleChange"
              :handle-blur="styleBlur"
              :errors="errors"
            />
            <div class="error-feedback text-sm mt-2 font-normal text-red-500">
              {{ errors.style }}
            </div>
          </div>
          <div class="mr-2 px-[22px]" style="border-right: 1px dashed #707070">
            <p class="mb-1 text-[15px]">燃料</p>
            <SelectOption
              name="fueltype"
              :options="['type1', 'type2', 'type3']"
              :value="fueltype"
              :handle-change="fueltypeChange"
              :errors="errors"
            />
            <div class="error-feedback text-sm mt-2 font-normal text-red-500">
              {{ errors.user_name }}
            </div>
          </div>
          <div class="ml-8">
            <button
              @click="onSubmit"
              class="w-[87px] cursor-pointer bg-[#707070] py-[13px] rounded text-white mr-[5px] border-none"
            >
              検索
            </button>
            <button
              @click.prevent=""
              class="w-[87px] cursor-pointer bg-[#979595] py-[13px] rounded text-white border-none"
            >
              クリア
            </button>
          </div>
        </div>
      </form>
    </div>
    <div class="grid grid-cols-12 text-white text-base">
      <div class="col-span-5 py-[11px] bg-[#717171] text-center rounded-s">車名</div>
      <div class="col-span-1 py-[11px] bg-[#717171] text-center">排気量</div>
      <div class="col-span-3 py-[11px] bg-[#717171] text-center">型式</div>
      <div class="col-span-2 py-[11px] bg-[#717171] text-center rounded-e">燃料</div>
      <div class="col-span-1 py-[11px]"></div>
    </div>
    <div>
      <Form @submit="onSubmitForm" :initial-values="initialData">
        <FieldArray name="users" v-slot="{ fields, push, remove }">
          <div
            class="grid grid-cols-12 bg-white my-[11px] gap-2"
            v-for="(field, idx) in fields"
            :key="field.key"
          >
            <div class="col-span-4 flex p-[8px]" style="border-right: 1px solid gray">
              <div class="flex flex-col items-center gap-2">
                <button class="p-[6px] text-[#808080]">up</button>
                <button class="p-[6px] text-[#808080]">down</button>
              </div>
              <Field class="flex-grow h-6" :name="`users[${idx}].name`"  />
            </div>
            <div class="col-span-2">
              <Field class="flex-grow h-6" :name="`users[${idx}].name1`"/>
            </div>
            <div class="col-span-3">
              <Field class="flex-grow h-6" :name="`users[${idx}].name2`"/>
            </div>
            <div class="col-span-2">
              <Field class="flex-grow h-6" :name="`users[${idx}].name3`"/>
            </div>
            <div class="col-span-1">
              <button type="button" @click="push({ name: '', name1: '', name2: '', name3: '' })">
                Add User +
              </button>
              <button type="button" @click="remove(idx)">X</button>
            </div>
          </div>
        </FieldArray>
        <button type="submit">Submit</button>
      </Form>
    </div>
  </div>
</template>
<script setup>
import NavBar from '@/components/NavBar/index.vue';
import InputField from '@/components/InputField/index.vue';
import SelectOption from '@/components/SelectOption/index.vue';
import { useForm, useField, FieldArray, Form,Field } from 'vee-validate';

const inputStyle =
  'py-[6px] px-[11px] text-[15px] font-normal rounded outline-none border w-[148px]';
const { errors, handleSubmit } = useForm();
const { value: name, handleChange: nameChange, handleBlur: nameBlur } = useField('name');
const {
  value: capacity,
  handleChange: capacityChange,
  handleBlur: capacityBlur,
} = useField('capacity');

const initialData = {
  users: [
    {
      name: '',
      name1: '',
      name2: '',
      name3: '',
    },
  ],
};

function onSubmitForm(values) {
  console.log(JSON.stringify(values, null, 2));
}

const { value: style, handleChange: styleChange, handleBlur: styleBlur } = useField('style');
const { value: fueltype, handleChange: fueltypeChange } = useField('fueltype');

const onSubmit = handleSubmit(async (values) => {
  console.log('🚀 ~ file: CarModelList.vue:86 ~ onSubmit ~ values:', values);
});
</script>
