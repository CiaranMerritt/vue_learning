<script lang="ts" setup>
import EmojiField from "@/components/EmojiField.vue";
import ArrowCircleRight from "@/assets/icons/arrow-circle-right.svg";
import { computed, ref } from "vue";
import type Emjoi from "@/types/Emjoi";

//#region Variables
const text = ref<string>("");
const emoji = ref<Emjoi | null>(null);
const maxCharacters = ref<number>(280);

//#endregion

//#region Computed
const charCount = computed<number>(() => text.value.length);
//#endregion

//#region Emits
/*
defineEmits is a macro that when compiles changes to browser ready code of
<script>
export default {
  emits: ["create"]
}
<script>
*/
defineEmits(["create"]);

//#endregion

//#region Methods
const handleTextInput = (e: Event) => {
  const textArea = e.target as HTMLTextAreaElement;
  console.log(textArea.value);
};

//#endregion
</script>
<template>
  <form class="entry-form" @submit.prevent="$emit('create', { text, emoji })">
    <textarea
      v-model="text"
      :maxlength="maxCharacters"
      placeholder="New Journal Entry for danielkelly_io"
      @keyup="handleTextInput"
    ></textarea>
    <EmojiField v-model="emoji" />
    <div class="entry-form-footer">
      <span>{{ charCount }} / {{ maxCharacters }}</span>
      <button>Remember <ArrowCircleRight width="20" /></button>
    </div>
  </form>
</template>
