import { Component, computed, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  selector: 'app-properties-page',
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css'
})
export class PropertiesPageComponent {

  user = signal<User>({
    id: 2,
    email: "janet.weaver@reqres.in",
    first_name: "Janet",
    last_name: "Weaver",
    avatar: "https://reqres.in/img/faces/2-image.jpg"
  });

  fullName = computed(() => `${this.user().first_name} ${this.user().last_name}`  )

  counter = signal<number>(1);

  userChangedEffect = effect(() => {
    console.log(`${this.user().first_name} - ${this.counter()}`);
  });


  //Actualizando datos parciales con signals
  onFieldUpdated(field: keyof User, value: string) {

    this.user.update(current => {
      //Metodo traidicional
      // this.user.update(current => ({
      //   ...current,
      //   [field]: value
      // }))

      switch (field) {
        case 'email':
          current.email = value;
          break;

        case 'first_name':
          current.first_name = value;
          break;

        case 'last_name':
          current.last_name = value;
          break;

        case 'id':
          current.id = Number(value);
      }

      return current;
    });
  }


  increase(value: number) {
    this.counter.update( current => current + value)
  }

}
