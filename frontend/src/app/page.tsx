"use client";

import {
  HelloWorldRequest,
} from '../grpc_gen/hello_world_pb';
import {
  HelloWorldClient,
} from '../grpc_gen/Hello_worldServiceClientPb';
import { useEffect, useState } from 'react';

// Proxy Server Address
const address = 'http://127.0.0.1:8080';
const client = new HelloWorldClient(address);

export default function Page() {
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const request = new HelloWorldRequest();
    request.setUserName('Edward');

    const responseStream = client.say_hello_world(request);
    responseStream
      .on('data', (response) => {
        console.log(response.getText());
        setText(response.getText());
      })
      .on('error', (err) => {
        setError(`${err}`);
      });
  }, []);

  if (error) {
    return (
      <p style={{ color: 'red' }}>{
        `Error: ${error}`
      }</p>
    );
  }
  if (!text) {
    return (<>
      <p style={{
        animation: 'blinking 0.5s linear infinite',
      }}>{
        'Loading ...'
      }</p>
    </>);
  } else {
    return <h1>{text}</h1>;
  }
}
