<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" depressed v-bind="attrs" v-on="on">
          Open Delete Dialog
        </v-btn>
      </template>
      <v-card class="pa-6">
        <v-card-title class="pa-0 mb-2">
          <span class="text-h5">Dialog Title</span>
        </v-card-title>
        <p>Are you sure you want to delete this endpoint?</p>
        <v-card-actions class="pa-0 mt-4">
          <v-spacer></v-spacer>
          <v-btn depressed class="text-none" @click="dialog = false">
            Close
          </v-btn>
          <v-btn depressed class="error ms-3 text-none" @click="dialog = false">
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>
