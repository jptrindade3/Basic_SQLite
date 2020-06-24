const knex = require('knex'); //Chamando o nosso query builder
const configuration = require('../../knexfile');//Acessando as nossas configurações do knex

const connection = knex(configuration.development);//Utilizaremos o perfil de desenvolvedor que foi modificado no knexfile

module.exports = connection;