import { Link, Text, Icon, LinkProps as ChakraLinkProps } from "@chakra-ui/react"
import { ElementType } from "react"

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  text: string;
}

export function NavLink({ text, icon, ...rest }: NavLinkProps) {
  return (
    <Link
      {...rest}
      display="flex"
      align="center"
      _hover={{
        color: "pink.400"
      }}
    // color="pink.400"
    >
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">{text}</Text>
    </Link>
  )
}