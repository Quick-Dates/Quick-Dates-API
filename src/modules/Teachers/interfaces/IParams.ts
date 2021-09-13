import { GenderEnum } from "../../../shared/enum/GenderEnum";
import { IResponseMyData } from "../../Students/interfaces/IResponse";

export interface IParamsSignin {
  username: string;
  password: string;
}

export interface IParamsMyData{
  token: string;
}

export interface IParamsAuth {
  tokenSuap: string;
  dataTeacher: any;
}

export interface IParamsCreateTeacher {
  id: number;
  matricula: string;
  nome_usual: string;
  cpf: string;
  rg: string;
  filiacao: Array<string>;
  data_nascimento: string;
  naturalidade: string;
  tipo_sanguineo: string;
  email: string;
  password: string;
  url_foto_75x100: string;
  url_foto_150x200: string;
  tipo_vinculo: string;
  vinculo: {
    matricula: string;
    nome: string;
    cargo: string;
    setor_suap: string;
    setor_siape: string;
    jornada_trabalho: string;
    funcao: Array<string>;
    campus: string;
    email: string;
    telefones_institucionais: Array<string>;
    categoria: string;
    displina_ingresso: string;
    url_foto_75x100: string;
    curriculo_lattes: string;
  }
  sexo: GenderEnum;
}


