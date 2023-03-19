<script setup lang="ts">
import TheHeader from "@/components/TheHeader.vue";
import EntryEditor from "./components/EntryEditor.vue";
import EntryCard from "@/components/EntryCard.vue";
import { reactive, ref } from "vue";
import type { User } from "@/types/User";
import type { Entry } from "./types/Entry";

const user: User = reactive({
  id: 1,
  username: "John Doe",
  settings: [],
});

const entries = ref<Entry[]>([]);

const handleCreateEntry = (entry: Entry) => {
  entries.value.unshift(entry);
};

console.log(user);
</script>

<template>
  <main class="container m-auto p-10">
    <TheHeader />
    <EntryEditor @-create="handleCreateEntry" />
    <ul>
      <li v-for="entry in entries" :key="entry.id">
        <EntryCard :entry="entry" :user-name="user.username" />
      </li>
    </ul>
  </main>
</template>
