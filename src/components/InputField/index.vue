<template>
    <input
      style="border-bottom: 1px solid #707070"
      :class="className"
      :name="name"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      @input="handleChange"
      @blur="handleBlur"
    />
</template>

<script setup>
defineProps({
  name: String,
  type: String,
  value: String,
  placeholder: {
    type: String,
    required: false,
  },
  handleChange: Function,
  handleBlur: Function,
  className: String,
});
</script>
