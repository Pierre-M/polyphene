<template>
  <p v-if="isLoading">Loading...</p>

  <template v-else>
    <div class="p-4">
      <input v-model="query" class="mb-6" placeholder="Search cake by name" />
      <cake-table :list="filteredCakes" />
    </div>
  </template>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";

import CakeTable from "../business/cake/components/cake-table.vue";
import { useCakeList } from "../business/cake/composables/cake-list.hook";

const { isLoading, data } = useCakeList();

const query = ref("");
const filteredCakes = computed(() => {
  if (!query.value) return data.value ?? [];

  return (
    data.value?.filter((cake) =>
      cake.title.toLowerCase().includes(query.value.toLowerCase())
    ) ?? []
  );
});
</script>
