import React from "react";

const RegisterPage = () => {
  return (
    <div>
      <h1>Register Page</h1>
      <form action="/api/register" method="POST">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <a href="/login">Login here</a>
      </p>
    </div>
  );
};

export default RegisterPage;
