'use strict'

const exec = require('child_process').exec
const assert = require('assert')
const path = require('path')
const fs = require('fs')

describe('eslint-config-jongleberry', () => {
  describe('these files should pass linting:', () => {
    fs.readdirSync(path.join(__dirname, 'fixtures/pass')).forEach(file => {
      it(`pass/${file}`, done => {
        exec(`./node_modules/.bin/eslint test/fixtures/pass/${file}`, (err, stdout, stderr) => {
          if (err) {
            console.error(err.stack)
            console.error(stdout.toString())
            console.error(stderr.toString())
            done(err)
            return
          }

          done()
        })
      })
    })
  })

  describe('these files should not pass linting:', () => {
    fs.readdirSync(path.join(__dirname, 'fixtures/fail')).forEach(file => {
      it(`fail/${file}`, done => {
        exec(`./node_modules/.bin/eslint test/fixtures/fail/${file}`, (err, stdout, stderr) => {
          /* eslint no-console: 0 */
          assert(err)
          console.log(stdout)
          done()
        })
      })
    })
  })
})
