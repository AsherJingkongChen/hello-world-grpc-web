from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Optional as _Optional

DESCRIPTOR: _descriptor.FileDescriptor

class HelloWorldRequest(_message.Message):
    __slots__ = ["user_name"]
    USER_NAME_FIELD_NUMBER: _ClassVar[int]
    user_name: str
    def __init__(self, user_name: _Optional[str] = ...) -> None: ...

class HelloWorldResponse(_message.Message):
    __slots__ = ["text"]
    TEXT_FIELD_NUMBER: _ClassVar[int]
    text: str
    def __init__(self, text: _Optional[str] = ...) -> None: ...
