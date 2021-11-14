import { GenderEnum } from "../../../shared/enum/GenderEnum";
import { IResponseMyData } from "./IResponse";

export interface IParamsSignin {
  username: string;
  password: string;
}

export interface IParamsMyData {
  token: string;
}

export interface IParamsAuth {
  tokenSuap: string;
  dataTeacher: IResponseMyData;
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


