import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { I18nPluralPipe, I18nSelectPipe, SlicePipe } from '@angular/common';

const client1 = {
  name: 'Fernando',
  gender: 'Male',
  age: 40,
  address: 'Ottawa, Canadá',
};

const client2 = {
  name: 'Melissa',
  gender: 'Female',
  age: 30,
  address: 'Toronto, Canadá',
};
@Component({
  selector: 'uncommon',
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe, SlicePipe],
  templateUrl: './uncommon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UncommonComponent {
  client = signal(client1);

  inviatationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }

    this.client.set(client1);
  }

  clientsMap = signal({
    '=0': 'No tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    other: 'tenemos # de clientes esperando',
  });

  clients = signal(['María', 'Pedro', 'Juan', 'Adriana']);

  deleteClient() {
    this.clients.update((client) => client.slice(1));
  }
}
