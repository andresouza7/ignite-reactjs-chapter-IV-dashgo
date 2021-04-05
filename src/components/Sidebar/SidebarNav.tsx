import { Stack } from "@chakra-ui/react"
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri"
import { NavLink } from "./NavLink"
import { NavSection } from "./NavSection"

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink text="Dashboard" icon={RiDashboardLine} href="/dashboard" />
        <NavLink text="Usuários" icon={RiContactsLine} href="/users" />
      </NavSection>

      <NavSection title="AUTOMAÇÃO">
        <NavLink text="Formulários" icon={RiInputMethodLine} href="/form" />
        <NavLink text="Automação" icon={RiGitMergeLine} href="/auto" />
      </NavSection>
    </Stack>
  )
}