"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Calendar, Clock, User, Plus, Edit, Trash2, Loader2, ChevronLeft, ChevronRight } from "lucide-react"
import { createAppointment, deleteAppointment, getAppointments, updateAppointment } from "@/lib/api"

interface Appointment {
  id: string
  title: string
  date: string
  time: string
  duration: string
  patient: string
  type: string
  status: "confirmed" | "pending" | "cancelled"
  notes?: string
}

export default function InteractiveCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date())
  const [appointments, setAppointments] = useState<{ [key: string]: Appointment[] }>({})
  const [loading, setLoading] = useState(false)
  const [showAddForm, setShowAddForm] = useState(false)
  const [editingAppointment, setEditingAppointment] = useState<Appointment | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    time: "",
    duration: "30",
    patient: "",
    type: "Consultation",
    notes: "",
  })

  useEffect(() => {
    loadAppointments()
  }, [])

  const loadAppointments = async () => {
    try {
      setLoading(true)
      const response = await getAppointments()
      if (response.success) {
        // Group appointments by date string (YYYY-MM-DD)
        const groupedAppointments: { [key: string]: Appointment[] } = {}
        response.data.forEach((apt: Appointment) => {
          const dateKey = apt.date
          if (!groupedAppointments[dateKey]) {
            groupedAppointments[dateKey] = []
          }
          groupedAppointments[dateKey].push(apt)
        })
        setAppointments(groupedAppointments)
      }
    } catch (error) {
      console.error("Failed to load appointments:", error)
    } finally {
      setLoading(false)
    }
  }

  const formatDateKey = (date: Date) => {
    return date.toISOString().split('T')[0] // YYYY-MM-DD format
  }

  const getDayAppointments = (date: Date) => {
    const dateKey = formatDateKey(date)
    return appointments[dateKey] || []
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800 border-green-200"
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "cancelled":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const handleDateClick = (date: Date) => {
    setSelectedDate(date)
    setShowAddForm(false)
    setEditingAppointment(null)
  }

  const handleFormSubmit = async () => {
    if (!selectedDate) return
    
    setLoading(true)

    try {
      const appointmentData = {
        ...formData,
        date: formatDateKey(selectedDate),
        status: "confirmed" as const,
        id: editingAppointment?.id || `apt-${Date.now()}`
      }

      if (editingAppointment) {
        const response = await updateAppointment(editingAppointment.id, appointmentData)
        if (response.success) {
          // Update local state
          const dateKey = formatDateKey(selectedDate)
          setAppointments(prev => ({
            ...prev,
            [dateKey]: prev[dateKey]?.map(apt => 
              apt.id === editingAppointment.id ? { ...apt, ...appointmentData } : apt
            ) || []
          }))
          setEditingAppointment(null)
        }
      } else {
        const response = await createAppointment(appointmentData)
        if (response.success) {
          // Add to local state
          const dateKey = formatDateKey(selectedDate)
          setAppointments(prev => ({
            ...prev,
            [dateKey]: [...(prev[dateKey] || []), appointmentData as Appointment]
          }))
          setShowAddForm(false)
        }
      }

      // Reset form
      setFormData({
        title: "",
        time: "",
        duration: "30",
        patient: "",
        type: "Consultation",
        notes: "",
      })
    } catch (error) {
      console.error("Failed to save appointment:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteAppointment = async (id: string) => {
    if (!confirm("Are you sure you want to delete this appointment?")) return
    if (!selectedDate) return

    setLoading(true)
    try {
      const response = await deleteAppointment(id)
      if (response.success) {
        // Remove from local state
        const dateKey = formatDateKey(selectedDate)
        setAppointments(prev => ({
          ...prev,
          [dateKey]: prev[dateKey]?.filter(apt => apt.id !== id) || []
        }))
      }
    } catch (error) {
      console.error("Failed to delete appointment:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleEditAppointment = (appointment: Appointment) => {
    setEditingAppointment(appointment)
    setFormData({
      title: appointment.title,
      time: appointment.time,
      duration: appointment.duration,
      patient: appointment.patient,
      type: appointment.type,
      notes: appointment.notes || "",
    })
    setShowAddForm(true)
  }

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev)
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1)
      } else {
        newDate.setMonth(prev.getMonth() + 1)
      }
      return newDate
    })
  }

  const getCalendarDays = () => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    
    // First day of the month
    const firstDay = new Date(year, month, 1)
    // Last day of the month
    const lastDay = new Date(year, month + 1, 0)
    
    // Get the day of week for the first day (0 = Sunday, 1 = Monday, etc.)
    // Convert to Monday = 0 format
    const firstDayOfWeek = (firstDay.getDay() + 6) % 7
    
    const days: (Date | null)[] = []
    
    // Add empty slots for days before the first day of the month
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(null)
    }
    
    // Add all days of the month
    for (let day = 1; day <= lastDay.getDate(); day++) {
      days.push(new Date(year, month, day))
    }
    
    // Fill remaining slots to complete the grid (6 rows × 7 days = 42 slots)
    while (days.length < 42) {
      days.push(null)
    }
    
    return days
  }

  const isToday = (date: Date) => {
    const today = new Date()
    return date.toDateString() === today.toDateString()
  }

  const isSameDate = (date1: Date | null, date2: Date | null) => {
    if (!date1 || !date2) return false
    return date1.toDateString() === date2.toDateString()
  }

  const timeSlots = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
    "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
  ]

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

  const calendarDays = getCalendarDays()

  return (
    <Card className="shadow-2xl border border-green-100 bg-white">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-gray-900">Interactive Appointment Calendar</CardTitle>
          <Badge className="bg-green-100 text-green-800">Live Demo</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Calendar Header */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigateMonth('prev')}
            className="p-2"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <h3 className="text-xl font-semibold text-gray-900">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h3>
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigateMonth('next')}
            className="p-2"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2 text-center text-sm">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
            <div key={day} className="font-semibold text-gray-600 py-2">
              {day}
            </div>
          ))}
          {calendarDays.map((date, index) => {
            if (!date) {
              return <div key={index} className="h-10"></div>
            }
            
            const hasAppointments = getDayAppointments(date).length > 0
            const isSelected = isSameDate(selectedDate, date)
            const today = isToday(date)
            
            return (
              <button
                key={index}
                onClick={() => handleDateClick(date)}
                className={`h-10 flex items-center justify-center rounded-lg text-sm font-medium transition-all relative ${
                  isSelected
                    ? "bg-green-500 text-white shadow-lg"
                    : today
                      ? "bg-blue-100 text-blue-800 hover:bg-blue-200"
                      : hasAppointments
                        ? "bg-green-100 text-green-800 hover:bg-green-200"
                        : "hover:bg-gray-50 text-gray-700"
                } cursor-pointer`}
                disabled={loading}
              >
                {date.getDate()}
                {hasAppointments && (
                  <div className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full"></div>
                )}
              </button>
            )
          })}
        </div>

        {/* Selected Date Appointments */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-gray-900">
              {selectedDate 
                ? `Appointments for ${monthNames[selectedDate.getMonth()]} ${selectedDate.getDate()}, ${selectedDate.getFullYear()}`
                : "Select a date"
              }
            </h4>
            {selectedDate && (
              <Dialog open={showAddForm} onOpenChange={setShowAddForm}>
                <DialogTrigger asChild>
                  <Button size="sm" className="bg-green-500 hover:bg-green-600 rounded-full" disabled={loading}>
                    <Plus className="w-4 h-4 mr-1" />
                    Add
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>{editingAppointment ? "Edit Appointment" : "Add New Appointment"}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Appointment Title</Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                        placeholder="e.g., Dr. Smith - Consultation"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="time">Time</Label>
                        <Select
                          value={formData.time}
                          onValueChange={(value) => setFormData((prev) => ({ ...prev, time: value }))}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="duration">Duration (min)</Label>
                        <Select
                          value={formData.duration}
                          onValueChange={(value) => setFormData((prev) => ({ ...prev, duration: value }))}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="15">15 min</SelectItem>
                            <SelectItem value="30">30 min</SelectItem>
                            <SelectItem value="45">45 min</SelectItem>
                            <SelectItem value="60">60 min</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="patient">Patient Name</Label>
                      <Input
                        id="patient"
                        value={formData.patient}
                        onChange={(e) => setFormData((prev) => ({ ...prev, patient: e.target.value }))}
                        placeholder="Patient name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="type">Appointment Type</Label>
                      <Select
                        value={formData.type}
                        onValueChange={(value) => setFormData((prev) => ({ ...prev, type: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Consultation">Consultation</SelectItem>
                          <SelectItem value="Follow-up">Follow-up</SelectItem>
                          <SelectItem value="Cleaning">Cleaning</SelectItem>
                          <SelectItem value="Procedure">Procedure</SelectItem>
                          <SelectItem value="Emergency">Emergency</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="notes">Notes (Optional)</Label>
                      <Textarea
                        id="notes"
                        value={formData.notes}
                        onChange={(e) => setFormData((prev) => ({ ...prev, notes: e.target.value }))}
                        placeholder="Additional notes..."
                        rows={2}
                      />
                    </div>

                    <div className="flex gap-2">
                      <Button onClick={handleFormSubmit} className="flex-1 bg-green-500 hover:bg-green-600" disabled={loading}>
                        {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                        {editingAppointment ? "Update" : "Add"} Appointment
                      </Button>
                      <Button
                        onClick={() => {
                          setShowAddForm(false)
                          setEditingAppointment(null)
                          setFormData({
                            title: "",
                            time: "",
                            duration: "30",
                            patient: "",
                            type: "Consultation",
                            notes: "",
                          })
                        }}
                        variant="outline"
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </div>

          <div className="space-y-3">
            {loading ? (
              <div className="text-center py-8">
                <Loader2 className="w-8 h-8 animate-spin mx-auto mb-2 text-green-600" />
                <p className="text-gray-500">Loading appointments...</p>
              </div>
            ) : selectedDate && getDayAppointments(selectedDate).length > 0 ? (
              getDayAppointments(selectedDate).map((appointment) => (
                <div
                  key={appointment.id}
                  className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <p className="font-medium text-gray-900">{appointment.title}</p>
                        <Badge className={`text-xs ${getStatusColor(appointment.status)}`}>{appointment.status}</Badge>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>
                            {appointment.time} ({appointment.duration} min)
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="w-3 h-3" />
                          <span>{appointment.patient}</span>
                        </div>
                      </div>
                      {appointment.notes && <p className="text-xs text-gray-500 mt-1">{appointment.notes}</p>}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-green-600 hover:text-green-700"
                      onClick={() => handleEditAppointment(appointment)}
                      disabled={loading}
                    >
                      <Edit className="w-3 h-3" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-red-600 hover:text-red-700"
                      onClick={() => handleDeleteAppointment(appointment.id)}
                      disabled={loading}
                    >
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              ))
            ) : selectedDate ? (
              <div className="text-center py-8 text-gray-500">
                <Calendar className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <p>No appointments scheduled for this day</p>
                <p className="text-sm">Click "Add" to schedule an appointment</p>
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <Calendar className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <p>Select a date to view appointments</p>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}