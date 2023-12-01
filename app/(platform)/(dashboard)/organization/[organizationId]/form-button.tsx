"use client"

import { Button } from "@/components/ui/button"
import { useFormStatus } from "react-dom"

export const FormButton = ({
  name,
  variant,
}: {
  name: string
  variant?: string
}) => {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      disabled={pending}
      variant={variant ? "destructive" : "default"}
    >
      {name}
    </Button>
  )
}
