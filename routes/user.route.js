const express = require('express')
const router = express.Router()
const usercontroller = require('../controllers/user.controller')
const authenticateToken = require('../middlewares/authenticatetoken')

router.get('/:UserId/videos', usercontroller.getUserVideos)

router.get('/subscription', authenticateToken, usercontroller.getSubscriptionList)

router.post('/subscribe', authenticateToken, usercontroller.subscribeToUser)

router.post('/notifications', authenticateToken, usercontroller.getNotifications)

router.post('/notifications/read',authenticateToken, usercontroller.readNotifications )

module.exports = router