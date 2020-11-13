import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-email',
  templateUrl: './email.page.html',
  styleUrls: ['./email.page.scss'],
})
export class EmailPage implements OnInit {

  constructor(
    public emailComposer: EmailComposer
  ) { }

  pedido: Pedido = new Pedido();

  ngOnInit() {
    Object.keys(this.pedido).forEach(key => {
      console.log(key);
    });
  }

  async comporEmail(eTo: string, eCc: any, eAttachments: any, eSubject: string, eBody: string, eIsHtml: boolean) {
    const email = {
      to: eTo,
      cc: eCc,
      attachments: eAttachments,
      subject: eSubject,
      body: eBody,
      isHtml: eIsHtml
    };

    return email;
  }

  async newEmail() {
    const email = await this.comporEmail(
      'silvio@tcmed.com.br',
      'swait2014@outlook.com',
      [
        'file://img/tela.png',
        'file://img/tela.png'
      ],
      'Teste de Envio de Email do Silvio',
      'Gerando email por meio de app IONIC',
      true
    );
    this.emailComposer.open(email);
  }

  getClients() {
    this.emailComposer.getClients().then((apps: []) => {
      // Returns an array of configured email clients for the device
      console.log(apps);

      this.hasClient(apps);
    });
  }


  hasClient(app: any) {
    this.emailComposer.hasClient().then(app, (isValid: boolean) => {
      if (isValid) {

        console.log('comporEmail');
        // Now we know we have a valid email client configured
        // Not specifying an app will return true if at least one email client is configured
      }
     });
  }

}

export interface ISuplier {
  add();
}

export abstract class ComumEntity{
  id = 0;
  createdBy = '';
  abstract  save(): void;
}

export class Suplier extends ComumEntity implements ISuplier{
  SupplierName = '';
  SupplierId = 0;
  add() {
    alert('Hello');
  }
  save() {

  }
}


// tslint:disable: variable-name
abstract class SistemaVendas {
  id: number = null;
  created_at: number = null;
  updated_at: number = null;
  user: number = null;
  user_name: string = null;
}

class  Pedido extends SistemaVendas {
  cliente_id: number = null;
  valor: number = null;
}
