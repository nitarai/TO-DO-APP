const subtaskModel = require('./subtask.model');
const Model = require('./subtask.model');

// CRUD

    
const create = (payload) => {
    return subtaskModel.create(payload);
};
    
const list = () => {
    return subtaskModel.list();
};

const getById= (id) => {
    return subtaskModel.findOne({_id: id});
};


const updateByID = (id, payload) => {
    return subtaskModel.updateOne({_id: id});
};

const remove = (id) => {
    return subtaskModel.updateOne({_id: id});
};