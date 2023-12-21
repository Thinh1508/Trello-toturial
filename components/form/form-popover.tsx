"use client"

import { X } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { FormInput } from "@/components/form/form-input"
import { FormSubmit } from "@/components/form/form-submit"
import { useAction } from "@/hooks/use-action"
import { createBoard } from "@/actions/create-board"
import { toast } from "sonner"
import { useState } from "react"

interface FormPopoverProps {
  children: React.ReactNode
  side?: "top" | "bottom" | "left" | "right"
  align?: "start" | "end" | "center"
  sideOffset?: number
}

export const FormPopover = ({
  children,
  side = "bottom",
  align,
  sideOffset = 0,
}: FormPopoverProps) => {
  const { execute, filedErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log({ data })
      toast.success("Create board success!")
    },
    onError: (error) => {
      toast.error(error)
      console.log({ error })
    },
  })

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string

    execute({ title })
  }

  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent
        align={align}
        className="w-80 pt-3"
        side={side}
        sideOffset={sideOffset}
      >
        <div className="text-sm font-medium text-center text-neutral-600 pb-4">
          Create board
        </div>
        <PopoverClose asChild>
          <Button
            className="h-auto w-auto p-2 absolute top-2 right-2 text-neutral-600"
            variant="ghost"
          >
            <X className="h-4 w-4" />
          </Button>
        </PopoverClose>
        <form className="space-y-4" action={onSubmit}>
          <div className="space-y-4">
            <FormInput
              id="title"
              label="Board title"
              type="text"
              errors={filedErrors}
            />
          </div>
          <FormSubmit className="w-full">Create</FormSubmit>
        </form>
      </PopoverContent>
    </Popover>
  )
}
