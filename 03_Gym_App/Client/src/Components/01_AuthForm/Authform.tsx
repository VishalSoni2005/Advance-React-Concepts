import {
  Anchor,
  Button,
  Checkbox,
  Divider,
  Group,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from '@mantine/form';
import { upperFirst } from '@mantine/hooks';
import { GoogleButton } from './GoogleButton';
import { TwitterButton } from './TwitterButton';
import { useNavigate } from 'react-router';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../../Redx/AuthSlice';

interface AuthenticationFormProps {
  type: 'signin' | 'signup';
}

export function AuthenticationForm({ type }: AuthenticationFormProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authToken = useSelector((state: any) => state.auth.token);

  useEffect(() => {
    const storedToken = Cookies.get('access_token');
    if (storedToken) {
      dispatch(setAuth(storedToken));
      navigate('/dashboard');
    }
  }, [dispatch, navigate]);

  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
      terms: true,
    },
  });

  const userAuthThroughServer = async (
    route: string,
    data: typeof form.values
  ) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/${route}`,
        data,
        {
          withCredentials: true,
        }
      );

      const userData = response.data.user;
      const access_token = response.data.token;

      Cookies.set('access_token', access_token);
      dispatch(setAuth(access_token));
      localStorage.setItem('user', JSON.stringify(userData));
      navigate('/dashboard');
    } catch (error) {
      alert(error.response?.data?.message || 'Authentication failed');
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    userAuthThroughServer(type === 'signin' ? 'signin' : 'signup', form.values);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-500">
      <Paper radius="md" p="xl" withBorder>
        <Text size="lg" fw={500}>
          Welcome, {upperFirst(type)} with
        </Text>

        <Group grow mb="md" mt="md">
          <GoogleButton radius="xl">Google</GoogleButton>
          <TwitterButton radius="xl">Twitter</TwitterButton>
        </Group>

        <Divider
          label="Or continue with email"
          labelPosition="center"
          my="lg"
        />

        <form onSubmit={handleFormSubmit}>
          <Stack>
            {type === 'signup' && (
              <TextInput
                label="Name"
                placeholder="Your name"
                {...form.getInputProps('name')}
                radius="md"
              />
            )}
            <TextInput
              required
              label="Email"
              placeholder="hello@example.com"
              {...form.getInputProps('email')}
              radius="md"
            />
            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              {...form.getInputProps('password')}
              radius="md"
            />
            {type === 'signup' && (
              <Checkbox
                label="I accept terms and conditions"
                {...form.getInputProps('terms', { type: 'checkbox' })}
              />
            )}
          </Stack>
          <Group justify="space-between" mt="xl">
            <Anchor component="button" type="button" c="dimmed" size="xs">
              {type === 'signup'
                ? 'Already have an account? Login'
                : "Don't have an account? Register"}
            </Anchor>
            <Button type="submit" radius="xl">
              {upperFirst(type)}
            </Button>
          </Group>
        </form>
      </Paper>
    </div>
  );
}

export default AuthenticationForm;

// Dashboard Component
export function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  const handleLogout = () => {
    Cookies.remove('access_token');
    localStorage.removeItem('user');
    navigate('/signin');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome, {user.name || 'User'}</h1>
      <p>Email: {user.email}</p>
      <button
        onClick={handleLogout}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}
