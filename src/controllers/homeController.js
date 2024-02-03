const path = require('path');
exports.paginaInicial = (req, res) => {
    const filePath = path.join(__dirname, '../../bestplayers.html');
    res.sendFile(filePath);
}; 