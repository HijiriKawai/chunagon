const baseUrl = () => {
  if (process.env.NODE_ENV === 'production') {
    return process.env.REACT_APP_PRODUCTION_DAINAGON_URL;
  }

  return process.env.REACT_APP_DEVELOPMENT_DAINAGON_URL;
};

export default baseUrl;
