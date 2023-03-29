<template>
  <div class="input-field">
    <label :for="id">{{ label }}</label>
    <input :id="id" :type="type" :value="value" v-model="inputValue" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const { id, label, type, value, modelValue } = withDefaults(
  defineProps<{
    id: string;
    label?: string;
    type?: string;
    value?: string;
    modelValue?: string;
  }>(),
  {
    type: "text",
  }
);

const emit = defineEmits(["update:modelValue"]);

const inputValue = computed({
  get() {
    return modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<style scoped lang="scss">
.input-field {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1rem;
  label {
    font-size: 0.8rem;
    margin-bottom: 0.25rem;
  }
  input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
}
</style>
