import { defineStore } from 'pinia'
import axios from 'axios'
import type { AgentForm } from '@/schemas/agent'

export interface Agent extends AgentForm {
  id: string
  createdAt: string
  updatedAt: string
}

const API = 'http://localhost:3000/agents'

export const useAgentStore = defineStore('agent', {
  state: () => ({
    agents: [] as Agent[],
    agent: null as Agent
  }),

  actions: {
    fetchAgents() {
      return axios.get(API).then(res => {
        this.agents = res.data
      })
    },

    fetchAgent(id: string | number) {
      return axios.get(`${API}/${id}`).then(res => {
        this.agent = res.data
      })
    },

    createOrUpdateAgent(payload: AgentForm & { id?: string }) {
      return axios.post(API, payload).then(() => this.fetchAgents())
    },

    deleteAgent(id: string) {
      return axios.delete(`${API}/${id}`).then(() => this.fetchAgents())
    },

    clearAgents() {
      this.agents = []
    },

    clearAgent() {
      this.agent = null
    },
  }
})
