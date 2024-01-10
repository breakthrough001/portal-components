<template>
  <v-app>
    <div class="main-body">
      <div class="mb-16 guide">
        <h1 class="mb-1 d-inline">General Guidelines:</h1>
        <ul style="max-width: 700px">
          <li class="font-weight-bold mt-3">Buttons</li>
          <ul>
            <li>
              Make all buttons depressed (they should be flat and not have any
              shadow).
            </li>
            <li>
              Buttons next to eachother should have a 12px gap, do this by ms-3
              on last button.
            </li>
            <li>
              Modal buttons — use the Secondary one below, this neutral gray
              won't clash when we have different color buttons in scenarios such
              as a red button for a deleting action, or an orange button for a
              caution action.
            </li>
          </ul>
          <li class="font-weight-bold mt-3">Cards</li>
          <ul>
            <li>
              Anything that goes in a card such as a table or a modal with
              text/input fields make sure the padding all is 24px on all sides.
              (pa-6)
            </li>
          </ul>
          <li class="font-weight-bold mt-3">Modals</li>
          <ul>
            <li>Modal width is 500px.</li>
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
          <h1 class="mb-4 d-inline">Card - Content</h1>
          <a
            href="https://github.com/breakthrough001/portal-components/blob/main/src/components/CardTabss.vue"
            target="_blank"
            class="ms-4"
            >View code</a
          >
        </div>
        <CardContent />
      </div>
      <div class="mb-16">
        <div class="mb-4">
          <h1 class="mb-4 d-inline">Card - Tabs</h1>
          <a
            href="https://github.com/breakthrough001/portal-components/blob/main/src/components/CardContent.vue"
            target="_blank"
            class="ms-4"
            >View code</a
          >
        </div>
        <CardTabs />
      </div>
      <div class="mb-16">
        <div>
          <h1 class="mb-1 d-inline">Dialog With Form</h1>
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
      </div>
      <div class="mb-16">
        <div>
          <h1 class="mb-1 d-inline">Dialog With Text</h1>
          <a
            href="https://github.com/breakthrough001/portal-components/blob/main/src/components/DialogDelete.vue"
            target="_blank"
            class="ms-4"
            >View code</a
          >
        </div>
        <p>
          Click the "OPEN DELETE DIALOG" button to view a sample modal with
          text.
        </p>
        <DialogDelete />
      </div>

      <div class="mb-16">
        <div>
          <h1 class="mb-4 d-inline">Tables - Advanced</h1>
          <a
            href="https://github.com/breakthrough001/portal-components/blob/main/src/components/TableAdvanced.vue"
            target="_blank"
            class="ms-4"
            >View code</a
          >
        </div>
        <p class="mb-4">Sample table nested inside of a card.</p>
        <TableAdvanced />
      </div>
      <div class="mb-16">
        <div>
          <h1 class="mb-4 d-inline">Tables - Simple</h1>
          <a
            href="https://github.com/breakthrough001/portal-components/blob/main/src/components/Table.vue"
            target="_blank"
            class="ms-4"
            >View code</a
          >
        </div>
        <p class="mb-4">Sample table nested inside of a card.</p>
        <Table />
      </div>
    </div>
  </v-app>
</template>

<script>
import Buttons from "./components/Buttons.vue";
import Dialog from "./components/Dialog";
import DialogDelete from "./components/DialogDelete.vue";
import CardContent from "./components/CardContent";
import CardTabs from "./components/CardTabs.vue";
import Table from "./components/Table";
import TableAdvanced from "./components/TableAdvanced";

export default {
  name: "App",
  components: {
    Buttons,
    CardTabs,
    Dialog,
    DialogDelete,
    CardContent,
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

.v-application a {
  transition: 300ms ease;
}

.v-application a:hover {
  opacity: 0.64;
}

.guide {
  line-height: 2;
}
</style>
