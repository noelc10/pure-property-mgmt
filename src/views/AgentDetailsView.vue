<script setup lang="ts">
import AgentDetails from '@/components/agent/AgentDetails.vue'

</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col class="text-center">
        <v-btn variant="text" to="/agents" prepend-icon="mdi-arrow-left" color="primary" class="mb-4 text-capitalize">
          Back to Property Agents List
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <AgentDetails />
      </v-col>
    </v-row>
  </v-container>
</template>
