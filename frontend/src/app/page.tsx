"use client";

import {
  HelloWorldRequest,
} from '../grpc_gen/hello_world_pb';
import {
  HelloWorldClient,
} from '../grpc_gen/Hello_worldServiceClientPb';
import useSWR from 'swr';

// Frontend Address
const address = 'http://127.0.0.1:8080';
const client = new HelloWorldClient(address);

export default function Page() {
  const { data: text, error, isLoading } = useSWR(
    'Edward',
    async (userName) => {
      const request = new HelloWorldRequest();
      request.setUserName(userName);

      const response = await client.say_hello_world(
        request,
        { deadline: `${Date.now() + 3000}` },
      );
      return respose.getText();
    },
    {
      errorRetryCount: 2,
    }
  );

  if (isLoading) {
    return (<>
      <p style={{
        animation: 'blinking 0.5s linear infinite',
      }}>{
        'Loading ...'
      }</p>
    </>);
  }
  if (error) {
    return (
      <p style={{ color: 'crimson' }}>{
        `Error: ${error}`
      }</p>
    );
  }
  return <h1>{text}</h1>;
}
