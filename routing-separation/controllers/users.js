const { StatusCodes } = require('http-status-codes');

const getUsers = (req, res) => {
    console.log("get users called");
    res.status(StatusCodes.OK).send("get users");
};

const getUser = (req, res) => {
    const { id } = req.params;
    console.log("get user called");
    res.status(StatusCodes.OK).send("get user");
};

const createUser = (req, res) => {
    res.status(StatusCodes.CREATED).json({
        user: "user1"
    });
}

const removeUser = (req, res) => {
    res.status(StatusCodes.OK).json({
        message: "removed"
    });
};

const updateUser = (req, res) => {
    res.status(StatusCodes.OK).json({
        message: "updated"
    });
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    removeUser,
    updateUser,
}
