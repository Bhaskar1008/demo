const config = {
    useMockData: true, // Toggle between mock and API data
    apiEndpoints: {
      baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000/api',
      quotationsPolicies: '/quotations_policies'
    }
  };
  
  export default config;