import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsPokemonsPageRoutingModule } from './details-pokemons-routing.module';

import { DetailsPokemonsPage } from './details-pokemons.page';
import { GetStatPipe } from 'src/app/pipes/get-stat.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsPokemonsPageRoutingModule
  ],
  declarations: [DetailsPokemonsPage,GetStatPipe]
})
export class DetailsPokemonsPageModule {}
