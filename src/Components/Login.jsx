import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../Redux/authSlice';

const Login = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const username = useSelector((state) => state.auth.username);
  const [inputUsername, setInputUsername] = useState('');

  const handleLogin = () => {
    if (inputUsername.trim()) {
      dispatch(login({ username: inputUsername.trim() }));
      setInputUsername('');
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow-md">
      {isLoggedIn ? (
        <>
          <p className="text-lg font-medium">Welcome, {username}!</p>
          <button
            onClick={handleLogout}
            className="mt-3 bg-red-500 text-white px-4 py-2 rounded-full"
          >
            Logout
          </button>
        </>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Enter username"
            value={inputUsername}
            onChange={(e) => setInputUsername(e.target.value)}
            className="border px-3 py-2 rounded-lg w-full mb-3"
          />
          <button
            onClick={handleLogin}
            className="bg-blue-500 text-white px-4 py-2 rounded-full"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
