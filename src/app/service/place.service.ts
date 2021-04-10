import { Injectable } from '@angular/core';
import { Places } from '../model/places';


@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  private _place: Places[] = [
    new Places(
      '01',
      'New york',
      'In the new york city',
      'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bG9uZG9ufGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80',
      '1000.00'
    ),
    new Places(
      '02',
      'London',
      'In the london city',
      'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bG9uZG9ufGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80',

      '2000.00'
    ),

    new Places(
      '03',
      'Paris',
      'In the Paris city',
      'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bG9uZG9ufGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80',
      '2000.00'
    )

    ,
    new Places(
      '04',
      'Dubai',
      'In the Dubai city',
      'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bG9uZG9ufGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80',
      '2000.00'
    )
  ];

  get place() {
    return [...this._place];
  }
  constructor() { }

  getPlace(id: string){
    return {...this._place.find(p=> p.id === id)};
    
  }
}
