type LoginRequest = {
  grant_type: 'password';
  username: string;
  password: string;
};

export default LoginRequest;
