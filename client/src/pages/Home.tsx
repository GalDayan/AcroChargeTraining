import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CustomerCard from '../components/customer/Customer';

const Home = () => {
  const [welcomeMsg, setWelcomeMsg] = useState<string>('');

  useEffect(() => {
    (async () => {
      const res = await axios.get('/api/start');
      setWelcomeMsg(res.data.msg);
    })();
  }, []);

  return (
    <div className="App-header">
      {/* <Customer  /> */}
    </div>
  );
};

export default Home;
