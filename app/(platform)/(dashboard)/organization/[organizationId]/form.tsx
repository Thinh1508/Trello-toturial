"use client"

import { useState } from "react"

import { useAction } from "@/hooks/use-action"
import { createBoard } from "@/actions/create-board"

import { FormInput } from "@/components/form/form-input"
import { FormSubmit } from "@/components/form/form-submit"

export const Form = () => {
  const { execute, filedErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log(data, "SUCCESS!")
    },
    onError: (error) => {
      console.log(error, "ERROR!")
    },
  })

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string
    execute({ title })
  }

  return (
    <form action={onSubmit}>
      <div className="flex flex-col space-x-2">
        <FormInput errors={filedErrors} id="title" label="Board Title" />
      </div>
      <FormSubmit>Save</FormSubmit>
    </form>
  )
}
