<template>
  <v-app>
    <div class="main-body">
      <div class="mb-16">
        <h1 class="mb-1 d-inline">General Guidelines:</h1>
        <ul>
          <li>
            Anything that goes in a card such as a table or input fields for
            modals, make sure the padding all is 24px on all sides.
          </li>

          <li>Buttons</li>
          <ul>
            <li>
              Make all buttons depressed (they should not have any shadow)
            </li>
            <li>
              Buttons next to eachother should have a 12px gap, do this by ms-3
              on last button.
            </li>
          </ul>
        </ul>
      </div>
      <div class="mb-16">
        <h1 class="mb-1 d-inline">Buttons</h1>
        <a
          href="https://github.com/breakthrough001/portal-components/blob/main/src/components/Buttons.vue"
          target="_blank"
          class="ms-4"
          >View code</a
        >
        <p>
          Always make sure buttons have a 12px margin between the two seperating
          them.
        </p>
        <Buttons />
      </div>
      <div class="mb-16">
        <div class="mb-4">
          <h1 class="mb-4 d-inline">Content Cards</h1>
          <a
            href="https://github.com/breakthrough001/portal-components/blob/main/src/components/ContentCard.vue"
            target="_blank"
            class="ms-4"
            >View code</a
          >
        </div>
        <MainCard />
      </div>
      <div class="mb-16">
        <div>
          <h1 class="mb-1 d-inline">Dialogs</h1>
          <a
            href="https://github.com/breakthrough001/portal-components/blob/main/src/components/Dialog.vue"
            target="_blank"
            class="ms-4"
            >View code</a
          >
        </div>
        <p>
          Click the "OPEN DIALOG" button to view a sample modal with input
          fields.
        </p>
        <Dialog />
        <p class="mt-10">
          Click the "OPEN DELETE DIALOG" button to view a sample modal with
          text.
        </p>
        <DialogDelete />
      </div>
      <div class="mb-16">
        <div class="mb-4">
          <h1 class="mb-4 d-inline">Tables</h1>
          <a
            href="https://github.com/breakthrough001/portal-components/blob/main/src/components/Table.vue"
            target="_blank"
            class="ms-4"
            >View code</a
          >
        </div>
        <Table />
      </div>
      <div class="mb-16">
        <div class="mb-4">
          <h1 class="mb-4 inline">Advanced Tables</h1>
          <a
            href="https://github.com/breakthrough001/portal-components/blob/main/src/components/TableAdvanced.vue"
            target="_blank"
            class="ms-4"
            >View code</a
          >
        </div>
        <TableAdvanced />
      </div>
    </div>
  </v-app>
</template>

<script>
import Buttons from "./components/Buttons.vue";
import Dialog from "./components/Dialog";
import DialogDelete from "./components/DialogDelete.vue";
import MainCard from "./components/ContentCard";
import Table from "./components/Table";
import TableAdvanced from "./components/TableAdvanced";

export default {
  name: "App",
  components: {
    Buttons,
    Dialog,
    DialogDelete,
    MainCard,
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

p,
li {
  color: #7f7f7f;
}
</style>
