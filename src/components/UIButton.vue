<template>
  <button @click="onClick">
    <slot />
  </button>
</template>

<script setup lang="ts">
const { type, onClick } = withDefaults(
  defineProps<{
    type?: "primary" | "secondary";
    onClick?: (event: Event) => void;
  }>(),
  {
    type: "primary",
  }
);
</script>
