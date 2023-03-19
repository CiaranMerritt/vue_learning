<script lang="ts" setup>
import DateDisplay from "./DateDisplay.vue";
import UseEmojis from "@/composables/UseEmojis";
import type { Entry } from "@/types/Entry";
import { computed } from "vue";
import type Emoji from "@/types/Emjoi";
const props = defineProps<{
  entry: Entry;
  userName: string;
}>();

const entryEmoji = computed<Emoji | string>(() => {
  return props.entry.emoji != null ? props.entry.emoji : "happy";
});

const { findEmoji } = UseEmojis();
</script>
<template>
  <div class="entry-card">
    <div class="entry-card-body">
      <component width="75" :is="findEmoji(entryEmoji)"></component>
      <div class="entry-text">{{ entry.body }}</div>
    </div>
    <div class="entry-footer">
      <DateDisplay :date="entry.createdAt" class="mr-2" />
      |
      <span class="ml-2">{{ userName }}</span>
    </div>
  </div>
</template>
