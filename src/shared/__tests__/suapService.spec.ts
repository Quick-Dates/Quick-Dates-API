import apiSuap from "../config/setup-api-suap";
import SuapService from "../services/SuapService";

describe('SuapService', () => {
  it('should signin of suap', async() => {
    const suapService = new SuapService();
    const params = { username: 'willian', password: '123' };
    const fakeToken = 'sfagsf';
    jest.spyOn(apiSuap, 'post').mockResolvedValue({data: fakeToken})

    const token = await suapService.signin(params);

    expect(token).toBe(fakeToken);
    expect(apiSuap.post).toHaveBeenCalledWith('/autenticacao/token/', params);
  })
  it('should get my data of suap', async() => {
    const suapService = new SuapService();
    const fakeToken = 'sfagsf';
    const fakeData = {
      id: 2,
      nome: 'Willian',
    }

    jest.spyOn(apiSuap, 'get').mockResolvedValue({data: fakeData})

    const data = await suapService.indexMyData({token: fakeToken})

    expect(data).toEqual(fakeData);
    expect(apiSuap.get).toHaveBeenCalledWith('/minhas-informacoes/meus-dados', {
      headers: {
        Authorization: `JWT ${fakeToken}`,
      }
    })
  })
})
