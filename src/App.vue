<template>
  <v-app>
    <div class="main-body">
      <div class="mb-16">
        <h1 class="mb-4">Buttons</h1>
        <v-btn depressed class="text-none primary">Primary</v-btn><div class="mb-4"></div>
        <v-btn depressed class="text-none">Secondary</v-btn><div class="mb-4"></div>
        <v-btn text color="primary" class="text-none">Terinary</v-btn>
      </div>
      <div class="mb-16">
        <h1 class="mb-4">Content Cards</h1>
        <MainCard />
      </div>
      <div class="mb-16">
        <h1 class="mb-4">Dialogs</h1>
        <Dialog />
        <div class="mt-4">
          <Modal />
        </div>
      </div>
      <div class="mb-16">
        <h1 class="mb-4">Tables</h1>
        <Table />
      </div>
    </div>
  </v-app>
</template>

<script>
import Dialog from "./components/Dialog";
import MainCard from "./components/ContentCard";
import Modal from "./components/Modal.vue";
import Table from "./components/Table";

export default {
  name: "App",
  components: {
    Dialog,
    MainCard,
    Modal,
    Table,
  },
};
</script>

<style>
.main-body {
  padding: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 1140px;
}
</style>
