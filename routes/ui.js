exports.index = function *() {
    console.log('innn');
    this.body = yield this.render('index', {
        name: 'MapMaker'
    });
};