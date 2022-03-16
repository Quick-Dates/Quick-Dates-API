import apiSuap from '../config/setup-api-suap';
import { IParamsMyData, IParamsSignin } from '../../modules/Students/interfaces/IParams';
import { IResponseMyData, IResponseSignin } from '../../modules/Students/interfaces/IResponse';
import fetch from 'node-fetch';

class SuapService {
  async signin({ username, password }: IParamsSignin): Promise<IResponseSignin> {
    console.log('signin', username);
    const response = await fetch('https://suap.ifmt.edu.br/api/v2/autenticacao/token/',
    {method: 'POST',
     body: JSON.stringify({username, password}),
     headers: {'Content-Type': 'application/json'}
    })
    console.log('response')
    const token = await response.json();
    console.log(token);
    return token as any;
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
