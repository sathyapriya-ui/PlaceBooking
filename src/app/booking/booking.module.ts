import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BookingPageRoutingModule } from './booking-routing.module';
import { BookingPage } from './booking.page';
import { CreateBookingComponent } from './create-booking/create-booking.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingPageRoutingModule
  ],
  declarations: [BookingPage, CreateBookingComponent]
})
export class BookingPageModule {}
