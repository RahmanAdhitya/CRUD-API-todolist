import { Box, Button, Center, Flex, HStack, Input, Spacer, Stack } from '@chakra-ui/react';
import React from 'react';
import axiosInstance from '../lib/api';

const TodoCard = ({ action, status, deleteBtn, editStatusBtn }) => {
  return (
    <Box borderRadius={8} w="md" shadow="lg" bgColor="gray.300">
      <Flex justifyContent="space-between">
        <Box margin={4} alignSelf="center">
          {action}
        </Box>
        <Box margin={3}>
          {status ? (
            <Button onClick={editStatusBtn} colorScheme="teal" size="md">
              Done
            </Button>
          ) : (
            <Button onClick={editStatusBtn} colorScheme="blackAlpha" size="md">
              Not Done
            </Button>
          )}
          <Button ms={4} colorScheme="orange" onClick={() => deleteBtn()}>
            Delete
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default TodoCard;
