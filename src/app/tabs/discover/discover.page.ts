import { Component, OnInit } from '@angular/core';
import { Places } from 'src/app/model/places';

import { PlaceService } from 'src/app/service/place.service';


@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadedPlaces: Places[];
  constructor(private PlaceService: PlaceService) { }

  ngOnInit() {
    this.loadedPlaces = this.PlaceService.place;

  }

}
