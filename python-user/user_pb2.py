# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: user.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\nuser.proto\x12\x04user\"N\n\rUpdateUserMsg\x12\n\n\x02id\x18\x01 \x01(\t\x12\x10\n\x08username\x18\x02 \x01(\t\x12\r\n\x05\x65mail\x18\x03 \x01(\t\x12\x10\n\x08\x66ullname\x18\x04 \x01(\t\"S\n\x12UpdateUserResponse\x12\n\n\x02id\x18\x01 \x01(\t\x12\x10\n\x08username\x18\x02 \x01(\t\x12\r\n\x05\x65mail\x18\x03 \x01(\t\x12\x10\n\x08\x66ullname\x18\x04 \x01(\t2J\n\x0bUserService\x12;\n\nUpdateUser\x12\x13.user.UpdateUserMsg\x1a\x18.user.UpdateUserResponseb\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'user_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  _UPDATEUSERMSG._serialized_start=20
  _UPDATEUSERMSG._serialized_end=98
  _UPDATEUSERRESPONSE._serialized_start=100
  _UPDATEUSERRESPONSE._serialized_end=183
  _USERSERVICE._serialized_start=185
  _USERSERVICE._serialized_end=259
# @@protoc_insertion_point(module_scope)
