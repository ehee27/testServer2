import express from 'express'

const app = express()
const port = 3500

app.get('/', (req, res) => {
  res.send('Server is live, Scottie.')
})

app.listen(port, () => console.log(`Listening on port ${port}`))
