import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Spinners = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Your API call using Axios or any other library
        const response = await axios.get('your-api-endpoint');

        // Set the data in state
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <div>
      <ClipLoader css={override} size={150} color={'#123abc'} loading={loading} />
      {data && (
        <div>
          {/* Render your data here */}
          <p>{data.someProperty}</p>
        </div>
      )}
    </div>
  );
};

export default Spinners;
