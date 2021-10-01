const express = require("express");
const router = express.Router();
const DB = require("./times");

router.get("/times", (req, res) => {
    return res.json(DB.times);
})

router.get("/times/:id", (req, res) => {
    if (isNaN(req.params.id)) {
        return res.sendStatus(400);
    } else {
        const id = parseInt(req.params.id);
        const time = DB.times.find((element) => element.id === id);
        if (time) {
            return res.json(time);
        } else {
            return res.status(404).json({ msg: 'Time não encontrado' })
        }
    }
})

router.post("/novoTime", (req, res) => {
    const {
        nome,
        cidade,
        estado,
        serie,
        titulos,
        folhaPagamento,
    } = req.body;

    if (nome && cidade && estado && titulos && folhaPagamento) {
        let indexOfSerie = ['A', 'B', 'C', ''].indexOf(serie);
        if (indexOfSerie == -1) {
            return res.status(400).json({ msg: 'Série inválida' })
        }

        const id = DB.times[DB.times.length - 1].id + 1;
        DB.times.push({
            id,
            nome,
            cidade,
            estado,
            serie,
            titulos,
            folhaPagamento,
        })
        return res.status(200).json({ msg: 'Time cadastrado com sucesso' })
    } else {
        return res.status(400).json({ msg: 'Dados obrigatórios incompletos' })
    }
})

router.delete("/times/:id", (req, res) => {
    if (isNaN(req.params.id)) {
        return res.sendStatus(400);
    } else {
        const id = parseInt(req.params.id);
        const index = DB.times.findIndex((element) => element.id === id);

        if (index > -1) {
            DB.times.splice(index, 1);
            return res.status(200).json({ msg: 'Time apagado com sucesso' })
        } else {
            return res.status(400).json({ msg: 'Time não encontrado' })
        }
    }
})

router.put("/times/:id", (req, res) => {
    if (isNaN(req.params.id)) {
        return res.sendStatus(400);
    } else {
        const id = parseInt(req.params.id);
        const index = DB.times.findIndex((element) => element.id === id);

        var time = DB.times[index];

        if (time) {
            const {
                nome,
                cidade,
                estado,
                serie,
                titulos,
                folhaPagamento,
            } = req.body;

            let indexOfSerie = ['A', 'B', 'C', ''].indexOf(serie);
            if (indexOfSerie > -1) {
                time.serie = serie;
            } else {
                return res.status(400).json({ msg: 'Série inválida' })
            }

            if (nome) time.nome = nome;
            if (cidade) time.cidade = cidade;
            if (estado) time.estado = estado;
            if (titulos) time.titulos = titulos;
            if (folhaPagamento) time.folhaPagamento = folhaPagamento;



            return res.status(200).json({ msg: 'Time alterado com sucesso' })
        } else {
            return res.status(400).json({ msg: 'Time não encontrado' })
        }

    }
})

module.exports = router;