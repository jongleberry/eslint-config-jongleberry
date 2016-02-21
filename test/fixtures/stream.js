'use strict'

const Stream = require('stream').PassThrough

const stream = new Stream()

let size = 0
stream.on('data', chunk => size += chunk.length)
