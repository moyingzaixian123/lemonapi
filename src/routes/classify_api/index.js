const curd = require('mongodb-curd');
module.exports = {
    getCustom(req, res) {
        curd.find("lemon", "custom", (rs) => {
            if (!rs) {
                res.send({ code: 0 });
            } else {
                res.send({ code: 1, data: rs });

            }
        })
    },
    getclassify(req, res) {
        let { type, userid } = req.body;
        if (!type || !userid) {
            return res.send({ code: 2, msg: "参数不完整" })
        }
        curd.find("lemon", "classify", { 'type': type, 'userid': { $in: ["*", userid] } }, (rs) => {
            if (!rs) {
                res.send({ code: 0 });
            } else {
                res.send({ code: 1, data: rs });

            }
        })
    },
    addclassify(req, res) {
        let { type, userid, icon, name } = req.body;
        if (!type || !userid || !icon || !name) {
            return res.send({ code: 2, msg: "参数不完整" })
        }
        curd.insert("lemon", "classify", req.body, (rs) => {
            if (!rs) {
                res.send({ code: 0 });
            } else {
                res.send({ code: 1, data: rs });

            }
        })
    },
}