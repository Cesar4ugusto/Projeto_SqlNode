const User = require('../models/User');
const Addresses = require('../models/Addresses');

module.exports = {

    async index(req, res) {

        const { user_id } = req.params;

        const user = await User.findByPk(user_id, {
            include: {
                association: 'addresses',
            }
        });

        return res.json(user);

    },

    async store(req, res) {

        const { user_id } = req.params;
        const { zipcode, street, number } = req.body;

        const user = await User.findByPk(user_id);

        if(!user) {
            return res.status(400).json({error: 'User not found'})
        }

        try{

            const address = await Addresses.create({
                zipcode,
                street,
                number,
                user_id,
            });

            return res.json(address);

        }catch(err) {
            return res.status(400).json({error: 'Algo deu errado: '+err});
        }

    }

};
