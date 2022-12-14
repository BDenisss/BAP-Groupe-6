<script setup>
defineProps(['text'])
</script>

<template>

  <button class=" text-[#FFFFFF] font-normal py-[11px] px-[52px] rounded-full text-2xl max-sm:py-[8px] max-sm:px-[32px] max-sm:text-[20px] btn-5" id="btn">{{text}}</button>

</template>

<style scoped>

.btn-5 {
  border: 1px solid;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  outline: 1px solid;
  outline-color: rgba(255, 255, 255, .5);
  outline-offset: 0px;
  text-shadow: none;
  transition: border 1250ms cubic-bezier(0.19, 1, 0.22, 1),
  box-shadow 1250ms cubic-bezier(0.19, 1, 0.22, 1),
  border 1250ms cubic-bezier(0.19, 1, 0.22, 1),
  outline-color 1250ms cubic-bezier(0.19, 1, 0.22, 1),
  outline-offset 1250ms cubic-bezier(0.19, 1, 0.22, 1),
  text-shadow 1250ms cubic-bezier(0.19, 1, 0.22, 1);
}

.btn-5:hover {
  border: 1px solid;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, .5), 0 0 20px rgba(255, 255, 255, .2);
  outline-color: rgba(255, 255, 255, 0);
  outline-offset: 15px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.35);

}


</style>