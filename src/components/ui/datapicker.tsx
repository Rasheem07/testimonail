"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useFormContext } from "react-hook-form"

export function DatePicker() {
  const [date, setDate] = React.useState<Date>()
  const { register, setValue } = useFormContext()

  const handleDateChange = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    setValue('date', selectedDate ? format(selectedDate, "yyyy-MM-dd") : ""); // Update the form state
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          size={"lg"}
          className={cn(
            "w-full flex gap-1.5 justify-start items-center text-left font-normal border-gray-300",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="h-4 w-4 text-gray-700"/>
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateChange} // Use the handler to update state and form
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
