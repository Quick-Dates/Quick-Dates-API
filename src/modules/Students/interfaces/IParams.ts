import { GenderEnum } from "../models/Students";

export interface IParamsSignin {
  username: string;
  password: string;
}

export interface IParamsMyData{
  token: string;
}

export interface IParamsCreateStudent {
  id: number;
  matricula: number;
  password: string;
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
