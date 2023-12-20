import { z } from "zod"

export type FiledErrors<T> = {
  [K in keyof T]?: string[]
}

export type ActionState<TInput, TOutput> = {
  filedErrors?: FiledErrors<TInput>
  error?: string | null
  data?: TOutput
}

export const createSafeAction = <TInput, TOutput>(
  schema: z.Schema<TInput>,
  handler: (validatedData: TInput) => Promise<ActionState<TInput, TOutput>>
) => {
  return async (data: TInput): Promise<ActionState<TInput, TOutput>> => {
    const validationResult = schema.safeParse(data)
    if (!validationResult.success) {
      return {
        filedErrors: validationResult.error.flatten()
          .fieldErrors as FiledErrors<TInput>,
      }
    }
    return handler(validationResult.data)
  }
}