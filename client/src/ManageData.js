// src/ManageData.js

import React, { useState } from 'react';

function ManageData() {
  const [senderSecret, setSenderSecret] = useState('');
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');
  const [manageDataMessage, setManageDataMessage] = useState('');

  const manageData = async () => {
    console.log('Manage Data button clicked');
    try {
      const response = await fetch('http://localhost:3001/manage-data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          senderSecret,
          key,
          value,
        }),
      });
      const data = await response.json();
      console.log('Data managed:', data);
      setManageDataMessage(data.message);
    } catch (error) {
      console.error('Error managing data:', error);
      setManageDataMessage('Error managing data.');
    }
  };

  return (
    <div className="App p-24">
      <h1 className='text-4xl font-bold p-4 '>Manage Data</h1>

      <section className='flex flex-col justify-center items-center gap-7 '>
       
        <input
          type="text"
          placeholder="Sender Secret Key"
          value={senderSecret}
          onChange={(e) => setSenderSecret(e.target.value)}
           className='p-2 rounded w-6/12 text-black'
        />
        <input
          type="text"
          placeholder="Key"
          value={key}
          onChange={(e) => setKey(e.target.value)}
           className='p-2 rounded w-6/12 text-black'
        />
        <input
          type="text"
          placeholder="Value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
           className='p-2 rounded w-6/12 text-black'
        />
        <button onClick={manageData} className='border border-white p-2 text-xl rounded' >Submit</button>
        <p>{manageDataMessage}</p>
      </section>
    </div>
  );
}

export default ManageData;
