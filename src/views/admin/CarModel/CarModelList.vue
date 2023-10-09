<template>
  <NavBar />
  <div class="bg-[#E0E0E0] flex-grow px-[29px] py-[19px]">
    <div class="py-[14px] bg-[#FFFFFF] mb-5">
      <form>
        <div class="flex items-center">
          <div
            class="text-center text-base px-10 py-[10px]"
            style="border-right: 1px solid #707070"
          >
            メーカー検索<br />
            データ件数30件
          </div>
          <div class="mr-2 px-[22px]" style="border-right: 1px dashed #707070">
            <p class="mb-1 text-[15px]">メーカー名</p>
            <InputField
              placeholder="メーカー名"
              :className="inputStyle"
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
          <div class="mr-2 pl-[22px] mb-2 py-[9px]" style="border-right: 1px dashed #707070">
            <p class="mb-1 text-[15px]">輸入車区分</p>
            <InputRadio
              name="import_car_type"
              :options="[
                { key: '国産車', value: 0 },
                { key: '輸入車', value: 1 },
              ]"
              :value="car_type"
              :handle-change="carTypeChange"
              :errors="errors"
            />
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
    <div>
      <div class="w-full mb-2 flex justify-end">
        <button
          @click="router.push({ name: 'createModel' })"
          class="px-[17px] py-[9px] border-2 border-[#E0E0E0] rounded outline-none flex items-center cursor-pointer"
        >
          <el-icon class="mr-[18px]"><Plus /></el-icon>
          メーカー追加
        </button>
      </div>
      <div class="grid grid-cols-6 gap-[30px] gap-y-4">
        <div class="col-span-1 relative">
          <div class="flex flex-col justify-center items-center bg-white">
            <img class="w-40 h-40 m-auto" src="@/assets/icons/logo_tacwork.svg" alt="model" />
            <p class="text-center text-[15px] font-normal mb-3">レクサス</p>
          </div>
          <button
            @click="() => router.push({ name: 'carManager' })"
            class="py-2 w-full bg-[#AF1A1A] text-center border-none cursor-pointer text-white"
          >
            車種マスタ管理
          </button>
          <label class="py-[3px] px-[6px] text-xs text-white bg-black absolute top-0 left-0"
            >No. 1</label
          >
        </div>
        <div class="col-span-1 relative">
          <div class="flex flex-col justify-center items-center bg-white">
            <img class="w-40 h-40 m-auto" src="@/assets/icons/logo_tacwork.svg" alt="model" />
            <p class="text-center text-[15px] font-normal mb-3">レクサス</p>
          </div>
          <button
            class="py-2 w-full bg-[#AF1A1A] text-center border-none cursor-pointer text-white"
          >
            車種マスタ管理
          </button>
          <label class="py-[3px] px-[6px] text-xs text-white bg-black absolute top-0 left-0"
            >No. 1</label
          >
        </div>
        <div class="col-span-1 relative">
          <div class="flex flex-col justify-center items-center bg-white">
            <img class="w-40 h-40 m-auto" src="@/assets/icons/logo_tacwork.svg" alt="model" />
            <p class="text-center text-[15px] font-normal mb-3">レクサス</p>
          </div>
          <button
            class="py-2 w-full bg-[#AF1A1A] text-center border-none cursor-pointer text-white"
          >
            車種マスタ管理
          </button>
          <label class="py-[3px] px-[6px] text-xs text-white bg-black absolute top-0 left-0"
            >No. 1</label
          >
        </div>
        <div class="col-span-1 relative">
          <div class="flex flex-col justify-center items-center bg-white">
            <img class="w-40 h-40 m-auto" src="@/assets/icons/logo_tacwork.svg" alt="model" />
            <p class="text-center text-[15px] font-normal mb-3">レクサス</p>
          </div>
          <button
            class="py-2 w-full bg-[#AF1A1A] text-center border-none cursor-pointer text-white"
          >
            車種マスタ管理
          </button>
          <label class="py-[3px] px-[6px] text-xs text-white bg-black absolute top-0 left-0"
            >No. 1</label
          >
        </div>
        <div class="col-span-1 relative">
          <div class="flex flex-col justify-center items-center bg-white">
            <img class="w-40 h-40 m-auto" src="@/assets/icons/logo_tacwork.svg" alt="model" />
            <p class="text-center text-[15px] font-normal mb-3">レクサス</p>
          </div>
          <button
            class="py-2 w-full bg-[#AF1A1A] text-center border-none cursor-pointer text-white"
          >
            車種マスタ管理
          </button>
          <label class="py-[3px] px-[6px] text-xs text-white bg-black absolute top-0 left-0"
            >No. 1</label
          >
        </div>
        <div class="col-span-1 relative">
          <div class="flex flex-col justify-center items-center bg-white">
            <img class="w-40 h-40 m-auto" src="@/assets/icons/logo_tacwork.svg" alt="model" />
            <p class="text-center text-[15px] font-normal mb-3">レクサス</p>
          </div>
          <button
            class="py-2 w-full bg-[#AF1A1A] text-center border-none cursor-pointer text-white"
          >
            車種マスタ管理
          </button>
          <label class="py-[3px] px-[6px] text-xs text-white bg-black absolute top-0 left-0"
            >No. 1</label
          >
        </div>
        <div class="col-span-1 relative">
          <div class="flex flex-col justify-center items-center bg-white">
            <img class="w-40 h-40 m-auto" src="@/assets/icons/logo_tacwork.svg" alt="model" />
            <p class="text-center text-[15px] font-normal mb-3">レクサス</p>
          </div>
          <button
            class="py-2 w-full bg-[#AF1A1A] text-center border-none cursor-pointer text-white"
          >
            車種マスタ管理
          </button>
          <label class="py-[3px] px-[6px] text-xs text-white bg-black absolute top-0 left-0"
            >No. 1</label
          >
        </div>
        <div class="col-span-1 relative">
          <div class="flex flex-col justify-center items-center bg-white">
            <img class="w-40 h-40 m-auto" src="@/assets/icons/logo_tacwork.svg" alt="model" />
            <p class="text-center text-[15px] font-normal mb-3">レクサス</p>
          </div>
          <button
            class="py-2 w-full bg-[#AF1A1A] text-center border-none cursor-pointer text-white"
          >
            車種マスタ管理
          </button>
          <label class="py-[3px] px-[6px] text-xs text-white bg-black absolute top-0 left-0"
            >No. 1</label
          >
        </div>
        <div class="col-span-1 relative">
          <div class="flex flex-col justify-center items-center bg-white">
            <img class="w-40 h-40 m-auto" src="@/assets/icons/logo_tacwork.svg" alt="model" />
            <p class="text-center text-[15px] font-normal mb-3">レクサス</p>
          </div>
          <button
            class="py-2 w-full bg-[#AF1A1A] text-center border-none cursor-pointer text-white"
          >
            車種マスタ管理
          </button>
          <label class="py-[3px] px-[6px] text-xs text-white bg-black absolute top-0 left-0"
            >No. 1</label
          >
        </div>
      </div>
      <div class="w-full flex justify-center mt-8">
        <Pagination :total="1000" />
      </div>
    </div>
  </div>
</template>
<script setup>
import NavBar from '@/components/NavBar/index.vue';
import InputField from '@/components/InputField/index.vue';
import InputRadio from '@/components/InputRadio/index.vue';
import Pagination from '@/components/Pagination/index.vue';
import { useForm, useField } from 'vee-validate';
import router from '@/router';

const inputStyle =
  'py-[6px] px-[11px] text-[15px] font-normal rounded outline-none border w-[193px]';
const { errors, handleSubmit } = useForm();
const { value: name, handleChange: nameChange, handleBlur: nameBlur } = useField('name');
const { value: car_type, handleChange: carTypeChange } = useField('import_car_type');

const onSubmit = handleSubmit(async (values) => {
  console.log('🚀 ~ file: CarModelList.vue:86 ~ onSubmit ~ values:', values);
});
</script>
