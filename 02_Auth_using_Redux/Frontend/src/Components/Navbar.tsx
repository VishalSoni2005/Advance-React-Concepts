import React from 'react';
import { Link } from 'react-router';
import { Group, Button } from '@mantine/core';

const Navbar: React.FC = () => {
  return (
    <div className="z-10 sticky top-0 flex justify-between items-center gap-2 w-full px-[5vw] py-5 h-[80px] border-b border-grey bg-gray-300 ">
      <Group
        justify="space-between"
        p="md"
        style={{ borderBottom: '1px solid #ddd' }}
      >
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Button variant="subtle">Home</Button>
        </Link>
        <Group className="flex gap-2 translate-x-[50%]">
          <Link
            to="/signin"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Button variant="outline">Sign In</Button>
          </Link>
          <Link
            to="/signup"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Button variant="filled">Sign Up</Button>
          </Link>
          <Button
            onClick={() => {
              document.cookie =
                'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
              window.location.reload();
            }}
            variant="ghost"
            size="sm"
          >
            Logout
          </Button>
        </Group>
      </Group>
    </div>
  );
};

export default Navbar;
