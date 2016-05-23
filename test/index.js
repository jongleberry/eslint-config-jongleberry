'use strict'

const exec = require('child_process').exec
const assert = require('assert')
const path = require('path')
const fs = require('fs')

describe('eslint-config-jongleberry', () => {
  describe('these files should pass linting:', () => {
    fs.readdirSync(path.join(__dirname, 'fixtures/pass')).forEach(file => {
      it(`pass/${file}`, done => {
        exec(`./node_modules/.bin/eslint test/fixtures/pass/${file}`, done)
      })
    })
  })

  describe('these files should not pass linting:', () => {
    fs.readdirSync(path.join(__dirname, 'fixtures/fail')).forEach(file => {
      it(`fail/${file}`, done => {
        exec(`./node_modules/.bin/eslint test/fixtures/fail/${file}`, err => {
          assert(err)
          done()
        })
      })
    })
  })
})
