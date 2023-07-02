const connection = require('../db/db.js')

module.exports = {
    getMk : (req, res) => {
        const qstring = "SELECT * FROM matakuliah";
        connection.query(qstring, (err, data) => {
            if (err) {
                console.log("error: ", err);
                res.status(500).send({
                    message: err.message || "Terjadi kesalahan saat get data"
                });
            }
            else res.send(data)
        });
    },
    getMkByKdMk : (req, res) => {
        const qstring = `SELECT * FROM matakuliah WHERE kdMk = '${req.params.kdMk}'`;
        connection.query(qstring, (err, data) => {
            if (err) {
                console.log("error: ", err);
                res.status(500).send({
                    message: err.message || "Terjadi kesalahan saat get data"
                });
            }
            else res.send(data)
        });
    },
    insertMk : (req, res) => {
        const mkBaru = req.body;
    
        connection.query("INSERT INTO matakuliah SET ?", mkBaru, (err) => {
            if (err) {
                console.log("error: ", err);
                res.status(500).send({
                    message: err.message || "Terjadi kesalahan saat insert data"
                });
            }
            else
                res.send(mkBaru)
        });
    },
    updateMk : (req, res) => {
        const kdMk = req.params.kdMk;
        const mk = req.body;
        const qstring = `UPDATE matakuliah 
                                SET matakuliah = '${mk.matakuliah}', sks = '${mk.sks}', semester = '${mk.semester}' 
                                WHERE kdMk = '${kdMk}'`
        connection.query(qstring, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: "Error updating matakuliah with Kode MK " + kdMk
                });
            }
            else if (data.affectedRows == 0) {
                res.status(404).send({
                    message: `Not found matakuliah with Kode ${kdMk}.`
                });
            }
            else {
                console.log("updated matakuliah: ", { kdMk: kdMk, ...mk });
                res.send({ kdMk: kdMk, ...mk });
            }
        })
    },
    hapusMk: (req, res) => {
        const kdMk = req.params.kdMk
        const qstring = `DELETE FROM matakuliah WHERE kdMk = '${kdMk}'`
        connection.query(qstring, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: "Error deleting matakuliah with Kode MK " + kdMk
                });
            }
            else if (data.affectedRows == 0) {
                res.status(404).send({
                    message: `Not found matakuliah with Kode MK ${kdMk}.`
                });
            }
            else res.send(`Matakuliah dengan KdMk = ${kdMk} telah terhapus`)
        });
    }
}