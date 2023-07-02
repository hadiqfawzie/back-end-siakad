
const connection = require('../db/db.js')

module.exports = {
    getMhs : (req, res) => {
        const qstring = "SELECT * FROM mahasiswa";
        //const connection = checkConnections()
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
    getMhsByNim : (req, res) => {
        const qstring = `SELECT * FROM mahasiswa WHERE nim = '${req.params.nim}'`;
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
    insertMhs : (req, res) => {
        const mahasiswaBaru = req.body;
    
        connection.query("INSERT INTO mahasiswa SET ?", mahasiswaBaru, (err) => {
            if (err) {
                console.log("error: ", err);
                res.status(500).send({
                    message: err.message || "Terjadi kesalahan saat insert data"
                });
            }
            else
                res.send(mahasiswaBaru)
        });
    },
    updateMhs : (req, res) => {
        const nim = req.params.nim;
        const mhs = req.body;
        const qstring = `UPDATE mahasiswa 
                                SET nama = '${mhs.nama}', angkatan = '${mhs.angkatan}', prodi = '${mhs.prodi}' 
                                WHERE nim = '${nim}'`
        connection.query(qstring, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: "Error updating mahasiswa with NIM " + nim
                });
            }
            else if (data.affectedRows == 0) {
                res.status(404).send({
                    message: `Not found mahasiswa with NIM ${nim}.`
                });
            }
            else {
                console.log("updated mahasiswa: ", { nim: nim, ...mhs });
                res.send({ nim: nim, ...mhs });
            }
        })
    },
    deleteMhs : (req, res) => {
        const nim = req.params.nim
        const qstring = `DELETE FROM mahasiswa WHERE nim = '${nim}'`
        connection.query(qstring, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: "Error deleting mahasiswa with NIM " + nim + err.message
                });
            }
            else if (data.affectedRows == 0) {
                res.status(404).send({
                    message: `Not found mahasiswa with NIM ${nim}.`
                });
            }
            else res.send(`Mahasiswa dengan nim = ${nim} telah terhapus`)
        });
    }
}
