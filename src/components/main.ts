import type { App } from "vue";
import { UIButton, UIInputField } from "@/components";

export default {
  install: (app: App) => {
    app.component("UIButton", UIButton);
    app.component("UIInputField", UIInputField);
  },
};

export { UIButton, UIInputField };
