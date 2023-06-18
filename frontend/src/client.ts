import {
  HelloWorldRequest,
  HelloWorldRespond,
} from './pb_gen/hello_world_pb';
import {
  HelloWorldClient,
} from './pb_gen/Hello_worldServiceClientPb';

const client = new HelloWorldClient('http://localhost:50051');

const request = new HelloWorldRequest();
request.setUserName('Edward');

client
  .say_hello_world(request, null)
  .then((res: HelloWorldRespond) => {
    console.log(res.getText());
  });
