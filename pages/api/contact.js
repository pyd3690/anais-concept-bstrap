// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    const data = req.body;
    console.log(data)
    let moment = require('moment');
    moment.locale('fr');
    var CurrentDate = moment();
    var date = CurrentDate.format('DD MMMM YYYY'); //moment(entity.date, 'DD MMMM YYYY', 'fr');

    var emailContent = "<h2>Nouveau Message</h2>" +
    "<h4>Date: " + date  + "</h4>" +  
    "<h4>Nom: " + data.name + "</h4>" +
    "<h4>Contact: " + data.phone + " </h4>" +
    "<h4>Email: " + data.email + "</h4>" +
    "<h4>Sujet: " + data.subject + "</h4>" +
    "<h4>Assistance: " + data.ctype + "</h4>" +
    "<h4>Message: </h4><p>" + data.message + "</p>" 

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
        user: 'anaisconcept.commande',
        pass: 'Ignitouch1234',
        },
        secure: true,
    })      
    var result1 = ""
    // second mail      
    const mailData2 = {
        from: 'anaisconcept.commande',
        to: 'anaisconcept.commande@gmail.com',
        subject: 'Nouveau Message from ' + data.phone + " - " + data.subject + ' - ' + date,
        text: " order created " ,
        html: "<div>" + emailContent +"</div>"
    }
    transporter.sendMail(mailData2, function (err, info) {
        if(err)
        {
            console.log(err);
            result1 = "fail"
        }
        else
        {
            console.log(info);  
            result1 = "success"
        }
    })

    //res.status(200)
    //console.log(res)
    res.status(200).json({ result: result1 })
    console.log(res.result)
  }
  