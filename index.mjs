import jwt from 'jsonwebtoken';
import pkg from 'pg';
import bcrypt from 'bcrypt';

const { Pool } = pkg;
const BD_USER = process.env.BD_USER;
const BD_PASSWORD = process.env.BD_PASSWORD;
const BD_HOST = process.env.BD_HOST;
const BD_PORT = process.env.BD_PORT;
const BD_DATABASE = process.env.BD_DATABASE;
const QUERY_BUSCA_COLABORADOR_ID = 'SELECT * FROM colaboradores WHERE matricula = $1::text';

const JWT_SECRET = process.env.JWT_SECRET;

export const handler = async function (event, context, callback) {
    const body = JSON.parse(event.body);
    const matricula = body.matricula;
    const senha = body.senha;

    const pool = new Pool({
        user: BD_USER,
        password: BD_PASSWORD,
        host: BD_HOST,
        port: BD_PORT,
        database: BD_DATABASE,
        max: 1,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 2000,
        ssl: {
            rejectUnauthorized: false
        }
    });
    const conn = await pool.connect();

    try {
        const result = await conn.query(QUERY_BUSCA_COLABORADOR_ID, [matricula]);
        console.log('Resultados da consulta:', result.rows);

        if (result.rows.length === 0) {
            callback(null, makeResponse(401, {message: 'Login inválido!'}) );
        } else {
          if(await bcrypt.compare(senha, result.rows[0].senha)){
            const payload = {codigo: result.rows[0].codigo, nome: result.rows[0].nome, email: result.rows[0].email, matricula: result.rows[0].matricula};
            const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
            callback(null, makeResponse(200, {token: token, userId: result.rows[0].codigo}));
          } else {
            callback(null, makeResponse(401, {message: 'Login inválido!'}) );
          }
        }
    } catch (error) {
        callback(null, makeResponse(500, {error: error.message}));
    } finally {
        conn.release();
        await pool.end();
    }
};

function makeResponse(code, body, header = null) {
    return {
        statusCode: code,
        body: JSON.stringify(body),
        headers: header ? header : {"Content-Type": "application/json"}
    }
}