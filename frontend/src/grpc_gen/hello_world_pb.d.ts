import * as jspb from 'google-protobuf'



export class HelloWorldRequest extends jspb.Message {
  getUserName(): string;
  setUserName(value: string): HelloWorldRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HelloWorldRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HelloWorldRequest): HelloWorldRequest.AsObject;
  static serializeBinaryToWriter(message: HelloWorldRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HelloWorldRequest;
  static deserializeBinaryFromReader(message: HelloWorldRequest, reader: jspb.BinaryReader): HelloWorldRequest;
}

export namespace HelloWorldRequest {
  export type AsObject = {
    userName: string,
  }
}

export class HelloWorldResponse extends jspb.Message {
  getText(): string;
  setText(value: string): HelloWorldResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HelloWorldResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HelloWorldResponse): HelloWorldResponse.AsObject;
  static serializeBinaryToWriter(message: HelloWorldResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HelloWorldResponse;
  static deserializeBinaryFromReader(message: HelloWorldResponse, reader: jspb.BinaryReader): HelloWorldResponse;
}

export namespace HelloWorldResponse {
  export type AsObject = {
    text: string,
  }
}

