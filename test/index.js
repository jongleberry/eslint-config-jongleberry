'use strict'

const exec = require('child_process').exec
const path = require('path')
const fs = require('fs')

describe('eslint-config-jongleberry', () => {
  fs.readdirSync(path.join(__dirname, 'fixtures')).forEach(file => {
    it(`should lint the file: ${file}`, done => {
      exec(`./node_modules/.bin/eslint test/fixtures/${file}`, done)
    })
  })
})
