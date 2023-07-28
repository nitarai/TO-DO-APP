const TodoModel = require('./todo.model');

// CRUD

const create = (payload) => {
    return TodoModel.create(payload);
};
    
const list = () => {
    return TodoModel.list();
};

const getById= (id) => {
    return TodoModel.findOne({_id: id});
};


const updateByID = (id, payload) => {
    return TodoModel.updateOne({_id: id});
};

const remove = (id) => {
    return TodoModel.updateOne({_id: id});
};


module.exports= {create, list, getById, updateByID, remove}