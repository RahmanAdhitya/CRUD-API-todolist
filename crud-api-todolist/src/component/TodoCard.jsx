import { Box, Button, Center, Flex, HStack, Input, Spacer, Stack } from '@chakra-ui/react';
import React from 'react';
import axiosInstance from '../lib/api';

const TodoCard = ({ action, status, deleteBtn }) => {
  return (
    <Box borderRadius={8} w="md" shadow="lg" bgColor="gray.300">
      <Input placeholder="edit action" />
      <Flex justifyContent="space-between">
        <Box margin={4} alignSelf="center">
          {action}
        </Box>
        <Box margin={3}>
          <Button colorScheme="yellow">{status}</Button>
          <Button ms={4} colorScheme="orange" onClick={() => deleteBtn()}>
            Delete
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default TodoCard;
