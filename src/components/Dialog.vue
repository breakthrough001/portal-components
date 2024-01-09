<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" depressed v-bind="attrs" v-on="on">
          Open Dialog
        </v-btn>
      </template>
      <v-card class="pa-2">
        <v-card-title class="px-4">
          <span class="text-h5">Dialog Title</span>
        </v-card-title>
        <v-card-text class="px-4">
          <v-container>
            <v-row>
              <v-col cols="12" class="mb-0 pa-0">
                <v-text-field label="Full Name*" required></v-text-field>
              </v-col>
              <v-col cols="12" class="mb-0 pa-0">
                <v-text-field label="Email*" required></v-text-field>
              </v-col>
              <v-col cols="12" class="mb-0 pa-0">
                <v-text-field
                  label="Password*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions class="px-2">
          <v-spacer></v-spacer>
          <v-btn depressed class="text-none" @click="dialog = false">
            Close
          </v-btn>
          <v-btn
            depressed
            class="primary ms-3 text-none"
            @click="dialog = false"
          >
            Save
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
  }),
};
</script>
