import { Component, OnInit } from '@angular/core';
import { Places } from 'src/app/model/places';
import { PlaceService } from 'src/app/service/place.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  loadedPlaces: Places[];
  constructor(private PlaceService: PlaceService) { }

  ngOnInit() {
    this.loadedPlaces = this.PlaceService.place;

  }

}
