import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react"
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine, RiUserLine } from "react-icons/ri"
import { NavLink } from "./NavLink"
import { NavSection } from "./NavSection"

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="GERAL">
          <NavLink text="Dashboard" icon={RiDashboardLine} />
          <NavLink text="Usuários" icon={RiContactsLine} />
        </NavSection>

        <NavSection title="AUTOMAÇÃO">
          <NavLink text="Formulários" icon={RiInputMethodLine} />
          <NavLink text="Automação" icon={RiGitMergeLine} />
        </NavSection>
      </Stack>
    </Box>
  )
}