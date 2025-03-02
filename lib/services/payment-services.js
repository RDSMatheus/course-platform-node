"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentServices = void 0;
const mercadopago_1 = require("mercadopago");
class PaymentServices {
    constructor(method) {
        this.payment_method = method;
    }
    post() {
        if (this.payment_method === 'pix') {
            const client = new mercadopago_1.MercadoPagoConfig({
                accessToken: 'TEST-6082563235762298-010721-ef92a6c14464be75805ac892fc1cec0f-230474713',
                options: { timeout: 5000 },
            });
            console.log('pix');
            const payment = new mercadopago_1.Payment(client);
            const body = {
                transaction_amount: 35.5,
                description: 'Teste api',
                payment_method_id: 'pix',
                payer: {
                    email: 'matheus_rds1998@hotmail.com',
                },
            };
            payment.create({ body }).then(console.log).catch(console.log);
        }
        if (this.payment_method === 'credit_card') {
            console.log('credito');
            const client = new mercadopago_1.MercadoPagoConfig({
                accessToken: 'TEST-6082563235762298-010721-ef92a6c14464be75805ac892fc1cec0f-230474713',
            });
            const payment = new mercadopago_1.Payment(client);
            payment
                .create({
                body: {
                    transaction_amount: 20.0,
                    description: 'Teste',
                    payment_method_id: 'credit_card',
                    payer: {
                        email: 'matheus_rds1998@hotmail.com',
                    },
                },
            })
                .then((result) => console.log(result))
                .catch((error) => console.log(error));
        }
    }
}
exports.PaymentServices = PaymentServices;
//# sourceMappingURL=payment-services.js.map