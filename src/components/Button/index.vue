<template>
    <main>
        <el-button :color="color" tag="button" :class="'py-13px text-center text-base font-normal ' + customClass" style="width: width;"  @click="$emit('onClick')">
            <slot></slot>
        </el-button>
    </main>
</template>
<script setup>

defineProps({
  color: {
    type: String,
    required: false,
  },
  customClass: {
    type: String,
    required: false,
  },
});
</script>
