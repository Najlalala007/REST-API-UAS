'use strict';

const response = require('./res');
const connection = require('./config/connection');


// laguku Controller

// 1. Get a list of all laguku
exports.getAlllaguku = async (req, res) => {
    try {
        const query = 'SELECT * FROM laguku';
        const laguku = await handleQuery(query, []);
        response.ok(laguku, res);
    } catch (error) {;
        console.error(error);
        response.error("Internal Server Error", res);
    }
};

// 2. Get details of a song by song id
exports.getSongById = async (req, res) => {
    try {
        const id = req.params.id;
        const query = 'SELECT * FROM laguku WHERE id = ?';
        const song = await handleQuery(query, [id]);
        response.ok(song, res);
    } catch (error) {
        console.error(error);
        response.error("Internal Server Error", res);
    }
};

// 3. Add a new song
exports.addSong = async (req, res) => {
    try {
        const song = req.body;
        const query = 'INSERT INTO laguku SET ?';
        await handleQuery(query, song);
        response.ok("Song added successfully.", res);
    } catch (error) {
        console.error(error);
        response.error("Internal Server Error", res);
    }
};

// 4. Update details of a song
exports.updateSong = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedSong = req.body;
        const query = 'UPDATE laguku SET ? WHERE id = ?';
        await handleQuery(query, [updatedSong, id]);
        response.ok("Song updated successfully.", res);
    } catch (error) {
        console.error(error);
        response.error("Internal Server Error", res);
    }
};

// 5. Delete a song
exports.deleteSong = async (req, res) => {
    try {
        const id = req.params.id;
        const query = 'DELETE FROM laguku WHERE id = ?';
        await handleQuery(query, [id]);
        response.ok("Song deleted successfully.", res);
    } catch (error) {
        console.error(error);
        response.error("Internal Server Error", res);
    }
};

// Users Controller

// 1. Get a list of all users
exports.getAllUsers = async (req, res) => {
    try {
        const query = 'SELECT * FROM users';
        const users = await handleQuery(query, []);
        response.ok(users, res);
    } catch (error) {
        console.error(error);
        response.error("Internal Server Error", res);
    }
};

// 2. Get details of a user by user id
exports.getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const query = 'SELECT * FROM users WHERE id_user = ?';
        const user = await handleQuery(query, [id]);
        response.ok(user, res);
    } catch (error) {
        console.error(error);
        response.error("Internal Server Error", res);
    }
};

// 3. Add a new user
exports.addUser = async (req, res) => {
    try {
        const user = req.body;
        const query = 'INSERT INTO users SET ?';
        await handleQuery(query, user);
        response.ok("User added successfully.", res);
    } catch (error) {
        console.error(error);
        response.error("Internal Server Error", res);
    }
};

// 4. Update details of a user
exports.updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedUser = req.body;
        const query = 'UPDATE users SET ? WHERE id_user = ?';
        await handleQuery(query, [updatedUser, id]);
        response.ok("User updated successfully.", res);
    } catch (error) {
        console.error(error);
        response.error("Internal Server Error", res);
    }
};

// 5. Delete a user
exports.deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const query = 'DELETE FROM users WHERE id_user = ?';
        await handleQuery(query, [id]);
        response.ok("User deleted successfully.", res);
    } catch (error) {
        console.error(error);
        response.error("Internal Server Error", res);
    }
};

const handleQuery = (query, params) => {
    return new Promise((resolve, reject) => {
        connection.query(query, params, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
};
