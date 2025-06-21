import { z } from "zod"

// Phone number validation regex
const phoneRegex = /^[+]?[1-9][\d]{0,15}$/

export const demoFormSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be less than 50 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "First name can only contain letters, spaces, hyphens, and apostrophes"),
  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must be less than 50 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Last name can only contain letters, spaces, hyphens, and apostrophes"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(5, "Email must be at least 5 characters")
    .max(100, "Email must be less than 100 characters")
    .toLowerCase(),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be less than 15 digits")
    .regex(phoneRegex, "Please enter a valid phone number"),
  company: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(100, "Company name must be less than 100 characters"),
  role: z
    .string()
    .min(1, "Please select your role")
    .refine((val) => val !== "", "Role is required"),
  practiceType: z
    .string()
    .min(1, "Please select practice type")
    .refine((val) => val !== "", "Practice type is required"),
  practiceSize: z
    .string()
    .min(1, "Please select practice size")
    .refine((val) => val !== "", "Practice size is required"),
  currentChallenges: z
    .string()
    .min(10, "Please provide at least 10 characters describing your challenges")
    .max(500, "Description must be less than 500 characters").optional(),
  interestedSolutions: z
    .array(z.string())
    .min(1, "Please select at least one solution")
    .max(5, "Please select no more than 5 solutions"),
  preferredTime: z
    .string()
    .min(1, "Please select your preferred time")
    .refine((val) => val !== "", "Preferred time is required"),
  additionalNotes: z.string().max(1000, "Additional notes must be less than 1000 characters").optional(),
})

export const bookCallFormSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be less than 50 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "First name can only contain letters, spaces, hyphens, and apostrophes"),
  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must be less than 50 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Last name can only contain letters, spaces, hyphens, and apostrophes"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(5, "Email must be at least 5 characters")
    .max(100, "Email must be less than 100 characters")
    .toLowerCase(),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be less than 15 digits")
    .regex(phoneRegex, "Please enter a valid phone number"),
  company: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(100, "Company name must be less than 100 characters"),
  role: z
    .string()
    .min(1, "Please select your role")
    .refine((val) => val !== "", "Role is required"),
  callType: z
    .string()
    .min(1, "Please select call type")
    .refine((val) => val !== "", "Call type is required"),
  urgency: z
    .string()
    .min(1, "Please select timeline")
    .refine((val) => val !== "", "Timeline is required"),
  topics: z
    .string()
    .min(20, "Please provide at least 20 characters describing topics to discuss")
    .max(1000, "Topics description must be less than 1000 characters"),
  additionalNotes: z.string().max(1000, "Additional notes must be less than 1000 characters").optional(),
  selectedDate: z
    .date({
      required_error: "Please select a date",
      invalid_type_error: "Please select a valid date",
    })
    .refine((date) => date > new Date(), "Please select a future date"),
  selectedTime: z
    .string()
    .min(1, "Please select a time")
    .refine((val) => val !== "", "Time selection is required"),
})

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be less than 50 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "First name can only contain letters, spaces, hyphens, and apostrophes"),
  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must be less than 50 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Last name can only contain letters, spaces, hyphens, and apostrophes"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(5, "Email must be at least 5 characters")
    .max(100, "Email must be less than 100 characters")
    .toLowerCase(),
  phone: z
    .string()
    .regex(phoneRegex, "Please enter a valid phone number")
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be less than 15 digits")
    .optional()
    .or(z.literal("")),
  company: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(100, "Company name must be less than 100 characters"),
  role: z
    .string()
    .min(1, "Please select your role")
    .refine((val) => val !== "", "Role is required"),
  inquiryType: z
    .string()
    .min(1, "Please select inquiry type")
    .refine((val) => val !== "", "Inquiry type is required"),
  message: z
    .string()
    .min(20, "Please provide at least 20 characters in your message")
    .max(2000, "Message must be less than 2000 characters"),
  urgency: z
    .string()
    .min(1, "Please select urgency level")
    .refine((val) => val !== "", "Urgency level is required"),
})

export const newsletterFormSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(5, "Email must be at least 5 characters")
    .max(100, "Email must be less than 100 characters")
    .toLowerCase(),
  interests: z
    .array(z.string())
    .min(1, "Please select at least one interest")
    .max(8, "Please select no more than 8 interests"),
})

export const appointmentSchema = z.object({
  title: z
    .string()
    .min(3, "Appointment title must be at least 3 characters")
    .max(100, "Appointment title must be less than 100 characters"),
  date: z
    .date({
      required_error: "Please select a date",
      invalid_type_error: "Please select a valid date",
    })
    .refine((date) => date >= new Date(new Date().setHours(0, 0, 0, 0)), "Please select today or a future date"),
  time: z
    .string()
    .min(1, "Please select a time")
    .refine((val) => val !== "", "Time selection is required"),
  duration: z
    .string()
    .min(1, "Please select duration")
    .refine((val) => val !== "", "Duration is required"),
  patient: z
    .string()
    .min(2, "Patient name must be at least 2 characters")
    .max(100, "Patient name must be less than 100 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Patient name can only contain letters, spaces, hyphens, and apostrophes"),
  type: z
    .string()
    .min(1, "Please select appointment type")
    .refine((val) => val !== "", "Appointment type is required"),
  notes: z.string().max(500, "Notes must be less than 500 characters").optional(),
})

// Custom validation functions
export const validateBusinessEmail = (email: string): boolean => {
  const freeEmailProviders = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "aol.com"]
  const domain = email.split("@")[1]?.toLowerCase()
  return !freeEmailProviders.includes(domain)
}

export const validatePhoneNumber = (phone: string): boolean => {
  const cleaned = phone.replace(/\D/g, "")
  return cleaned.length >= 10 && cleaned.length <= 15
}

export const sanitizeInput = (input: string): string => {
  return input.trim().replace(/[<>]/g, "")
}

export type DemoFormData = z.infer<typeof demoFormSchema>
export type BookCallFormData = z.infer<typeof bookCallFormSchema>
export type ContactFormData = z.infer<typeof contactFormSchema>
export type NewsletterFormData = z.infer<typeof newsletterFormSchema>
export type AppointmentFormData = z.infer<typeof appointmentSchema>
