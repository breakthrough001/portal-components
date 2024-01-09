<template>
  <div>
    <div class="mb-10">
      <v-card elevation="2" style="width: 600px" class="pa-2"
        ><v-card-title class="mb-1">Modal Title</v-card-title
        ><v-card-subtitle
          >Are you sure you want to save these changes?</v-card-subtitle
        >
        <v-card-actions class="justify-end">
          <v-btn depressed class="text-none">Cancel</v-btn>
          <v-btn depressed class="text-none primary ms-3">Save</v-btn>
        </v-card-actions></v-card
      >
    </div>

    <div class="mb-10">
      <v-card elevation="2" style="width: 600px" class="pa-2"
        ><v-card-title class="mb-1">Modal Title</v-card-title
        ><v-card-subtitle
          >Are you sure you want to release isolation for this
          Endpoint?</v-card-subtitle
        >
        <v-card-actions class="justify-end">
          <v-btn depressed class="text-none">Cancel</v-btn>
          <v-btn depressed color="warning" class="text-none ms-3"
            >Release</v-btn
          >
        </v-card-actions></v-card
      >
    </div>
    <div class="mb-10">
      <v-card elevation="2" style="width: 500px" class="pa-2"
        ><v-card-title class="mb-1">Modal Title</v-card-title
        ><v-card-subtitle
          >Are you sure you want to delete this Endpoint?</v-card-subtitle
        >
        <v-card-actions class="justify-end px-3">
          <v-btn depressed class="text-none">Cancel</v-btn>
          <v-btn depressed color="error" class="text-none ms-3">Delete</v-btn>
        </v-card-actions></v-card
      >
    </div>
  </div>
</template>

<script>
export default { name: 'Modal' };
</script>

<style></style>
