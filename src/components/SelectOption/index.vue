<template>
  <div  class="custom-select">
    <label class="svg"><span class="sr-only"></span>
    <select :id="name" v-model="selectedValue" @change="handleChange" class="py-[6px] px-[11px] width-[148px] text-[15px] font-normal outline-none cursor-pointer rounded">
      <option class="p-2" value="" disabled>Select a car brand</option>
      <option class="p-2" v-for="option in options" :value="option" :key="option.value">{{ option }}</option>
    </select>
    </label>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
  name: String,
  options: Array,
  value: String,
  handleChange: Function,
  errors: Object,
});

const selectedValue = ref(props.value);
</script>

<style scoped>
  .custom-select {
	--focused-border-color: #fff;
}

label {
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
label::after {
	content: '\25BE';
	background-color: var(--focused-border-color);
  z-index: 0;
	color: #000;
	width: 2rem;
	position: absolute;
	top: 1px;
	bottom: 1px;
	right: 4px;
	display: flex;
	justify-content: center;
	align-items: center;
	pointer-events: none;
}

label.svg::after {
	content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='20' viewBox='0 0 10 20'%3E%3Cg fill='black'%3E%3Cpolygon id='up' points='0,7 5,2 10,7 '/%3E%3Cpolygon id='down' points='0,13 10,13 5,18 '/%3E%3C/g%3E%3C/svg%3E%0A");
	line-height: 0;
}
</style>
