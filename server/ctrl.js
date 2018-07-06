module.exports = {

    getAll: (req, res, next) => {
        const db = req.app.get('db');
        console.log('getAll fired')

        db.get_All()
            .then(products => res.status(200).send(products))
            .catch(() => res.status(500).send())
    },

    addToCart: (req, res, next) => {
        const db = req.app.get('db');
        console.log('addToCart fired')

        db.add_to_cart()
            .then( product => res.status(200).send(product))
            .catch((e) => {
                console.log(e)
                res.status(500).send()})
    },

    deleteProduct: (req, res, next) => {
        const db = req.app.get('db');
        const{id} = req.params
        console.log('deleteprofile fired')
        console.log(req.params)

        db.delete_product([id])
            .then((products) => res.status(200).send(products))
            .catch((e) =>  {
                console.log(e)
                res.status(500).send()
            })
    }






}