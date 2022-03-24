import { Box, Button, Center, Flex, HStack, Input, Stack } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import TodoCard from '../../component/TodoCard';
import axiosInstance from '../../lib/api';

const todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const fetchPost = async () => {
    try {
      const res = await axiosInstance.get('/');
      setTodoList(res.data.result);
    } catch (err) {
      console.log(res.data.message);
    }
  };

  const deleteListBtn = async (id) => {
    try {
      console.log(id);
      const res = await axiosInstance.delete(`/${id}`);
      setTodoList(res.data.result);
    } catch (error) {
      console.log(res.data.message);
    }
  };
  const renderList = () => {
    return todoList.map((val) => {
      return (
        <Center margin={4}>
          <TodoCard
            action={val.action}
            status={val.status}
            deleteBtn={() => {
              deleteListBtn(val.id);
            }}
            editStatusBtn={() => {
              editStatusHandler(val.id);
            }}
          />
        </Center>
      );
    });
  };

  const inputHandler = (event) => {
    const { value, name } = event.target;

    setInputValue(value, name);
  };

  const createBtn = async () => {
    try {
      const newData = {
        action: inputValue,
      };
      console.log(newData);
      const res = await axiosInstance.post(`/`, newData);
      setTodoList(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  const editStatusHandler = async (id) => {
    console.log(todoList);
    const dataToFind = todoList.find((val) => {
      return val.id == id;
    });

    console.log(dataToFind);
    const newStatus = {
      status: !dataToFind.status,
    };

    const res = await axiosInstance.patch(`/${id}`, newStatus);
    setTodoList(res.data.result);
  };

  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <Stack mt={4} alignItems="center">
      <HStack width="md">
        <Input name="action" onChange={inputHandler} placeholder="input your activity" />
        <Button width="xm" onClick={() => createBtn()}>
          Create
        </Button>
      </HStack>
      <Box>{renderList()}</Box>;
    </Stack>
  );
};

export default todo;
