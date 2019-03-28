import Vue, { VNode } from "vue";

declare module "*.md" {
  const value: string;
  export default value;
}