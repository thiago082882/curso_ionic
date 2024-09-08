import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsPokemonsPage } from './details-pokemons.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsPokemonsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsPokemonsPageRoutingModule {}
