<script setup>
defineProps(['text'])
</script>

<template>

  <div class="anim p-[6px] items-center bg-[#FFFFFF]/[.08] rounded-full drop-shadow-md">
      <button class="bg-[#FFFFFF] text-[#4B5D4C] font-normal py-[11px] px-[52px] rounded-full text-2xl max-sm:py-[8px] max-sm:px-[32px] max-sm:text-[20px]" id="btn">{{text}}</button>
  </div>
</template>

<style scoped>



</style>