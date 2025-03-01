import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Cookies from 'js-cookie';
// import { setAuth, setUser } from '../../Redux/AuthSlice';
import { setAuth } from '../Redx/AuthSlice';
import axios from 'axios';
import React from 'react';

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: any) => state.auth.user);

  useEffect(() => {
    const token = Cookies.get('access_token');
    const storedUser = localStorage.getItem('user');

    if (!token || !storedUser) {
      navigate('/signin');
      return;
    }

    dispatch(setAuth(token));
    // dispatch(setUser(JSON.parse(storedUser)));
  }, [dispatch, navigate]);

  return (
    <div className="dashboard">
      <h1>Welcome, {user?.name || 'User'}</h1>
      <p>Email: {user?.email}</p>
      <button
        onClick={() => {
          Cookies.remove('access_token');
          localStorage.removeItem('user');
          dispatch(setAuth(null));
          // dispatch(setUser(null));
          navigate('/signin');
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
