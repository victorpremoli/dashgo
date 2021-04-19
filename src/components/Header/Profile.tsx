import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex aling="center" >
      {showProfileData && (
        <Box mr="4" textAlign="right" >
          <Text>Victor Premoli</Text>
          <Text color="gray.300" fontSize="small">
            victorpremoli@gmail.com
        </Text>
        </Box>
      )}
      <Avatar size="md" name="Victor Premoli" src="https://github.com/victorpremoli.png" />
    </Flex>
  );
}