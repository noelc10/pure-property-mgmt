<script setup lang="ts">
import { onMounted } from 'vue'
import { useAgentStore } from '@/stores/agent'
import PropAgentList from '@/components/agent/AgentList.vue'
import PropAgentForm from '@/components/agent/AgentForm.vue'

const store = useAgentStore()

onMounted(async () => await store.fetchAgents())
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <PropAgentForm />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <PropAgentList />
      </v-col>
    </v-row>
  </v-container>
</template>
