import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddOrUpdateForm from '../components/transaction/AddUpdateForm';

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
      <AddOrUpdateForm isOpened={true} handleClose={() => {}} />
    </div>
  );
};

export default Home;
