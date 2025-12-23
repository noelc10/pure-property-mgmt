<script setup lang="ts">
import { AgentForm } from '@/schemas/agent'
import { useAgentStore } from '@/stores/agent'

const store = useAgentStore()
</script>

<template>
  <v-row>
    <v-col>
      <v-card class="mx-auto my-4 pa-4" max-width="600">
        <v-card-title>Property Agents List</v-card-title>

        <v-list v-if="store.agents.length > 0" lines="two">
          <v-list-item v-for="agent in store.agents" :key="(agent as AgentForm).id"
            :to="`/agents/${(agent as AgentForm).id}`">
            <v-list-item-title>{{ (agent as AgentForm).firstName }} {{ (agent as AgentForm).lastName
            }}</v-list-item-title>
            <v-list-item-subtitle>{{ (agent as AgentForm).email }} | {{ (agent as AgentForm).mobileNumber
            }}</v-list-item-subtitle>
            <template #append>
              <v-list-item-action end>
                <v-tooltip location="top" text="Delete Property Agent">
                  <template #activator="{ props }">
                    <v-btn variant="text" density="comfortable" icon="mdi-delete" color="error" v-bind="props"
                      @click="store.deleteAgent((agent as AgentForm).id)" />
                  </template>
                </v-tooltip>
              </v-list-item-action>
            </template>
          </v-list-item>
        </v-list>
        <v-list v-else>
          <v-list-item class="text-center">
            <v-list-item-title class="text-disabled">No property agents found.</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>
