const { response } = require('express');
const nodeMailer = require('nodemailer');

const envioCorreo = (req = request, resp = response) =>{
    let body = req.body;

    let config = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        post: 587,
        auth:{
            user:'correo.prueba.ista123@gmail.com',
            pass:'gwzashbeuqlnucye'
        }
    });

    const options = {
        form:'Programacion',
        subject: body.asunto,
        to: body.email,
        text: body.mensaje
    };

    config.sendMail(options, function(error, result){
        if (error) return resp.json({ok: false, msg:error});

        return resp.json({
            ok:true,
            msg:result
        });
    });
}

module.exports ={
    envioCorreo
}