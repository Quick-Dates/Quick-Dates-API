import apiSuap from '../../../shared/config/setup-api-suap';
import { IParamsMyData, IParamsSignin } from '../interfaces/IParams';
import { IResponseMyData, IResponseSignin } from '../interfaces/IResponse';

class SuapService {
  async signin({ username, password }: IParamsSignin): Promise<IResponseSignin> {
    const {data: token} = await apiSuap.post('/autenticacao/token/', { username, password })
    return token;
  }

  async indexMyData({token}: IParamsMyData): Promise<IResponseMyData> {
    const { data } = await apiSuap.get('/minhas-informacoes/meus-dados', {
      headers: {
        Authorization: `JWT ${token}`,
      }
    })
    return data;
  }
}

export default SuapService;
