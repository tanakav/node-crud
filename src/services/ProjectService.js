const Project = require('../models/Project');

const findAll = async (request, response) => {
    const projects = await Project.find();
    return response.json(projects);
 }

 const findById = async (request, response) => {
    const { id } = request.params; 
    const project = await Project.findOne({ _id : id });

    return response.json(project);
}

const create = async (request, response) => {
    const { title, description } = request.body;

    const project = await Project.create({
        title, 
        description
    });    

    return response.json(project);
}

const update = async (request, response) => {
    const { id } = request.params;
    const { title, description } = request.body;
    
    const project = await Project.updateOne(
        {_id: id}, 
        {
        title,
        description
    });

    return response.json(project);

}

const deleteById = async (request, response) => {
    const { id } = request.params;
    const project = await Project.deleteOne({_id : id});

    return response.status(200).json({message: "Project deleted", project});
}

 module.exports = {
     findAll,
     findById,
     create,
     update,
     deleteById
 }