const user = require('../models/user.model') 
const video = require('../models/video.model')
const subscription  = require('../models/subscription.model')
const notification = require('../models/notification.model')
const comment = require('../models/comment.model')

exports.getUserVideos = async (req, res, next) => {
    // let foundUser = await user.findOne({ where: { username: req.user.username } })
    // let data = await foundUser.getVideos()
    let data = await video.findAll({
        where: { UserId: req.params.UserId },
        attributes : ['id','title','description','views','createdAt','UserId'],
        include : {
            model : user,
            attributes : ['username']
        }
    })
    // let finalData = data.map(x => x.toJSON())
    return res.status(200).json(data)
}


//'as' tell which model to display
//it cant tell b/w 2 foreign key without it , check sync.js for association
exports.getSubscriptionList = async (req, res, next) => {
        let list = await subscription.findAll({
            where : {
                subscriber_id : req.user.id
            },
            include : {
                model : user,
                as : 'subscribedto',
                attributes : ['id','username'],
                include : {
                    model  : video,
                    limit : 5,
                    attributes : ['id','title','description','views','createdAt','UserId']
                }
            },
        })
        // let finalList = list.map(x => x.toJSON())
        return res.status(200).json(list)
}

exports.subscribeToUser = async (req, res, next) => {
    if(req.user.id == req.body.UserId){
        return res.status(400).json({message : "Can't subscribe to yourself, idiot!"})
    }
    //check user if he has already subscribed
    let subscribed = subscription.create({subscriber_id: req.user.id, subscribedto_id : req.body.UserId})
    if(subscribed){
        return res.status(200).json({message : "Subscribed"})
    }else{
        return res.status(400).json({message : "Subscription failed"})
    }
}

exports.getNotifications = async (req, res, next) => {
    let allnotifications = await notification.findAndCountAll({
        where:{
            UserId : req.user.id,
            viewed : false
        },
        attributes : ['id','createdAt'],
        include : {
            model : comment,
            attributes : ['comment'],
            include: {
                model : user,
                attributes : ['username']
            }
        }
    })
    if(notification){
        return res.status(200).json(allnotifications)
    }else{
        return res.status(400).json("Some error occured")
    }
}