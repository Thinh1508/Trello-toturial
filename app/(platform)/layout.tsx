import { ClerkProvider } from "@clerk/nextjs"
import { Toaster } from "sonner"

const FlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <Toaster />
      {children}
    </ClerkProvider>
  )
}

export default FlatformLayout
