// const express = require('express');
// const db = require('./db');
// const app = express();
// app.use(express.json());
// const port = 3000;

// let funcionario = [];
// let cargo = [];
// let departamento = [];




// app.post('/cadastrofun', (req, res) => {
//     const { nome, sobrenome, cargo } = req.body;
//     db.query(
//         `INSERT INTO funcionario (nome, sobrenome, cargo) VALUES (?, ?, ?)`,
//         [nome, sobrenome, cargo],
//         function (err, results, fields) {
//             if (err) {
//                 console.error('Erro na inserção:', err);
//                 return;
//             }
//             console.log(results);
//             console.log(fields);
//         }
//     );
//     res.send(`Funcionaro cadastrado!\n\nNome: ${nome} \nSobrenome: ${sobrenome} \nCargo: ${cargo}`);

// });
// app.post('/cadastrocargo', (req, res) => {
//     const { cargo, departamento } = req.body;
//     db.query(
//         `INSERT INTO cargo (cargo, departamento) VALUES (?, ?)`,
//         [cargo, departamento],
//         function (err, results, fields) {
//             if (err) {
//                 console.error('Erro na inserção:', err);
//                 return;
//             }
//             console.log(results);
//             console.log(fields);
//         }
//     );
//     res.send(`Cargo cadastrado!\n\nCargo: ${cargo} \nDepartamento: ${departamento}`);

// });
// app.post('/cadastdepart', (req, res) => {
//     const { departamento } = req.body;
//     db.query(
//         `INSERT INTO departamento (departamento) VALUES (?)`,
//         [departamento],
//         function (err, results, fields) {
//             if (err) {
//                 console.error('Erro na inserção:', err);
//                 return;
//             }
//             console.log(results);
//             console.log(fields);
//         }
//     );
//     res.send(`Cargo cadastrado!\n\nDepartamento: ${departamento}`);

// });

// app.get('/depart/:id', (req, res) => {
//     const { id } = req.params;
//     const departamento = departamento.find(v => v.id == id);
//     db.query(
//         `SELECT * FROM departamento WHERE id = ?`,
//         [Number(id)],
//         function (err, results, fields) {
//             if (err) {
//                 console.error('Erro na consulta:', err);
//                 return res.status(500).json({ error: 'Erro ao consultar' });
//             }
//             return res.json(results);
//         }
//     );
// });

// app.get('/funci/:id', (req, res) => {
//     const { id } = req.params;
//     const empresa = funcionario.find(v => v.id == id);
//     db.query(
//         `SELECT nome, sobrenome FROM funcionario WHERE id = ?`,
//         [Number(id)],
//         function (err, results, fields) {
//             if (err) {
//                 console.error('Erro na consulta:', err);
//                 return res.status(500).json({ error: 'Erro ao consultar' });
//             }
//             return res.json(results);
//         }
//     );
// });
// app.get('/cargo/:id', (req, res) => {
//     const { id } = req.params;
//     const empresa = cargo.find(v => v.id == id);
//     db.query(
//         `SELECT cargo, departamento FROM cargo WHERE id = ?`,
//         [Number(id)],
//         function (err, results, fields) {
//             if (err) {
//                 console.error('Erro na consulta:', err);
//                 return res.status(500).json({ error: 'Erro ao consultar' });
//             }
//             return res.json(results);
//         }
//     );
// });

// app.get('/cargo/:departamento', (req, res) => {
//     const { departamento } = req.params;

//     db.query(
//         `SELECT * FROM cargo WHERE departamento = '?'`,
//         [departamento],
//         function (err, results, fields) {
//             if (err) {
//                 console.error('Erro na consulta:', err);
//                 return res.status(500).json({ error: 'Erro ao consultar veículos' });
//             }
//             return res.json(results);
//         }
//     );
// });

// app.get('/funci/:nome', (req, res) => {
//     const { nome } = req.params;
//     const empresa = funcionario.find(v => v.id == id);
//     db.query(
//         `SELECT nome, sobrenome, cargo FROM funcionario WHERE nome = '?'`,
//         [nome],
//         function (err, results, fields) {
//             if (err) {
//                 console.error('Erro na consulta:', err);
//                 return res.status(500).json({ error: 'Erro ao consultar veículos' });
//             }
//             return res.json(results);
//         }
//     );
// });
// app.put('/atualizar', (req, res) => {
//     const { nome, sobrenome, cargo, departamento } = req.body;
//     db.query(
//         `UPDATE funcionario SET  nome = ?, sobrenome = ?; UPDATE cargo SET cargo = ?; UPDATE departamento SET departamento = ?; `,
//         [nome, sobrenome, cargo, departamento],
//         function (err, results, fields) {
//             if (err) {
//                 console.error('Erro na inserção:', err);
//                 return;
//             }
//             console.log(results);
//             console.log(fields);
//         }
//     );
//     res.send(`Atualizado!\n\nNome: ${nome} \nSobrenome: ${sobrenome} \nCargo: ${cargo} \nDepartamento ${departamento}`);
// });

// app.delete('/deletar/:id', (req, res) => {
//     const { nome, sobrenome, cargo, departamento } = req.body;
//     db.query(
//         `DELETE FROM funcionario WHERE nome = ?, sobrenome = ?; DELETE FROM cargo WHERE cargo = ?; DELETE FROM departamento WHERE departamento = ?; `,
//         [nome, sobrenome, cargo, departamento],
//         function (err, results, fields) {
//             if (err) {
//                 console.error('Erro na inserção:', err);
//                 return;
//             }
//             console.log(results);
//             console.log(fields);
//         }
//     );
//     res.send(`deletado!\n\nNome: ${nome} \nSobrenome: ${sobrenome} \nCargo: ${cargo} \nDepartamento ${departamento}`);
// });


// app.listen(port, () => {
//     console.log(`Server listening on  http://localhost:${port}`);
// });

