const pagesController = {
    'medios': function (req, res) {
res.render('medios');

    },
    'costos': function (req, res) {
        res.render('costos');
        
            },
            'tiempos': function (req, res) {
                res.render('tiempos');
                
                    }
}

module.exports = pagesController