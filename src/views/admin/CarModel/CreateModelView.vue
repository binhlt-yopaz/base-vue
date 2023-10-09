<template>
  <NavBar />
  <div class="bg-[rgb(224,224,224)] flex-grow px-[29px] py-[19px]">
    <div class="max-w-[744px] m-auto">
      <form>
        <el-card class="bg-white" body-class="!p-0">
          <div class="h-16 bg-[#717171]"></div>
          <div>
            <div class="flex items-center pl-8 pr-24 py-6" style="border-bottom: 1px dashed grey ;">
              <div class="min-w-[170px]">
                <label class="text-base">メーカー名</label>
              </div>
              <div class="flex flex-col w-full">
                <InputField
                placeholder="メーカー名を入力"
                :className="inputStyle"
                type="text"
                name="name"
                :value="name"
                :handle-change="nameChange"
                :handle-blur="nameBlur"
                :errors="errors"
              />
                <span class="text-red-500 mt-1" v-if="errors['name']">{{ errors['name'] }}</span>
              </div>
            </div>
            <div class="flex items-center px-8 py-6" style="border-bottom: 1px dashed grey ;">
              <div class="min-w-[170px]">
                <label class="text-base">ロゴ画像</label>
              </div>
              <div class="w-full">
                <div class="mt-2 flex items-center" v-show="imagePreviewUrl">
                  <img
                    :src="imagePreviewUrl"
                    alt="Image Preview"
                    style="max-width: 90px; max-height: 73px"
                  />
                  <Button color="#E2E2E2" customClass="w-[107px] ml-5" @onClick="handleRemoveImage">✕ロゴ削除</Button>
                </div>
                <div class="flex items-center mt-[17px]">
                  <label for="inputImage" class="text-[15px] px-[15px] py-2 bg-[#E2E2E2] mr-[14px] rounded cursor-pointer">選択…</label>
                  <p class="text-[15px]">{{ nameImage }}</p>
                </div>
                <input
                  id="inputImage"
                  ref="file"
                  type="file"
                  @input="imageChange"
                  class="hidden"
                  name="image"
                  style="width: 100%"
                  accept="image/*"
                  v-on:change="handleImageChange"
                />
                <span class="text-red-500 mt-1" v-if="errors['image']">{{ errors['image'] }}</span>
              </div>
            </div>
            <div class="flex items-center px-8 py-6">
              <div class="min-w-[170px]">
                <label class="text-base">輸入車区分</label>
              </div>
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
          </div>
        </el-card>
        <div class="flex justify-between mt-11">
          <Button color="#BFBFBF" customClass="w-[150px]" @onClick="()=>router.push({name:'CarModel'})">戻る</Button>
          <Button color="#707070" customClass="w-[260px]" @onClick="onSubmit">更新</Button>
          <Button color="#A73F3F" customClass="w-[150px]">削除</Button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import NavBar from '@/components/NavBar/index.vue';
import InputField from '@/components/InputField/index.vue';
import InputRadio from '@/components/InputRadio/index.vue';
import Button from '@/components/Button/index.vue';
import { useForm, useField } from 'vee-validate';
import { ref } from 'vue';
import router from '@/router';
import * as Yup from 'yup';

const inputStyle = 'py-[6px] px-[11px] text-[15px] font-normal rounded outline-none flex-grow border';

const schema = Yup.object().shape({
  name: Yup.string().required(),
  image: Yup.string().required(),
  import_car_type: Yup.string().required(),
});
const { errors, handleSubmit } = useForm({
  validationSchema: schema,
});

const { value: name, handleChange: nameChange, handleBlur: nameBlur } = useField('name');
const { handleChange: imageChange, resetField: resetFieldFile } = useField('image');
const { value: car_type, handleChange: carTypeChange } = useField('import_car_type');

const file = ref();
const nameImage = ref('ファイルが選択されていません。');
const imagePreviewUrl = ref();

// Function to handle file input change
const handleImageChange = (event) => {
  file.value = event.target.files[0];
  if (file.value) {
    nameImage.value = file.value.name;
    const reader = new FileReader();
    reader.onload = (e) => {
      imagePreviewUrl.value = e.target.result;
    };
    reader.readAsDataURL(file.value);
  } else {
    imagePreviewUrl.value = '';
    nameImage.value = 'ファイルが選択されていません。';
  }
};

const handleRemoveImage = () => {
  // Xóa giá trị của file và imagePreviewUrl
  file.value.value = null;
  resetFieldFile();
  imagePreviewUrl.value = '';
  nameImage.value = 'ファイルが選択されていません。';
};

const onSubmit = handleSubmit(async (values) => {
  console.log('🚀 ~ file: CarModelList.vue:86 ~ onSubmit ~ values:', values);
});
</script>
