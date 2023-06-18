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

export class HelloWorldRespond extends jspb.Message {
  getText(): string;
  setText(value: string): HelloWorldRespond;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HelloWorldRespond.AsObject;
  static toObject(includeInstance: boolean, msg: HelloWorldRespond): HelloWorldRespond.AsObject;
  static serializeBinaryToWriter(message: HelloWorldRespond, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HelloWorldRespond;
  static deserializeBinaryFromReader(message: HelloWorldRespond, reader: jspb.BinaryReader): HelloWorldRespond;
}

export namespace HelloWorldRespond {
  export type AsObject = {
    text: string,
  }
}

