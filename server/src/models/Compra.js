const { Schema, model, models } = require("mongoose");

const orderSchema = new Schema(
    {
        userId: { type: Schema.Types.ObjectId, ref: "Usuario", required: true },
        customerId: { type: String },
        paymentIntentId: { type: String },
        products: [
            {
                _id: false,
                productId: { type: String, required: true },
                idProductOriginal: {
                    type: Schema.Types.ObjectId,
                    ref: "Producto",
                    required: true
                },
                productColor: { type: String, required: true },
                quantity: { type: Number, default: 1 },
                productSize: { type: String, required: true }
            }
        ],
        subtotal: { type: Number, required: true },
        total: { type: Number, required: true },
        shipping: { type: Object, required: true },
        delivery_status: { type: String, default: "pending" },
        payment_status: { type: String, required: true }
    },
    { timestamps: true }
);

const Compra = models.Compra || model("Compra", orderSchema);
module.exports = Compra;