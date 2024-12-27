import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const twilo_client = twilio(accountSid, authToken);

const message_sender = async (titulo: string, precio: string, url: string) => {
    await twilo_client.messages.create({
        body: `¡El producto "${titulo}" tiene un precio de $${precio}! Revisa aquí: ${url}`,
        from: process.env.TWILIO_FROM_NUMBER!,
        to: process.env.TWILIO_TO_NUMBER!,
    });
}

export { message_sender, twilo_client };