'use strict'

import app from './app'

app.use(function * () {
  this.status = 204
})
