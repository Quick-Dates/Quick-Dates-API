import transporter from "../config/setup-nodemailer";
import path from "path";
import fs from "fs";
import handlebars from "handlebars";
import Students from "../../modules/Students/models/Students";
import Teachers from "../../modules/Teachers/models/Teachers";
import { GenderEnum } from "../enum/GenderEnum";
import Tasks from "../../modules/Tasks/models/Tasks";

interface IOptionsSendEmail {
  toEmail: string,
  subject: string,
  header: string,
  content: string
}


export default class NodeMailerService {

  async sendEmailTaskShortDeadline(student: Students, teacher: Teachers, task: Tasks) {
    await this.sendEmail({
      toEmail: student.email,
      subject: 'Atividades próximas',
      header: `Você possui atividades próximas`,
      content: `Oi ${student.name} <br> A atividade ${task.title} deve ser entregue até ${task.finalDate} ${task.finalTime}`
    })
  }
  async sendEmailTaskCreated(student: Students, teacher: Teachers, task: Tasks) {
    await this.sendEmail({
      toEmail: student.email,
      subject: 'Nova Atividade',
      header: `Atividade ${task.title} criada`,
      content: `Oi ${student.name} <br> ${teacher.gender === GenderEnum.Masculino ? 'O Professor' : 'A Professora'} ${teacher.name} de ${task.subject}
      nesse momento agendou uma atividade ${task.title}, entre no Quick Dates para mais detalhes!`
    })
  }

  async sendEmailWelcome(user: Students | Teachers) {
    await this.sendEmail({
      toEmail: user.email,
      subject: 'Bem vindo',
      header: `Bem vind${user.gender === GenderEnum.Masculino ? 'o' : 'a'} ao <strong>Quick Dates</strong>`,
      content: `Estamos felizes em ter você ${user.name} na plataforma Quick Dates <br>`
    })
  }

  private async sendEmail({ toEmail, subject, header, content }: IOptionsSendEmail) {
    await transporter.sendMail({
      from: `Quick Dates <${process.env.EMAIL}>`,
      to: toEmail,
      subject: subject,
      text: `${header} \n ${content}`,
      html: this.htmlToSend(header, content)
    })
  }

  private htmlToSend(header: string, content: string) {
    const filePath = path.join(__dirname, '../../../views/template/email.html');
    const source = fs.readFileSync(filePath, 'utf-8').toString();
    const template = handlebars.compile(source);
    const replacements = {
      header,
      content
    };
    return template(replacements);
  }

}
