import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// ACTIVA EL MODAL DE GOOGLE Y GUARDA LA SESION GRACIAS A SERALIZER DESPUES DE RETORNAR USER EN GOOGLESTRATEGY
@Injectable()
export class GoogleAuthGuard extends AuthGuard('google') {
  // METODO 1 PARA PROMPT SELECT_ACCOUNT
  constructor() {
    super({
      prompt: 'select_account consent'
    });
  }

  async canActivate(context: ExecutionContext) {
    const activate = (await super.canActivate(context)) as boolean;
    const request = context.switchToHttp().getRequest();

    // logIn activa passport para usar sessiones y solicitar la auth del ususario
    await super.logIn(request);
    return activate;
  }
}
