// Form submission handlers
export async function submitDemoForm(data: any) {
  const response = await fetch("/api/forms/demo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error("Failed to submit demo form")
  }

  return response.json()
}

export async function submitBookCallForm(data: any) {
  const response = await fetch("/api/forms/book-call", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error("Failed to submit book call form")
  }

  return response.json()
}

export async function submitContactForm(data: any) {
  const response = await fetch("/api/forms/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error("Failed to submit contact form")
  }

  return response.json()
}

export async function subscribeNewsletter(data: any) {
  const response = await fetch("/api/forms/newsletter", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error("Failed to subscribe to newsletter")
  }

  return response.json()
}

// Appointment API functions
export async function getAppointments(date?: string) {
  const url = date ? `/api/appointments?date=${date}` : "/api/appointments"
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error("Failed to fetch appointments")
  }

  return response.json()
}

export async function createAppointment(data: any) {
  const response = await fetch("/api/appointments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error("Failed to create appointment")
  }

  return response.json()
}

export async function updateAppointment(id: string, data: any) {
  const response = await fetch(`/api/appointments/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error("Failed to update appointment")
  }

  return response.json()
}

export async function deleteAppointment(id: string) {
  const response = await fetch(`/api/appointments/${id}`, {
    method: "DELETE",
  })

  if (!response.ok) {
    throw new Error("Failed to delete appointment")
  }

  return response.json()
}
