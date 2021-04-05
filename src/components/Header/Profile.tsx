import { Flex, Box, Text, Avatar } from "@chakra-ui/react"

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>André Souza</Text>
          <Text color="gray.300" fontSize="small">souza.andre1993@gmail.com</Text>
        </Box>
      )}

      <Avatar fontSize="20" name="André Souza" src="" />
    </Flex>
  )
}