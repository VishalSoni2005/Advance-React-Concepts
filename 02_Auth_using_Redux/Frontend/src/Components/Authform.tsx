import {
  Anchor,
  Button,
  Checkbox,
  Divider,
  Group,
  Paper,
  PaperProps,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import axios from 'axios';
import { useForm } from '@mantine/form';
import { upperFirst } from '@mantine/hooks';
import { GoogleButton } from './GoogleButton';
import { TwitterButton } from './TwitterButton';

import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';

// import Cookies from 'js-cookie';
import { addUser } from '../Redux/UserSlice';
import { setAuth } from '../Redux/AuthSlice';
// import { setAuth, signin, signup } from '../Redux/Slice';

interface AuthenticationFormProps extends PaperProps {
  type: 'signin' | 'signup';
}

export function AuthenticationForm({
  type,
  ...props
}: AuthenticationFormProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

      const { token } = response.data; // Extract token from response
      const { email, name, profile_img } = response.data.user; // Extract name and email from response

      console.log(response.data.user);

      if (token) {
        dispatch(setAuth({ token, email }));
        dispatch(addUser({ name, email, profile_img }));
       //  Cookies.set('authToken', token, { expires: 7 });
       //  Cookies.set('userEmail', email, { expires: 7 }); // Set email in cookies
        navigate('/interface');
      }
    } catch (error) {
      console.error(`Error during ${route}:`, error);
    }
  };
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const serverRoute = type === 'signin' ? 'signin' : 'signup';
    userAuthThroughServer(serverRoute, form.values);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-500">
      <Paper radius="md" p="xl" withBorder {...props}>
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
