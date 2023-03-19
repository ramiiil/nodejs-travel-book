const Travel = require('../models/travel.model');

//@Method:    GET
//@Desc    get all travels books
const getAllTravels = async (req, res) => {
    try {
        const travels = await Travel.find();
        res.status(200).json({
            message: 'succes',
            travels: travels.reverse(),
        })
    } catch (err) {
        res.send(err)
    }
}

//@Method:    GET
//@Desc    GET one travel book by id
const getTravelById = async (req, res) => {
    try {
        const travel = await Travel.findById(req.params.id);
        if (!travel) {
            return res.status(404).json({
                message: 'Not found'
            })
        }
        return res.status(200).json({
            message: 'success',
            travel,
        })
    } catch (err) {
        res.send(err)
    }
}

//@Method:    POST
//@Desc:    add new travel book
const addTravelBook = async (req, res) => {
    try {
        const { title, image, desc } = req.body;
        const newTravel = await Travel.create({
            title,
            image,
            desc,
        })
        res.status(201).json({
            message: 'success',
            newTravel,
        })
    } catch (err) {
        res.send(err)
    }
}

//@Method:    PUT
//@Desc:    Edit travel book by its id
const updateTravelBook = async (req, res) => {
    try {
        const { title, image, desc } = req.body;
        const updatedTravel = await Travel.findByIdAndUpdate(req.params.id, {
            title,
            image,
            desc,
        }) 
        res.status(200).json({
            message: 'success',
            updatedTravel,
        })
    } catch (err) {
        res.send(err)
    }
}

//@Method:    DELETE
//@Desc:    removing travel book by id
const removeTravelBook = async (req, res) => {
    try {
        const updatedTravel = await Travel.findByIdAndRemove(req.params.id);
        res.status(200).json({
            message: 'deleted',
        })
    } catch (err) {
        res.send(err)
    }
}


module.exports = {
    getAllTravels,
    getTravelById,
    addTravelBook,
    updateTravelBook,
    removeTravelBook,
};