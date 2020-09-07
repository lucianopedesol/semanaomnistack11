
/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * GET: Buscar/listar um informação do back-end | app.get
 * POST: Criar uma informação no back-end | app.post
 * PUT: Alterar uma informação no back-end | app.put
 * DELETE: Deletar uma informação no back-end | app.delete
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomedos envados na rota após o "?" (Filtros, Paginação)
 * Route Params: Parâmetos utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recusos
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users  <== Com o Banco de dados
 * Query Builder: table('users').select('*').where() <== Com JS
 */

const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

app.listen(3333);
