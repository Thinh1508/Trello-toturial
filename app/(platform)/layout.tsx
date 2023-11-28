import { ClerkProvider } from "@clerk/nextjs"

const FlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return <ClerkProvider>{children}</ClerkProvider>
}

export default FlatformLayout
