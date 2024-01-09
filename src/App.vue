<template>
  <v-app>
    <div class="main-body">
      <div class="mb-16">
        <h1 class="mb-1">Buttons</h1>
        <p>
          Always make sure buttons have a 12px margin between the two seperating
          them.
        </p>
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
      <div class="mb-16">
        <h1 class="mb-4">Content Cards</h1>
        <MainCard />
      </div>
      <div class="mb-16">
        <h1 class="mb-4">Dialogs</h1>
        <p>
          Click the "OPEN DIALOG" button to view a sample modal with input
          fields.
        </p>
        <Dialog />
        <div class="mt-4">
          <Modal />
        </div>
      </div>
      <div class="mb-16">
        <h1 class="mb-4">Tables</h1>
        <Table />
      </div>
      <div class="mb-16">
        <h1 class="mb-4">Advanced Tables</h1>
        <TableAdvanced />
      </div>
    </div>
  </v-app>
</template>

<script>
import Dialog from './components/Dialog';
import MainCard from './components/ContentCard';
import Modal from './components/Modal';
import Table from './components/Table';
import TableAdvanced from './components/TableAdvanced';

export default {
  name: 'App',
  components: {
    Dialog,
    MainCard,
    Modal,
    Table,
    TableAdvanced,
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
