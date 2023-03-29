<template>
  <h1>Hello</h1>
  <InputField id="name" label="Name" v-model="inputVal" />
  <UIButton :onClick="onClick">Click {{ inputVal }}</UIButton>
</template>
<script setup lang="ts">
import InputField from "./components/UIInputField.vue";
import UIButton from "./components/UIButton.vue";
import { ref } from "vue";

const inputVal = ref("");

const onInput = (event: Event) => {
  console.log(event);
};

const onClick = (event: Event) => {};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
