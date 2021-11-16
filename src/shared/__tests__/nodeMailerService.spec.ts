import transporter from "../config/setup-nodemailer";
import { GenderEnum } from "../enum/GenderEnum";
import path from "path";
import fs from "fs";
import NodeMailerService from "../services/NodeMailerService";
import handlebars, { template } from "handlebars";


let nodeMailerService: NodeMailerService;
let sendEmailSpy: jest.SpyInstance;
describe('NodeMailerService', () => {
  beforeEach(() => {
    nodeMailerService = new NodeMailerService();
    sendEmailSpy = jest.spyOn(NodeMailerService.prototype as any, 'sendEmail').mockImplementation();

  })
  it('should send email task short deadline', async() => {
    const fakeStudent = {email: 'email', name: 'willian'} as any;
    const fakeTeacher = {} as any;
    const fakeTask = {title: 'titulo', finalDate: '', finalTime: ''} as any;

    await nodeMailerService.sendEmailTaskShortDeadline(fakeStudent, fakeTeacher, fakeTask )
    expect(sendEmailSpy).toHaveBeenCalledWith({
      toEmail: fakeStudent.email,
      subject: 'Atividades próximas',
      header: 'Você possui atividades próximas',
      content: `Oi ${fakeStudent.name} A atividade ${fakeTask.title} deve ser entregue até ${fakeTask.finalDate} ${fakeTask.finalTime}`
    });
  })
  it('should send email task created', async() => {
    const fakeStudent = {email: 'email', name: 'willian'} as any;
    const fakeTeacher = {gender: GenderEnum.Masculino, name: 'nome'} as any;
    const fakeTask = {title: 'titulo', finalDate: '', finalTime: '',
    subject: 'Matematica'} as any;

    await nodeMailerService.sendEmailTaskCreated(fakeStudent, fakeTeacher, fakeTask)
    expect(sendEmailSpy).toHaveBeenCalledWith({
      toEmail: fakeStudent.email,
      subject: 'Nova Atividade',
      header: `Atividade ${fakeTask.title} criada`,
      content: `Oi ${fakeStudent.name}, o Professor ${fakeTeacher.name} de ${fakeTask.subject}
      neste momento agendou uma atividade ${fakeTask.title}. Entre no Quick Dates para mais detalhes!`
    })
  })
  it('should send email user welcome', async() => {
    const fakeUser = {email: 'email', gender: GenderEnum.Masculino, name: 'Willian'} as any;
    await nodeMailerService.sendEmailWelcome(fakeUser)

    expect(sendEmailSpy).toHaveBeenCalledWith({
      toEmail: fakeUser.email,
      subject: 'Bem vindo',
      header: `Bem vindo ao Quick Dates`,
      content: `Estamos felizes em ter você ${fakeUser.name} na plataforma Quick Dates`
    })
  })
  it('send email global', async() => {
    const params = { toEmail: 'meuemail', subject: 'qualquer', header: 'urgente', content: 'clique aqui' };

    jest.spyOn(NodeMailerService.prototype as any, 'sendEmail').mockRestore();
    jest.spyOn(transporter, 'sendMail').mockImplementation();
    const fakeHtml = '<h1> teste html </h1>'
    jest.spyOn(nodeMailerService, 'htmlToSend').mockReturnValue(fakeHtml as never);

    const fakeEmail = 'meuemail'
    process.env.EMAIL = fakeEmail;

    await nodeMailerService.sendEmail(params)

    expect(transporter.sendMail).toHaveBeenCalledWith({
      from: `Quick Dates <${fakeEmail}>`,
      to: params.toEmail,
      subject: params.subject,
      text: `${params.header} \n ${params.content}`,
      html: fakeHtml
    });
  })
  it('should format html to send in content email', async() => {
    const params = {
      header: 'header',
      content: 'content'
    }
    const fakeFilePath = 'meu/path'
    const fakeSource = 'fs-source'
    const fakeHtml = '<h1> teste html </h1>'
    const fakeTemplate = jest.fn().mockReturnValue(fakeHtml)

    jest.spyOn(path, 'join').mockReturnValue(fakeFilePath);
    jest.spyOn(fs, 'readFileSync').mockReturnValue(fakeSource);
    jest.spyOn(handlebars, 'compile').mockReturnValue(fakeTemplate);

    const html = nodeMailerService.htmlToSend(params.header, params.content)

    expect(fs.readFileSync).toHaveBeenCalledWith(fakeFilePath, 'utf-8');
    expect(handlebars.compile).toHaveBeenCalledWith(fakeSource);
    expect(fakeTemplate).toHaveBeenCalledWith(params);
    expect(html).toEqual(fakeHtml);
  })
})
