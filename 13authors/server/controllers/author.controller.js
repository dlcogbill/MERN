const Author = require('../models/author.model');

module.exports = {
    
    getAuthors: (request, response) => {
        Author.find()
        .then((allAuthors) => {
            response.json(allAuthors);
        })
        .catch((error) => {
            response.status(400).json({ message: 'Something went wrong in findAll', error: error });
        });
    },
    
    createAuthor: (request, response) => {
        Author.create(request.body)
        .then((newAuthor) => {
            response.json(newAuthor);
        })
        .catch((error) => {
            response.status(400).json({ message: 'Something went wrong in create', error: error });
        });
    },
    
    getAuthorById: (request, response) => {
        Author.findOne({ _id: request.params.id })
        .then((oneAuthor) => {
            response.json(oneAuthor);
        })
        .catch((error) => {
            response.status(400).json({ message: 'Something went wrong in findById', error: error });
        });
    },
    
    deleteAuthor: (request, response) => {
        Author.deleteOne({ _id: request.params.id })
        .then((author) => {
            response.json(author);
        })
        .catch((error) => {
            response.status(400).json({ message: 'Something went wrong in delete', error: error });
        });
    },
    
    updateAuthor: (request, response) => {
        Author.findByIdAndUpdate(request.params.id, request.body, { new: true, runValidators: true })
        .then((updatedAuthor) => {
            response.json(updatedAuthor);
        })
        .catch((error) => {
            response.status(400).json({ message: 'Something went wrong in update', error: error });
        });
    },
};