import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/hooks";
import { useRouter } from "next/dist/client/router";
import { createContext, ReactNode, useContext, useEffect } from "react";


const SidebarDrawerContext = createContext({} as UseDisclosureReturn)

interface SidebarDrawerProviderProps {
  children: ReactNode;
}

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
  const disclosure = useDisclosure()
  const { asPath } = useRouter()

  useEffect(() => {
    disclosure.onClose()
  }, [asPath])

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => {
  return useContext(SidebarDrawerContext)
}