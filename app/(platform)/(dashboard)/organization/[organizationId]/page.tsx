import { Board } from "@/app/(platform)/(dashboard)/organization/[organizationId]/board"
import { Form } from "@/app/(platform)/(dashboard)/organization/[organizationId]/form"
import { db } from "@/lib/db"

const OrganizationIdPage = async () => {
  const boards = await db.board.findMany()

  return (
    <div className="flex flex-col space-x-4">
      <Form />
      <div className="space-y-2">
        {boards.map((board) => (
          <Board key={board.id} id={board.id} title={board.title} />
        ))}
      </div>
    </div>
  )
}

export default OrganizationIdPage
