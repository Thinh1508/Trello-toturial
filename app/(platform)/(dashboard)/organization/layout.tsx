import { Sidebar } from "@/app/(platform)/(dashboard)/_components/sidebar"
import { Button } from "@/components/ui/button"

const OrganizationLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="pt-16 md:pt-24 px-4 max-w-6xl 2xl:max-w-screen-xl mx-auto">
      <Button
        size="sm"
        variant="primary"
        className="rounded-sm block md:hidden py-1.5 px-10"
      >
        Create
      </Button>
      <div className="flex gap-x-7 pt-3 md:pt-2">
        <div className="w-64 shrink-0 hidden md:block">
          <Sidebar />
        </div>
        {children}
      </div>
    </main>
  )
}

export default OrganizationLayout
