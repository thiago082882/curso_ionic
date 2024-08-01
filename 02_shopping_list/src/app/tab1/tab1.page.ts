import { AlertController } from '@ionic/angular';
import { Component } from '@angular/core';
import { ShoppingItemsService } from '../service/shopping-items.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    public shoppingList : ShoppingItemsService,
    private alertController : AlertController,
    private menuController : MenuController
  ) {}

  async removeItem(item:string){

    const alert = await this.alertController.create({
      header : 'Confirmação',
      message: 'Você tem certeza de que deseja apagar este item?',
      buttons:[
        {
          text:'Sim',
          handler:()=>{
            this.shoppingList.removeItem(item);
          }
        },
        {
          text:'Não',
          handler:()=>{
            alert.dismiss();
          }
        }
      ]
   });
   await alert.present();

  }
  onRenderItems($event){
    console.log($event);
    const item = this.shoppingList.items.splice($event.detail.from,1)[0];
    this.shoppingList.items.splice($event.detail.to,0,item);
    $event.detail.complete();
    console.log(this.shoppingList.items);
    
  }

  async removeAll(){
    const alert = await this.alertController.create({
      header : 'Confirmação',
      message: 'Você tem certeza de que deseja apagar todos item?',
      buttons:[
        {
          text:'Sim',
          handler:()=>{
           this.shoppingList.removeAllItems();
           this.menuController.close();
          }
        },
        {
          text:'Não',
          handler:()=>{
            alert.dismiss();
          }
        }
      ]
   });
   await alert.present();

  
  }
}
