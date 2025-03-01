import React, { useEffect } from 'react';
import { Link } from 'react-router';
import { Group, Button, Container } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redx/AuthSlice';

const Navbar: React.FC = () => {
  let token = document.cookie.split('=')[1];

  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) {
      dispatch(logout());
    }
  }, [token]);

  return (
    <nav className="sticky top-0 z-50 w-full bg-gray-300 shadow-md border-b border-gray-400">
      <Container className="flex justify-between items-center py-4">
        {/* Logo / Home */}
        <Link to="/" className="text-xl font-semibold text-gray-800">
          Suck It Gym
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

              <Link to="/dashboard">
                <Button variant="subtle">Dashboard</Button>
              </Link>

              <Button
                onClick={() => {
                  dispatch(logout());
                }}
                variant="subtle"
                color="pink"
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
