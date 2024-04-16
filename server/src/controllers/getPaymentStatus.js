const Compra = require('../models/Compra');

const getPaymentStatus = async (req,res) =>{
    try{
        const comprasPendientes = await Compra.find({payment_status: 'pending'})
        let productosPendientesPago = []
         comprasPendientes.forEach(compra => {
            productosPendientesPago = productosPendientesPago.concat(compra.products);
        });

        res.json(productosPendientesPago);
    }catch (err){
        console.log(err);
    }
}

module.exports = getPaymentStatus