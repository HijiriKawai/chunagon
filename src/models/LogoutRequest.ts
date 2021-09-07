type LogoutRequest = {
  grant_type: 'refresh_token';
  refresh_token: string;
};

export default LogoutRequest;
