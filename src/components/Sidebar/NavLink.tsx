import { Link as ChakraLink, Text, Icon, LinkProps as ChakraLinkProps } from "@chakra-ui/react"
import { ElementType } from "react"
import Link from "next/link"
import { ActiveLink } from "../ActiveLink"

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  text: string;
  href: string;
}

export function NavLink({ text, icon, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink
        {...rest}
        display="flex"
        align="center"
      // _hover={{
      //   color: "pink.400"
      // }}
      // color="pink.400"
      >
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">{text}</Text>
      </ChakraLink>
    </ActiveLink>
  )
}