import React from 'react';
import { Link } from 'react-router';
import { Group, Button, Container } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Redux/Store';
import { logout } from '../Redux/Slice';

const Navbar: React.FC = () => {
  //todo: note state is stored in store
  const token = useSelector((state: RootState) => state.auth.token);
 //  console.log('Token from Redux store:', token);

  const dispatch = useDispatch();

  return (
    <nav className="sticky top-0 z-50 w-full bg-gray-300 shadow-md border-b border-gray-400">
      <Container className="flex justify-between items-center py-4">
        {/* Logo / Home */}
        <Link to="/" className="text-xl font-semibold text-gray-800">
          Chat App
        </Link>

        {/* Navigation Links */}
        <Group className="gap-4">
          <Link to="/" className="text-gray-700 hover:text-black">
            <Button variant="subtle">Home</Button>
          </Link>

          {token ? (
            <>
              <Link to="/interface">
                <Button variant="subtle">Interface</Button>
              </Link>

              <Button
                onClick={() => {
                  document.cookie =
                    'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
                  window.location.reload();
                  dispatch(logout());
                }}
                variant="outline"
                color="red"
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/signin">
                <Button variant="outline">Sign In</Button>
              </Link>
              <Link to="/signup">
                <Button variant="filled">Sign Up</Button>
              </Link>
            </>
          )}
        </Group>
      </Container>
    </nav>
  );
};

export default Navbar;
