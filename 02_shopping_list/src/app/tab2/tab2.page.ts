import { Component } from '@angular/core';
import { ShoppingItemsService } from '../service/shopping-items.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public item : string;

  constructor(
    private shoppingList : ShoppingItemsService,
    private alertController : AlertController
  ) {}

  addItem(){
    console.log(this.item);
    if(!this.shoppingList.existsItems(this.item)){
        this.shoppingList.addItem(this.item);
        this.item = "";
        console.log(this.shoppingList.items);
        this.AlertSuccess();
    }else {
     this.AlertError();
      

    }
    
  }
  async AlertSuccess(){

    const alert = await this.alertController.create({
       header : 'Sucesso',
       message: 'Item adicionado!',
       buttons:['Ok']
    })
    await alert.present();

  }

  async AlertError(){

    const alert = await this.alertController.create({
       header : 'Erro',
       message: 'Item já existe',
       buttons:['Ok']
    })
    await alert.present();

  }

}
