"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export interface CalendarProps {
  className?: string
  classNames?: {
    months?: string
    month?: string
    caption?: string
    caption_label?: string
    nav?: string
    nav_button?: string
    nav_button_previous?: string
    nav_button_next?: string
    table?: string
    head_row?: string
    head_cell?: string
    row?: string
    cell?: string
    day?: string
    day_selected?: string
    day_today?: string
    day_outside?: string
    day_disabled?: string
    day_hidden?: string
  }
  showOutsideDays?: boolean
  selected?: Date | Date[]
  onSelect?: (date: Date | undefined) => void
  disabled?: (date: Date) => boolean
  mode?: "single" | "multiple" | "range"
  fromDate?: Date
  toDate?: Date
  defaultMonth?: Date
  fixedWeeks?: boolean
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
  numberOfMonths?: number
}

function Calendar({
  className = "",
  classNames = {},
  showOutsideDays = true,
  selected,
  onSelect,
  disabled,
  mode = "single",
  fromDate,
  toDate,
  defaultMonth,
  fixedWeeks = false,
  weekStartsOn = 1, // Monday = 1, Sunday = 0
  numberOfMonths = 1,
  ...props
}: CalendarProps) {
  const [currentDate, setCurrentDate] = React.useState(defaultMonth || new Date())
  
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]
  
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const adjustedDayNames = weekStartsOn === 1 
    ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    : dayNames

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

  const getCalendarDays = (monthOffset = 0) => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth() + monthOffset
    
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    
    // Adjust first day of week based on weekStartsOn
    const firstDayOfWeek = weekStartsOn === 1 
      ? (firstDay.getDay() + 6) % 7  // Monday = 0
      : firstDay.getDay()            // Sunday = 0
    
    const days: (Date | null)[] = []
    
    // Add previous month's days if showOutsideDays is true
    if (showOutsideDays && firstDayOfWeek > 0) {
      const prevMonth = new Date(year, month, 0)
      for (let i = firstDayOfWeek - 1; i >= 0; i--) {
        days.push(new Date(year, month - 1, prevMonth.getDate() - i))
      }
    } else {
      for (let i = 0; i < firstDayOfWeek; i++) {
        days.push(null)
      }
    }
    
    // Add current month's days
    for (let day = 1; day <= lastDay.getDate(); day++) {
      days.push(new Date(year, month, day))
    }
    
    // Add next month's days if showOutsideDays is true
    const remainingSlots = fixedWeeks ? 42 - days.length : (7 - (days.length % 7)) % 7
    if (showOutsideDays && remainingSlots > 0) {
      for (let day = 1; day <= remainingSlots; day++) {
        days.push(new Date(year, month + 1, day))
      }
    } else {
      while (days.length < 42 && fixedWeeks) {
        days.push(null)
      }
    }
    
    return days
  }

  const isToday = (date: Date) => {
    const today = new Date()
    return date.toDateString() === today.toDateString()
  }

  const isSelected = (date: Date) => {
    if (!selected) return false
    
    if (mode === "single") {
      return selected instanceof Date && date.toDateString() === selected.toDateString()
    }
    
    if (mode === "multiple" && Array.isArray(selected)) {
      return selected.some(selectedDate => 
        selectedDate.toDateString() === date.toDateString()
      )
    }
    
    return false
  }

  const isOutsideMonth = (date: Date, monthOffset = 0) => {
    const currentMonth = currentDate.getMonth() + monthOffset
    return date.getMonth() !== currentMonth
  }

  const isDisabled = (date: Date) => {
    if (disabled && disabled(date)) return true
    if (fromDate && date < fromDate) return true
    if (toDate && date > toDate) return true
    return false
  }

  const handleDateClick = (date: Date) => {
    if (isDisabled(date) || !onSelect) return
    
    if (mode === "single") {
      onSelect(date)
    } else if (mode === "multiple") {
      onSelect(date)
    }
  }

  const canNavigatePrev = () => {
    if (!fromDate) return true
    const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    return prevMonth >= new Date(fromDate.getFullYear(), fromDate.getMonth(), 1)
  }

  const canNavigateNext = () => {
    if (!toDate) return true
    const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    return nextMonth <= new Date(toDate.getFullYear(), toDate.getMonth(), 1)
  }

  const renderMonth = (monthOffset = 0) => {
    const calendarDays = getCalendarDays(monthOffset)
    const displayDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + monthOffset, 1)

    return (
      <div className={`space-y-4 ${classNames?.month || ""}`} key={monthOffset}>
        {/* Calendar Header */}
        <div className={`flex items-center justify-between ${classNames?.caption || ""}`}>
          {monthOffset === 0 && (
            <button
              onClick={() => navigateMonth('prev')}
              className={`p-2 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed ${classNames?.nav_button || ""} ${classNames?.nav_button_previous || ""}`}
              disabled={!canNavigatePrev()}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          )}
          <h3 className={`text-xl font-semibold text-gray-900 ${classNames?.caption_label || ""}`}>
            {monthNames[displayDate.getMonth()]} {displayDate.getFullYear()}
          </h3>
          {monthOffset === numberOfMonths - 1 && (
            <button
              onClick={() => navigateMonth('next')}
              className={`p-2 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed ${classNames?.nav_button || ""} ${classNames?.nav_button_next || ""}`}
              disabled={!canNavigateNext()}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
          {monthOffset !== 0 && monthOffset !== numberOfMonths - 1 && <div className="w-10"></div>}
        </div>

        {/* Calendar Grid - PROPER LAYOUT */}
        <div className={`${classNames?.table || ""}`}>
          {/* Day Headers */}
          <div className={`grid grid-cols-7 gap-1 mb-2 ${classNames?.head_row || ""}`}>
            {adjustedDayNames.map((day) => (
              <div key={day} className={`text-center font-semibold text-gray-600 py-2 ${classNames?.head_cell || ""}`}>
                {day}
              </div>
            ))}
          </div>
          
          {/* Calendar Days Grid - Week by Week */}
          {Array.from({ length: Math.ceil(calendarDays.length / 7) }, (_, weekIndex) => (
            <div key={weekIndex} className="grid grid-cols-7 gap-1 mb-1">
              {calendarDays.slice(weekIndex * 7, (weekIndex + 1) * 7).map((date, dayIndex) => {
                if (!date) {
                  return <div key={dayIndex} className={`h-10 ${classNames?.cell || ""}`}></div>
                }
                
                const dateIsSelected = isSelected(date)
                const dateIsToday = isToday(date)
                const dateIsOutside = isOutsideMonth(date, monthOffset)
                const dateIsDisabled = isDisabled(date)
                
                return (
                  <div key={dayIndex} className={`${classNames?.cell || ""}`}>
                    <button
                      onClick={() => handleDateClick(date)}
                      className={`
                        h-10 w-full flex items-center justify-center rounded-lg text-sm font-medium transition-all
                        ${dateIsSelected && !dateIsDisabled 
                          ? "bg-green-500 text-white shadow-lg" 
                          : ""
                        }
                        ${dateIsToday && !dateIsSelected && !dateIsDisabled 
                          ? "bg-blue-100 text-blue-800 border-2 border-blue-300" 
                          : ""
                        }
                        ${dateIsOutside && showOutsideDays 
                          ? "text-gray-400" 
                          : ""
                        }
                        ${dateIsDisabled 
                          ? "text-gray-300 cursor-not-allowed opacity-50" 
                          : ""
                        }
                        ${!dateIsSelected && !dateIsToday && !dateIsOutside && !dateIsDisabled 
                          ? "hover:bg-gray-100 text-gray-700 cursor-pointer" 
                          : ""
                        }
                        ${dateIsOutside && !showOutsideDays 
                          ? "invisible" 
                          : ""
                        }
                        ${classNames?.day || ""}
                        ${dateIsSelected ? classNames?.day_selected || "" : ""}
                        ${dateIsToday ? classNames?.day_today || "" : ""}
                        ${dateIsOutside ? classNames?.day_outside || "" : ""}
                        ${dateIsDisabled ? classNames?.day_disabled || "" : ""}
                        ${dateIsOutside && !showOutsideDays ? classNames?.day_hidden || "" : ""}
                      `}
                      disabled={dateIsDisabled}
                    >
                      {date.getDate()}
                    </button>
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className={`p-3 ${className}`} {...props}>
      <div className={`${numberOfMonths > 1 
          ? "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0" 
          : "space-y-4"
        } ${classNames?.months || ""}`}>
        {Array.from({ length: numberOfMonths }, (_, i) => renderMonth(i))}
      </div>
    </div>
  )
}

export default Calendar