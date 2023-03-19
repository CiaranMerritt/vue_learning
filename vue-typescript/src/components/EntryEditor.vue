<script lang="ts" setup>
import EmojiField from "@/components/EmojiField.vue";
import ArrowCircleRight from "@/assets/icons/arrow-circle-right.svg?component";
import { computed, ref } from "vue";
import type Emjoi from "@/types/Emjoi";
import type { Entry } from "@/types/Entry";

//#region Variables
const body = ref<string>("");
const emoji = ref<Emjoi | null>(null);
const maxCharacters = ref<number>(280);

//#endregion

//#region Computed
const charCount = computed<number>(() => body.value.length);
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
const $emit = defineEmits<{
  (e: "-create", entry: Entry): void;
}>();

//#endregion

//#region Methods
const handleTextInput = (e: Event) => {
  const textArea = e.target as HTMLTextAreaElement;
  console.log(textArea.value);
};

function handleSubmit(): void {
  $emit("-create", {
    body: body.value,
    emoji: emoji.value,
    createdAt: new Date(),
    userId: 1,
    id: Math.random(),
  });
  body.value = "";
  emoji.value = null;
}

//#endregion
</script>
<template>
  <form class="entry-form" @submit.prevent="handleSubmit">
    <textarea
      v-model="body"
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
