// test_api_component.js
import React, { useEffect } from 'react';
import { fetchContentDetailsByIdOrFallback } from './api';

const TestComponent = () => {
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchContentDetailsByIdOrFallback(456);
      console.log(data);
    };

    fetchData();
  }, []);

  return <div>Test Component</div>;
};

export default TestComponent;
