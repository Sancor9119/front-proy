const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/user/:tokenU', async (req, res) => {
    const { tokenU } = req.params;
    console.log(tokenU + 'tokenUser');
    const users = await pool.query('SELECT * FROM users WHERE tokenU = ?', [tokenU]);
    if (users.length <= 0) {
        res.status(404).json({ status: 'Not Found' });
    }
    const user = users[0];
    const respuesta = {
        name: user.username,
        email: user.correo,
        token: user.tokenU
    }
    res.json(respuesta);
});

router.put('/guardar-diagrama/:tokenS', async (req, res) => {
    const { tokenS } = req.params;
    console.log(req.params);
    const { content } = req.body;
    console.log(req.body);
    
    const salas = await pool.query('SELECT * FROM salas WHERE tokenS = ?', [tokenS]);
    if (salas.length <= 0) {
        res.json({ status: 'Token Not Valid' });
    }
    const salaId = salas[0].id;
    await pool.query('UPDATE salas SET xml = ? WHERE id= ?', [content, salaId], (err, rows, filds) => {
        if (!err) {
            res.json({ status: 'Project Updated Successfully' });
            res.json({content})
        } else {
            res.json({ status: 'ERROR! Could not Update Project' });
        }
    });
    res.json({ status: 'Project Updated Successfully' });
});


router.get('/cargar-salas/:tokenS', async (req, res) => {
    console.log(req.params);
    console.log(req.params.tokenS);
    const { tokenS } = req.params;
    const salas = await pool.query('SELECT * FROM salas WHERE tokenS= ?', [tokenS]);
    if (salas.length <= 0) {
        res.status(404).json({ status: 'Token Not Valid' });
    }
    const sala = salas[0];
    console.log(sala + 'sala apis');
    const resultado = {
        id: sala.id,
        nombre: sala.title,
        descripcion: sala.description,
        user_id: sala.user_id,
        content: sala.xml,
        codigo: sala.tokenS
    }
    res.json(resultado);
});

async function chatGPTAPI(lenguaje, xml) {
    //var xml = mxUtils.getXml(ui.editor.getGraphXml());
    try {
      const options = {
        method: 'POST',
        url: 'https://chatgpt-api8.p.rapidapi.com/',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': 'd1cf35b25emsh223468b8fd93b97p156dd9jsn0a3671e97c80',
          'X-RapidAPI-Host': 'chatgpt-api8.p.rapidapi.com'
        },
        data: [
          {
            content: `del siguiente codigo xml quiero que interpretes el diagrama de secuencia que esta y una vez interpretado me lo devuelvas en ${lenguaje} la interpretacion con todas las logicas que creas correctas y que tu respuesta sea el codigo java con todas las logicas este es el xml ${xml},
            `,
            role: 'user'
          }
        ]
      };
  
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

module.exports = router;