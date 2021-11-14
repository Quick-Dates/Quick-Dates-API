import { GenderEnum } from "../../../shared/enum/GenderEnum";
import { IResponseMyData } from "../../Students/interfaces/IResponse";

export interface IParamsSignin {
  username: string;
  password: string;
}

export interface IParamsMyData {
  token: string;
}

export interface IParamsAuth {
  tokenSuap: string;
  dataTeacher: any;
}

export interface IParamsCreateTeacher {
  registration: string,
  name: string,
  fullName: string,
  password: string,
  email: string,
  birthDate: string,
  gender: GenderEnum,
  suapId: number
}


