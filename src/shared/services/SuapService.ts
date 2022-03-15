import apiSuap from '../config/setup-api-suap';
import { IParamsMyData, IParamsSignin } from '../../modules/Students/interfaces/IParams';
import { IResponseMyData, IResponseSignin } from '../../modules/Students/interfaces/IResponse';

class SuapService {
  async signin({ username, password }: IParamsSignin): Promise<IResponseSignin> {
    console.log('signin')
    const {data: token} = await apiSuap.post('/autenticacao/token/', { username, password })
    console.log(token)
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
