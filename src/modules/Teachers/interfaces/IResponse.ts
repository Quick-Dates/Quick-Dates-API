import { GenderEnum } from "../../../shared/enum/GenderEnum";

export interface IResponseSignin {
  token: string;
}

export interface IResponseMyData {
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
  password: string;
  sexo: GenderEnum;
}
