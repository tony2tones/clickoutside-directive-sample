import { Component } from '@angular/core';

export interface ListType {
  id: number,
  name: string,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clickoutsidedirective';
  toggleDropdownMenu = false;

  itemsList:ListType[] = [
    {id:1 , name: 'This'},
    {id:2 ,name: 'is'},
    {id:3 , name: 'a'},
    {id:4 , name: 'dropdown'},
    {id:5 , name: 'menu'},
  ];

  toggleDropdown() {
    this.toggleDropdownMenu = !this.toggleDropdownMenu;
  }

  doesThisWork() {
    console.log('olaaa', this.toggleDropdownMenu);
  }


}
