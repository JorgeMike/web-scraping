import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const twilo_client = twilio(accountSid, authToken);

const message_sender = async (
    titulo: string,
    precio: string,
    url: string,
    plataforma: string,
    precio_meta: number
) => {
    console.log(
        `¡El producto "${titulo}" tiene un precio de ${precio} (menor a la meta: ${precio_meta}) en ${plataforma}, que está por debajo del precio de meta! Revisa aquí: ${url}`
    );
    /*     await twilo_client.messages.create({
        body: `¡El producto "${titulo}" tiene un precio de ${precio} (menor a la meta: ${precio_meta}) en ${plataforma}, que está por debajo del precio de meta! Revisa aquí: ${url}`,
        from: process.env.TWILIO_FROM_NUMBER!,
        to: process.env.TWILIO_TO_NUMBER!,
    }); */
};

export { message_sender, twilo_client };
