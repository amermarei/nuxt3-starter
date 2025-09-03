<template>
  <div class="min-h-screen flex flex-col gap-4 items-center justify-center bg-blue-600">
    <h1 class="text-5xl font-bold text-white underline">Tailwind is working</h1>
    <p class="text-4xl font-bold text-white">{{ t("hello") }}</p>
  </div>
</template>
<script setup lang="ts">
  const { t } = useI18n();
</script>
