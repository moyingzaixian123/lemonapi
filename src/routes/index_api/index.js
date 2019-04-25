const curd = require('mongodb-curd');
module.exports = {
    delBill(req, res) {
        let { _id } = req.query;
        if (!_id) {
            return res.send({ code: 2, msg: "参数不完整" })
        }
        curd.remove("lemon", "bill", req.query, (rs) => {
            if (!rs) {
                res.send({ code: 0 });
            } else {
                res.send({ code: 1 });

            }
        })
    },
    addBill(req, res) {
        let { icon, Time, name, money, type, userid } = req.body;
        // console.log(req.query)
        if (!icon || !Time || !name || !money || !type || !userid) {
            return res.send({ code: 2, msg: "参数不完整" })
        }
        curd.insert("lemon", "bill", req.body, (rs) => {
            if (!rs) {
                res.send({ code: 0 });
            } else {
                res.send({ code: 1 });

            }
        })
    },
    findBill(req, res) {
        let { Time, type, name } = req.body;
        if (!Time) {
            return res.send({ code: 2, msg: "参数不完整" })
        }
        let query = { Time: new RegExp(Time) };
        // console.log(req.query)
        if (type) {
            query.type = type;
        }
        if (name) {
            query.name = { $in: name.split(',') }
        }
        curd.find("lemon", "bill", query, (rs) => {
            if (!rs) {
                res.send({ code: 0 });
            } else {
                res.send({ code: 1, data: rs });

            }
        })
    },
}