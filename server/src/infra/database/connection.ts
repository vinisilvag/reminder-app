import mongoose from 'mongoose'

import { DATABASE_URL } from '@config/env/database'

mongoose
  .connect(DATABASE_URL)
  .then(() => {
    console.log('📦 DB is ready!')
  })
  .catch(err => {
    console.log(err)
  })
