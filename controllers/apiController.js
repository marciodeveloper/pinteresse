exports.test = function (req, res) {
    res.send('Hello! Controller Test');
};

exports.details = function (req, res) {
    res.send({type: 'GET'});
};

exports.add = function (req, res) {
    res.send({type: 'POST'});
};

exports.update = function (req, res) {
    res.send({type: 'PUT'});
};

exports.delete = function (req, res) {
    res.send({type: 'DELETE'});
};

exports.create = function (req, res) {
    console.log('You mande a POST request: ', req.body);
    res.send({
        type: 'POST',
        name: req.body.name,
        rank: req.body.rank
    });
};