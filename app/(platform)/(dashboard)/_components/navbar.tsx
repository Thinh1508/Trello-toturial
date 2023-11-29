import { Plus } from "lucide-react"
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs"

import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { MobileSidebar } from "@/app/(platform)/(dashboard)/_components/mobile-sidebar"

const Navbar = () => {
  return (
    <nav className="fixed z-50 top-0 px-4 w-full h-14 border-b shadow-sm bg-white flex items-center">
      <MobileSidebar />
      <div className="flex items-center gap-x-4">
        <div>
          <Logo />
        </div>
        <Button
          size="sm"
          variant="primary"
          className="rounded-sm hidden md:block py-1.5 px-2"
        >
          Create
        </Button>
      </div>
      <div className="ml-auto flex items-center gap-x-2">
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl="/organization/:id"
          afterSelectOrganizationUrl="/organization/:id"
          afterLeaveOrganizationUrl="/select-org"
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            },
          }}
        />
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: {
                height: 30,
                width: 30,
              },
            },
          }}
        />
      </div>
    </nav>
  )
}

export default Navbar
