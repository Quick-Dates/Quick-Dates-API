import { GenderEnum } from "../../../shared/enum/GenderEnum";

export interface IParamsSignin {
  username: string;
  password: string;
}

export interface IParamsMyData{
  token: string;
}

export interface IParamsCreateStudent {
  registration: number,
  name: string,
  fullName: string,
  password: string,
  email: string,
  birthDate: string,
  situation: string,
  systematicSituation: string,
  gender: GenderEnum,
  suapId: number
}
