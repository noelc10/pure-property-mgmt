import { z } from 'zod'

export interface AgentForm {
  firstName: string
  lastName: string
  email: string
  mobileNumber: string
}

export const agentSchema = z.object({
  firstName: z.string().min(1, 'First Name is required'),
  lastName: z.string().min(1, 'Last Name is required'),
  email: z.string().email('Invalid Email'),
  mobileNumber: z.string().min(7, 'Invalid Mobile Number')
})
