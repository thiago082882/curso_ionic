import { Pokemon } from 'src/app/models/pokemon';
import { NavController, NavParams } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-pokemons',
  templateUrl: './details-pokemons.page.html',
  styleUrls: ['./details-pokemons.page.scss'],
})
export class DetailsPokemonsPage {

  public pokemon : Pokemon;
  constructor(
    private navParams: NavParams,
    private navController : NavController
  ) { 
    this.pokemon = this.navParams.data["pokemon"];
    console.log(this.pokemon);
    
  }

  goBack(){
  this.navController.pop();
  }
}
