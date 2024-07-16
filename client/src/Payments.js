// src/Payments.js

import React, { useState } from 'react';

function Payments() {
  const [senderSecret, setSenderSecret] = useState('');
  const [receiverPublicKey, setReceiverPublicKey] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentMessage, setPaymentMessage] = useState('');

  const makePayment = async () => {
    console.log('Make Payment button clicked');
    try {
      const response = await fetch('http://localhost:3001/make-payment', {
    
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          senderSecret,
          receiverPublicKey,
          amount,
        }),
      });
      console.log('hello')
      const data = await response.json();
      console.log('Payment made:', data);
      setPaymentMessage(data.message);
    } catch (error) {
      console.error('Error making payment:', error);
      setPaymentMessage('Error making payment.');
    }
  };

  return (
    <div className="App p-24 flex flex-col gap-5">
      <h1 className='text-4xl font-bold p-4 underline'>Payments</h1>

      <section className='flex flex-col gap-7 justify-center items-center'>
     
        <input
          type="text"
          placeholder="Sender Secret Key"
          value={senderSecret}
          onChange={(e) => setSenderSecret(e.target.value)}
          className='p-2 rounded w-6/12 text-black'
        />
        <input
          type="text"
          placeholder="Receiver Public Key"
          value={receiverPublicKey}
          onChange={(e) => setReceiverPublicKey(e.target.value)}
          className='p-2 rounded w-6/12 text-black'
        />
        <input
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className='p-2 rounded w-6/12 text-black'
        />
        <button onClick={makePayment} className='border border-white p-2 text-xl rounded'>submit</button>
        <p>{paymentMessage}</p>
      </section>
    </div>
  );
}

export default Payments;
