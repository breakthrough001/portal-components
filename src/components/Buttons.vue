<template>
  <div>
    <v-btn depressed class="text-none primary">Primary</v-btn>
    <div class="mb-4"></div>
    <v-btn depressed class="text-none">Secondary</v-btn>
    <div class="mb-4"></div>
    <v-btn outlined color="primary" class="text-none">Outlined</v-btn>
    <div class="mb-4"></div>
    <v-btn text color="primary" class="text-none">Text Link</v-btn>
    <div class="mb-4"></div>
    <v-btn depressed color="warning" class="text-none">Warning</v-btn>
    <div class="mb-4"></div>
    <v-btn depressed color="error" class="text-none">Delete</v-btn>
  </div>
</template>

<script>
export default { name: 'Buttons' };
</script>
