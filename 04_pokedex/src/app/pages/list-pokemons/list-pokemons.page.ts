import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController, NavParams } from '@ionic/angular';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemons.page.html',
  styleUrls: ['./list-pokemons.page.scss'],
})
export class ListPokemonsPage implements OnInit {

  public pokemon : Pokemon[];

  constructor(
    private pokemonService : PokemonService,
    private loadingController : LoadingController,
    private navParams : NavParams,
    private navController : NavController
  ) {
    this.pokemon = [];
   }

  ngOnInit() {

    this.morePokemon();
  }

  async morePokemon($event = null ){

    const promise = this.pokemonService.getPokemons();

    if(promise){
      let loading = null;
      if(!$event){

        loading =  await this.loadingController.create({
          message:'Carregando...'
        });

         await loading.present();

      }
      promise.then((result:Pokemon[])=>{

        console.log(result);

        this.pokemon = this.pokemon.concat(result);

        console.log(this.pokemon);
        
        if($event){
          $event.target.complete();
        }
/*
        setTimeout(()=>{
          if(loading){
            loading.dismiss();
          }
        },5000)*/
        if(loading){
          loading.dismiss();
        }

      }).catch((err)=>{
        if($event){
          $event.target.complete();
        }
        
        if(loading){
          loading.dismiss();
        }
      })
    }
  }
  goToDetail(pokemon:Pokemon){
this.navParams.data["pokemon"] = pokemon;
this.navController.navigateForward("details-pokemons")
  }
}
