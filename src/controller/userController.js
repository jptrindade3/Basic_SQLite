const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async create(req, res){
        let {
            name,
            email,
            phone
        } = req.body;

        let id = crypto.randomBytes(4).toString('HEX');

        await connection('user').insert({
            id,
            name,
            email,
            phone
        });

        return res.json({id});
    },

    async read(req, res){
        let user = await connection('user').select('*');

        return res.json(user);
    },

    async update(req, res){
        let {id} = req.params;//é importante receber a informação desestruturada aqui
        let {
            name,
            email,
            phone
        } = req.body;

        await connection('user').where('id', id).update({
            name,
            email,
            phone
        });

        return res.json({message: "Update successful", name, email, phone});
    },

    async delete(req, res){
        let {id} = req.params;

        await connection('user').where('id', id).delete();

        return res.status(204).send();
    },
}