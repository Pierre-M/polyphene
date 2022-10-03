<template>
  <table>
    <thead>
      <tr class="font-bold">
        <td class="p-2">Cake</td>
        <td class="p-2">Description</td>
        <td class="p-2">Preview</td>
      </tr>
    </thead>

    <tbody>
      <tr v-for="cake in list" :key="cake.id">
        <td class="p-2">{{ cake.title }}</td>
        <td class="p-2">{{ cake.description }}</td>
        <td class="p-2">
          <img :alt="cake.title" class="w-20" :src="cake.image" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import { Cake } from "../cake.model";

defineProps<{
  list: Cake[];
}>();
</script>
