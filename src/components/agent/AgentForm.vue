<script setup lang="ts">
import { computed } from 'vue'
import { useForm, useField } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { agentSchema, AgentForm } from '@/schemas/agent'
import { useAgentStore } from '@/stores/agent'

const store = useAgentStore()

const { handleSubmit, errors, meta, resetForm } = useForm({
  validationSchema: toTypedSchema(agentSchema)
})

const isFormValid = computed(() => meta.value.valid)

const { value: firstName } = useField<string>('firstName')
const { value: lastName } = useField<string>('lastName')
const { value: email } = useField<string>('email')
const { value: mobileNumber } = useField<string>('mobileNumber')

const submit = handleSubmit(async (values: AgentForm & { id?: string }) => {
  return await store.createOrUpdateAgent(values).then(() => {
    resetForm({
      values: {
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: ''
      }
    })
  })
})
</script>

<template>
  <v-card class="mx-auto my-4 pa-4" max-width="350">
    <v-card-title>Property Agent Form</v-card-title>

    <v-text-field v-model="firstName" label="First Name" :error-messages="errors.firstName" />
    <v-text-field v-model="lastName" label="Last Name" :error-messages="errors.lastName" />
    <v-text-field v-model="email" label="Email" :error-messages="errors.email" />
    <v-text-field v-model="mobileNumber" label="Mobile Number" :error-messages="errors.mobileNumber" />

    <v-btn color="primary" class="mt-4 text-capitalize" :disabled="!isFormValid" @click="submit">
      Save Agent
    </v-btn>
  </v-card>
</template>
