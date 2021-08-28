import { GenderEnum } from "../enum/GenderEnum";

export interface IResponseSignin {
  token: string;
}

export interface IResponseMyData {
  id: number;
  matricula: number;
  nome_usual: string;
  cpf: string;
  rg: string;
  filiacao: Array<any>;
  data_nascimento: string;
  naturalidade: string;
  tipo_sanguineo: string;
  email: string;
  url_foto_75x100: string;
  url_foto_150x200: string;
  tipo_vinculo: string;
  vinculo: {
    matricula: string;
    nome: string;
    curso: string;
    campus: string;
    situacao: string;
    cota_sistec: any;
    cota_mec: any;
    situacao_sistemica: string;
    matricula_regular: boolean;
    linha_pesquisa: any;
    curriculo_lattes: string;
    email_academico: string;
  }
  sexo: GenderEnum;
}
