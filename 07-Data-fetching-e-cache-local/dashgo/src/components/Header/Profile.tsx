import { Avatar, Box, Flex, Text } from "@chakra-ui/react"

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
          <Box mr="4" textAlign="right">
          <Text>Davilson Junior</Text>
          <Text color="gray.300" fontSize="small">
            davilsonjunior.jobs@gmail.com
          </Text>
        </Box>
      )}
      <Avatar size="md" name="Davilson Junior" src="https://github.com/DavilsonJunior.png" />
  </Flex>
  )
}