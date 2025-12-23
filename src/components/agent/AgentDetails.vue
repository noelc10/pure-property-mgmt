<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useAgentStore } from '@/stores/agent'

const route = useRoute()
const store = useAgentStore()

const agent = computed(() => store?.agent)
const hasAgent = computed(() => !!store?.agent)
const createAtFormatted = computed(() => {
  if (!store.agent) return ''
  return new Date(store.agent.createdAt).toLocaleString()
})
const updatedAtFormatted = computed(() => {
  if (!store.agent) return ''
  return new Date(store.agent.updatedAt).toLocaleString()
})

onMounted(async () => {
  const agentId = route.params.id as string
  await store.fetchAgent(agentId)
})
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-list v-if="hasAgent" lines="one">
          <v-list-item>
            <v-list-item-title class="text-body-2 text-disabled">First Name</v-list-item-title>
            <v-list-item-subtitle class="text-body-1 text-black">{{ agent.firstName }}</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title class="text-body-2 text-disabled">Last Name</v-list-item-title>
            <v-list-item-subtitle class="text-body-1 text-black">{{ agent.lastName }}</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title class="text-body-2 text-disabled">Email</v-list-item-title>
            <v-list-item-subtitle class="text-body-1 text-black">{{ agent.email }}</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title class="text-body-2 text-disabled">Mobile</v-list-item-title>
            <v-list-item-subtitle class="text-body-1 text-black">{{ agent.mobileNumber }}</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title class="text-body-2 text-disabled">Date Created</v-list-item-title>
            <v-list-item-subtitle class="text-body-1 text-black">{{ createAtFormatted }}</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title class="text-body-2 text-disabled">Date Updated</v-list-item-title>
            <v-list-item-subtitle class="text-body-1 text-black">{{ updatedAtFormatted }}</v-list-item-subtitle>
          </v-list-item>
        </v-list>
        <div v-else>
          <v-alert type="info" class="ma-4">
            No agent found.
          </v-alert>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
