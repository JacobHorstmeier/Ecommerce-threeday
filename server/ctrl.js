module.exports = {

    getAll: (req, res, next) => {
        const db = req.app.get('db');
        console.log('getAll fired')

        db.get_All()
            .then(products => res.status(200).send(products))
            .catch(() => res.status(500).send())
    }






}