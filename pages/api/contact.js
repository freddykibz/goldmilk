import nodemailer from "nodemailer";

export default async function ContactAPI(req, res) {
    const {name, phone, email, message } = req.body
    
    const user = process.env.user

    const data = {
        name, phone, email, message
    }

    const transporter = nodemailer.createTransport({
        host:'mail.goldmilkdairies.com',
        port: 465,
        secure: true,
        auth: {
            user:user,
            pass: process.env.pass,
        }
    });

    try {
        const mail = await transporter.sendMail({
            from: user,
            to:"info@goldmilkdairies.com",
            replyTo: email,
            subject: `Contact form Submission from ${name}`,
            html: `
                 <p>Name: ${name}</p>
                 <p>Phone No: ${phone}</p>
                 <p>Email: ${email} </p>
                 <p>Message: ${message}</p>
            `,

        });
        
        console.log("Message sent:", mail.messageId);
        return res.status(200).json({ message: "success"});
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:"Could Not Send the email. Your Message was not sent."
        });
    }
    
}