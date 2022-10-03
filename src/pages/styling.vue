<template>
  <div class="grid grid-cols-12 grid-rows-3 w-full h-full bg-primary gap-[1px]">
    <p class="col-start-1 col-span-3" :class="johnCellClasses">John</p>
    <p class="col-start-4 col-span-6" :class="doeCellClasses">Doe</p>
    <p class="col-start-10 col-span-3" :class="johnCellClasses">John</p>
    <p
      class="row-start-2 row-span-2 col-start-1 col-span-8"
      :class="doeCellClasses"
    >
      Doe
    </p>
    <p class="row-start-2 col-start-9 col-span-4" :class="doeCellClasses">
      Doe
    </p>
    <p class="col-start-9 col-span-4" :class="johnCellClasses">John</p>
  </div>
</template>

<script lang="ts" setup>
const johnCellClasses =
  "flex justify-center items-center bg-primary text-secondary hover:justify-start hover:items-start hover:bg-secondary/50";
const doeCellClasses =
  "flex items-end justify-end bg-secondary text-primary hover:justify-center hover:items-center hover:bg-secondary/50";
</script>
