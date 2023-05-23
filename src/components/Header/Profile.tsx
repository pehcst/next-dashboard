import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData ?: boolean;
}

export function Profile({ showProfileData = true}: ProfileProps) {
    return (
        <Flex align="center">
            { showProfileData && ( <Box mr="4" textAlign="right">
                <Text>Daniel Soares</Text>
                <Text color="gray.300" fontSize="small">
                    daniesoaresf@hotmail.com
                </Text>
            </Box>
            )}

            <Avatar size="md" name="Daneil Soares" />
        </Flex>
    );
}