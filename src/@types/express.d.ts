declare namespace Express{
  export interface Request {
      user: {
          id: string,
          profile: string;
          tokenSuap: string;
          name: string;
          course?: string;
      }
  }
}
