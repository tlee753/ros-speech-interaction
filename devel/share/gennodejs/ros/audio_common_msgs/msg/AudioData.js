// Auto-generated. Do not edit!

// (in-package audio_common_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class AudioData {
  constructor() {
    this.data = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type AudioData
    // Serialize the length for message field [data]
    bufferInfo = _serializer.uint32(obj.data.length, bufferInfo);
    // Serialize message field [data]
    bufferInfo.buffer.push(obj.data);
    bufferInfo.length += obj.data.length;
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type AudioData
    let tmp;
    let len;
    let data = new AudioData();
    // Deserialize array length for message field [data]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [data]
    data.data = buffer.slice(0, len);
    buffer =  buffer.slice(len);
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'audio_common_msgs/AudioData';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'f43a8e1b362b75baa741461b46adc7e0';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    uint8[] data
    
    `;
  }

};

module.exports = AudioData;
