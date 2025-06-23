"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calculator, DollarSign, TrendingUp, Clock } from "lucide-react"

export default function ROICalculator() {
  const [inputs, setInputs] = useState({
    monthlyPatients: "",
    avgAppointmentValue: "",
    staffHours: "",
    hourlyRate: "",
    noShowRate: "",
    practiceType: "",
  })
  const [results, setResults] = useState<any>(null)

  const calculateROI = () => {
    const patients = Number.parseInt(inputs.monthlyPatients) || 0
    const appointmentValue = Number.parseInt(inputs.avgAppointmentValue) || 0
    const staffHours = Number.parseInt(inputs.staffHours) || 0
    const hourlyRate = Number.parseInt(inputs.hourlyRate) || 0
    const noShowRate = Number.parseInt(inputs.noShowRate) || 0

    // Calculate current losses
    const monthlyRevenue = patients * appointmentValue
    const lostRevenue = (monthlyRevenue * noShowRate) / 100
    const staffCost = staffHours * hourlyRate * 4.33 // weeks per month

    // Calculate improvements with AI
    const noShowReduction = 70 // 70% reduction in no-shows
    const efficiencyGain = 40 // 40% reduction in admin time
    const newPatientIncrease = 25 // 25% increase in new patients

    const recoveredRevenue = (lostRevenue * noShowReduction) / 100
    const savedStaffCost = (staffCost * efficiencyGain) / 100
    const additionalRevenue = (monthlyRevenue * newPatientIncrease) / 100

    const totalMonthlySavings = recoveredRevenue + savedStaffCost + additionalRevenue
    const annualSavings = totalMonthlySavings * 12

    // AI solution cost (estimate based on practice size)
    const aiCost = patients < 500 ? 499 : patients < 1500 ? 1299 : 2499
    const annualCost = aiCost * 12
    const netAnnualSavings = annualSavings - annualCost
    const roi = (netAnnualSavings / annualCost) * 100

    setResults({
      monthlyRevenue,
      lostRevenue,
      staffCost,
      recoveredRevenue,
      savedStaffCost,
      additionalRevenue,
      totalMonthlySavings,
      annualSavings,
      aiCost,
      annualCost,
      netAnnualSavings,
      roi,
      paybackPeriod: annualCost / totalMonthlySavings,
    })
  }

  const handleInputChange = (field: string, value: string) => {
    setInputs((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Card className="shadow-2xl border border-green-100">
      <CardHeader className="text-center space-y-4">
        <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto">
          <Calculator className="w-8 h-8 text-green-600" />
        </div>
        <div>
          <CardTitle className="text-3xl font-bold text-gray-900">Interactive ROI Calculator</CardTitle>
          <p className="text-gray-600">Calculate your potential savings with <span className="logo text-orange-500">N:OW</span> AI automation</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Practice Information</h4>
            <div className="space-y-3">
              <div>
                <Label htmlFor="monthlyPatients">Monthly Patients</Label>
                <Input
                  id="monthlyPatients"
                  type="number"
                  placeholder="500"
                  value={inputs.monthlyPatients}
                  onChange={(e) => handleInputChange("monthlyPatients", e.target.value)}
                  className="rounded-full"
                />
              </div>
              <div>
                <Label htmlFor="avgAppointmentValue">Average Appointment Value ($)</Label>
                <Input
                  id="avgAppointmentValue"
                  type="number"
                  placeholder="150"
                  value={inputs.avgAppointmentValue}
                  onChange={(e) => handleInputChange("avgAppointmentValue", e.target.value)}
                  className="rounded-full"
                />
              </div>
              <div>
                <Label htmlFor="practiceType">Practice Type</Label>
                <Select onValueChange={(value) => handleInputChange("practiceType", value)}>
                  <SelectTrigger className="rounded-full">
                    <SelectValue placeholder="Select practice type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="family">Family Practice</SelectItem>
                    <SelectItem value="dental">Dental</SelectItem>
                    <SelectItem value="specialty">Specialty Clinic</SelectItem>
                    <SelectItem value="urgent-care">Urgent Care</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Current Challenges</h4>
            <div className="space-y-3">
              <div>
                <Label htmlFor="staffHours">Admin Staff Hours/Week</Label>
                <Input
                  id="staffHours"
                  type="number"
                  placeholder="40"
                  value={inputs.staffHours}
                  onChange={(e) => handleInputChange("staffHours", e.target.value)}
                  className="rounded-full"
                />
              </div>
              <div>
                <Label htmlFor="hourlyRate">Staff Hourly Rate ($)</Label>
                <Input
                  id="hourlyRate"
                  type="number"
                  placeholder="20"
                  value={inputs.hourlyRate}
                  onChange={(e) => handleInputChange("hourlyRate", e.target.value)}
                  className="rounded-full"
                />
              </div>
              <div>
                <Label htmlFor="noShowRate">No-Show Rate (%)</Label>
                <Input
                  id="noShowRate"
                  type="number"
                  placeholder="15"
                  value={inputs.noShowRate}
                  onChange={(e) => handleInputChange("noShowRate", e.target.value)}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </div>

        <Button
          onClick={calculateROI}
          className="w-full bg-green-500 hover:bg-green-600 rounded-full py-3"
          size="lg"
          disabled={!inputs.monthlyPatients || !inputs.avgAppointmentValue}
        >
          Calculate My ROI
          <Calculator className="ml-2 w-5 h-5" />
        </Button>

        {results && (
          <div className="space-y-6 pt-6 border-t border-green-100">
            <h4 className="font-semibold text-gray-900 text-center">Your ROI Results</h4>

            <div className="grid md:grid-cols-3 gap-4">
              <Card className="bg-green-50 border border-green-200">
                <CardContent className="p-4 text-center">
                  <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-700">
                    ${results.totalMonthlySavings.toLocaleString()}
                  </div>
                  <div className="text-sm text-green-600">Monthly Savings</div>
                </CardContent>
              </Card>

              <Card className="bg-emerald-50 border border-emerald-200">
                <CardContent className="p-4 text-center">
                  <TrendingUp className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-emerald-700">{results.roi.toFixed(0)}%</div>
                  <div className="text-sm text-emerald-600">Annual ROI</div>
                </CardContent>
              </Card>

              <Card className="bg-teal-50 border border-teal-200">
                <CardContent className="p-4 text-center">
                  <Clock className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-teal-700">{results.paybackPeriod.toFixed(1)}</div>
                  <div className="text-sm text-teal-600">Months to Payback</div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-3">
              <h5 className="font-medium text-gray-900">Savings Breakdown:</h5>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Recovered Revenue (from reduced no-shows):</span>
                  <span className="font-medium text-green-600">+${results.recoveredRevenue.toLocaleString()}/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>Staff Cost Savings (40% efficiency gain):</span>
                  <span className="font-medium text-green-600">+${results.savedStaffCost.toLocaleString()}/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>Additional Revenue (25% more patients):</span>
                  <span className="font-medium text-green-600">+${results.additionalRevenue.toLocaleString()}/mo</span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span>AI Solution Cost:</span>
                  <span className="font-medium text-red-600">-${results.aiCost}/mo</span>
                </div>
                <div className="flex justify-between font-semibold text-lg border-t pt-2">
                  <span>Net Monthly Benefit:</span>
                  <span className="text-green-600">
                    +${(results.totalMonthlySavings - results.aiCost).toLocaleString()}/mo
                  </span>
                </div>
              </div>
            </div>

            <Button
              className="w-full bg-green-500 hover:bg-green-600 rounded-full"
              onClick={() => (window.location.href = "/contact")}
            >
              Get My Custom Implementation Plan
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
