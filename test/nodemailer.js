/**
 *
 * User: zu
 * Date: 14-3-5
 * Time: 下午5:05
 *
 */
var mail = require('nodemailer');
mail.SMTP = {
    host: 'smtp.163.com',
    port: 25,
    use_authentication: true,
    user: 'zuaa-q',
    pass: 'seedcat'
}

sendmail("zuaa@163.com","hi zuaa", 'html',"C:\zuaa\DATA_IMG\Celebrities & Girls\Hollywood Celebrity Pictures\Celebrities\Alla-Riscossa\Alla-Riscossa-2.JPG")

function sendmail(to,subject,html,file){
    mail.send_mail(
        {
            sender:'zuaa-q@163.com', //发送邮件的地址
            to:to, //发给谁
            subject:subject, //主题
            body:html, //发送的内容
            html:html , //如果要发送html
            attachments: [
                {
                    filePath: file
                }
            ]
        },
        function(error,success){
//回调函数，用户判断发送是否成功，如果失败，输出失败原因。
            if(!error){
                console.log('message success');
            }else{
                console.log('failed'+error);
            }
        })
}