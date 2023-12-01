import { deleteBoard } from "@/actions/delete-board"
import { FormButton } from "@/app/(platform)/(dashboard)/organization/[organizationId]/form-button"
import { Button } from "@/components/ui/button"

interface BoardProps {
  id: string
  title: string
}

export const Board = ({ id, title }: BoardProps) => {
  const deleteBoardWithId = deleteBoard.bind(null, id)

  return (
    <form className="flex items-center gap-x-2" action={deleteBoardWithId}>
      <p>Board title:{title}</p>
      <FormButton name="Delete" variant="destructive" />
    </form>
  )
}
