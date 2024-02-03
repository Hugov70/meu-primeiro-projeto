const path = require('path');
exports.player70hy = (req, res) => {
    const filePath = path.join(__dirname, '../../players/70hy.html');
    res.sendFile(filePath);
}; 
exports.playerNiculinha = (req, res) => {
    const filePath = path.join(__dirname, '../../players/niculinha.html');
    res.sendFile(filePath);
}; 
exports.playerNwme = (req, res) => {
    const filePath = path.join(__dirname, '../../players/nwme.html');
    res.sendFile(filePath);
}; 