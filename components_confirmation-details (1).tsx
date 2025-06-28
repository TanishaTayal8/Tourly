"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft } from 'lucide-react'

interface ConfirmationDetailsProps {
  tripId: string
}

export function ConfirmationDetails({ tripId }: ConfirmationDetailsProps) {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 bg-white p-4 shadow">
        <button onClick={() => router.back()} className="flex items-center text-gray-600">
          <ChevronLeft className="h-5 w-5" />
          <span>Back</span>
        </button>
      </div>

      <div className="p-4">
        <Card>
          <CardContent className="p-6 space-y-6">
            <h2 className="text-2xl font-semibold">Tue 19 November</h2>

            <div className="space-y-4">
              <div className="relative pl-6 border-l-2 border-gray-200">
                <div className="mb-4">
                  <div className="absolute left-[-9px] top-2 h-4 w-4 rounded-full bg-gray-200" />
                  <p className="text-lg font-medium">08:40</p>
                  <p className="text-gray-600">Pari Chowk, NRI City, Greater Noida</p>
                  <p className="text-yellow-500 text-sm">3 km from your departure</p>
                </div>

                <div>
                  <div className="absolute left-[-9px] top-2 h-4 w-4 rounded-full bg-gray-200" />
                  <p className="text-lg font-medium">09:00</p>
                  <p className="text-gray-600">B35, 36, Block B, Sector 80, Noida</p>
                  <p className="text-green-500 text-sm">2774 m from your arrival</p>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t">
              <p className="text-gray-600">Total price for 1 passenger</p>
              <p className="text-xl font-bold">₹30.00</p>
            </div>

            <Button 
              className="w-full"
              onClick={() => {
                alert("Booking confirmed!")
                router.push("/")
              }}
            >
              Book
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

