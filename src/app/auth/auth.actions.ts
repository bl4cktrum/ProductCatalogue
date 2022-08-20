export class Login {
    static readonly type = '[Auth] Login';
    constructor(public payload: { mail: string; password: string }) {}
}
  
export class Logout {
    static readonly type = '[Auth] Logout';
}

export class Register {
    static readonly type = '[Auth] Register';
    constructor(public payload: {name:string, surname:string,phoneNumber:number, mail:string, password:string, accessToken:string}) {}
}