import jwt from 'jsonwebtoken';
import axios from 'axios';

const IDENTIFICACAO_HOST = process.env.IDENTIFICACAO_HOST;

const JWT_SECRET = process.env.JWT_SECRET;

export const handler = async function (event, context, callback) {
  const payload = JSON.parse(event.body);

  await axios.post(`${IDENTIFICACAO_HOST}/auth/login`, payload)
    .then(response => {
      if (response.status === 200) {
        const token = jwt.sign(response.data, JWT_SECRET, { expiresIn: '1h' });
        callback(null, makeResponse(200, { token: token, userId: response.data.userId }));
      } else {
        callback(null, makeResponse(401, { message: 'Não autorizado!' }));
      }
    })
    .catch(error => {
      console.log(error);
      callback(null, makeResponse(500, { error: error.message }));
    });
};

function makeResponse(code, body, header = null) {
  return {
    statusCode: code,
    body: JSON.stringify(body),
    headers: header ? header : { "Content-Type": "application/json" }
  }
}
