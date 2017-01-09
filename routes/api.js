var express = require('express')
apiRouter = express.Router()
apiController = require('../controllers/api.js')

// apiRouter.get('/', (req, res) => {
//   res.json({message: "All songs!"})
// })

apiRouter.get('/', apiController.index)
apiRouter.post('/', apiController.create)
apiRouter.patch('/:id', apiController.update)
apiRouter.delete('/:id', apiController.destroy)


// apiRouter.get('/:id', (req, res) => {
//   res.json({message: "One single song!"})
// })

apiRouter.get('/:id', apiController.show)

module.exports = apiRouter
