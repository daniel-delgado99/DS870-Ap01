var DB = {
    times: [
        {
            id: 1,
            nome: 'Corinthians',
            cidade: 'São Paulo',
            estado: 'São Paulo',
            serie: 'A',
            titulos: {
                estadual: 30,
                nacional: 6,
                internacional: 2,
            },
            folhaPagamento: 100000000
        }, {
            id: 2,
            nome: 'Palmeiras',
            cidade: 'São Paulo',
            estado: 'São Paulo',
            serie: 'A',
            titulos: {
                estadual: 23,
                nacional: 5,
                internacional: 0,
                mundial: 0
            },
            folhaPagamento: 100000000
        }, {
            id: 3,
            nome: 'Paraná Clube',
            cidade: 'Curitiba',
            estado: 'Paraná',
            serie: 'C',
            titulos: {
                estadual: 7,
                nacional: 0,
                internacional: 0,
            },
            folhaPagamento: 110
        }, {
            id: 4,
            nome: 'Símios Football Club',
            cidade: 'Curitiba',
            estado: 'Paraná',
            serie: '',
            titulos: {
                estadual: 0,
                nacional: 0,
                internacional: 0,
            },
            folhaPagamento: 0
        },  {
            id: 5,
            nome: 'Coritiba',
            cidade: 'Curitiba',
            estado: 'Paraná',
            serie: 'B',
            titulos: {
                estadual: 38,
                nacional: 2,
                internacional: 1,
            },
            folhaPagamento: 200000
        },
    ]
}

module.exports = DB;