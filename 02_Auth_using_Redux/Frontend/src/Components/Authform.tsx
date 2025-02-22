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
import { setToken } from '../Redux/Slice';

interface AuthenticationFormProps extends PaperProps {
  type: 'signin' | 'signup';
}

export function AuthenticationForm({
  type,
  ...props
}: AuthenticationFormProps) {
  const dispatch = useDispatch();
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
      terms: true,
    },

    //   validate: {
    //     email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
    //     password: (val) =>
    //       val.length <= 6
    //         ? 'Password should include at least 6 characters'
    //         : null,
  });


  const handleFormSubmit = async () => {
    console.log(form.values);

    const { name, email, password } = form.values;
    const formData = {
      name,
      email,
      password,
    };

    try {
      const requestToBackend = await axios.post(
        'http://localhost:3000/signup',
        formData,
        {
          withCredentials: true, // Include credentials (cookies) in the request
        }
      );

      const access_token = requestToBackend.data.token;

      // const token = access_token.split('=')[1];
      const token = access_token.split('=')[1]

      dispatch(setToken(token));
      navigate('/');
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-500">
      <Paper radius="md" p="xl" withBorder {...props}>
        <Text size="lg" fw={500}>
          Welcome, {type} with
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

        <form onSubmit={form.onSubmit(handleFormSubmit)}>
          <Stack>
            {type === 'signup' && (
              <TextInput
                label="Name"
                placeholder="Your name"
                value={form.values.name}
                onChange={(event) =>
                  form.setFieldValue('name', event.currentTarget.value)
                }
                radius="md"
              />
            )}

            <TextInput
              required
              label="Email"
              placeholder="hello@mantine.dev"
              value={form.values.email}
              onChange={(event) =>
                form.setFieldValue('email', event.currentTarget.value)
              }
              error={form.errors.email && 'Invalid email'}
              radius="md"
            />

            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              value={form.values.password}
              onChange={(event) =>
                form.setFieldValue('password', event.currentTarget.value)
              }
              error={
                form.errors.password &&
                'Password should include at least 6 characters'
              }
              radius="md"
            />

            {type === 'signup' && (
              <Checkbox
                label="I accept terms and conditions"
                checked={form.values.terms}
                onChange={(event) =>
                  form.setFieldValue('terms', event.currentTarget.checked)
                }
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
