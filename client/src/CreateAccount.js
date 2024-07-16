// src/CreateAccount.js

import React, { useState } from 'react';

function CreateAccount() {
  const [keypair, setKeypair] = useState({ publicKey: '', secret: '' });
  const [publicKeyToFund, setPublicKeyToFund] = useState('');
  const [fundingMessage, setFundingMessage] = useState('');

  const generateKeypair = async () => {
    console.log('Generate Keypair button clicked');
    try {
      const response = await fetch('http://localhost:3001/create-keypair', {
        method: 'POST',
      });
      const data = await response.json();
      console.log('Keypair generated:', data);
      setKeypair({
        publicKey: data.publicKey,
        secret: data.secret,
      });
      setPublicKeyToFund(data.publicKey);  
    } catch (error) {
      console.error('Error generating keypair:', error);
    }
  };

  const fundAccount = async () => {
    console.log('Fund Account button clicked');
    try {
      const response = await fetch('http://localhost:3001/fund-account', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ publicKey: publicKeyToFund }),
      });
      const data = await response.json();
      console.log('Account funded:', data);
      setFundingMessage(data.message);
    } catch (error) {
      console.error('Error funding account:', error);
      setFundingMessage('Error funding account.');
    }
  };

  return (
    <div className="App  p-24">
      <h1 className='text-4xl font-bold p-4 underline'>Create Account</h1>

      <section>
        
     
        <button onClick={generateKeypair} className='border border-white p-2 text-xl rounded'>Generate Keypair</button>
        <div className='flex flex-col gap-5 p-5 '>
          <p><strong>Public Key:</strong> {keypair.publicKey}</p>
          <p><strong>Secret Key:</strong> {keypair.secret}</p>
        </div>
      </section>
      <h1 className='text-slate-500'> Note: down the wallet details for making transactions.</h1>
      <section className='flex flex-col justify-center items-center gap-5'   >
        <h2 className='text-2xl underline '>Fund Account</h2>
       
        <input
          type="text"
          placeholder="Enter Public Key"
          value={publicKeyToFund}
          onChange={(e) => setPublicKeyToFund(e.target.value)}
          className='p-2 rounded w-6/12 text-black'
        />
        <button className='border border-white p-2 text-xl rounded' onClick={fundAccount}>Get Test DIAM</button>
        <p className='text-white text-xl'>{fundingMessage}</p>
      </section>
    </div>
  );
}

export default CreateAccount;
