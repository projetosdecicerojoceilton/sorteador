const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/salvar', (req, res) => {
  const { nome, email, chavePix } = req.body;
  const data = `${nome} | ${email} | ${chavePix}\n`;

  fs.appendFile('dados.txt', data, (err) => {
    if (err) throw err;
    console.log('Dados salvos com sucesso!');
  });

  res.redirect('/agradecimento');
});

app.get('/agradecimento', (req, res) => {
  res.render('agradecimento');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
