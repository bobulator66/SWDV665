import { component } from '@angular/core';
import { navController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class Homepage {

    title = "Grocery List";

    items = [
        {
            name: "Milk",
            quantity: 2

        },
        {
            name: "Bread",
            quantity: 2

        },
        {
            name: "Banana",
            quantity: 3

        },    
        {
            name: "Sugar",
            quantity: 1

        },
    ];   

    constructor(public AlertCtrl:AlertController, public navCtrl: navController, public ToastCtrl: ToastController) {
        
    }
    
    removeItem(item, index) {
       console.log("removing item -",item, index) 
       const toast = this.ToastCtrl.create({
           message: 'Removing Item _' + index + "...",
           duration:3000
       });
       toast.present();

       this.items.splice(index, 1);
    }
    
    addItem() {
        console.log("adding Item");
        this.showAddItemPrompt();
    }

    showAddItemPrompt() {

        const prompt = this.AlertCtrl.create({
            title: 'Add Item',
            message: "Please enter item...",
            inputs: [
                {
                    name:'name',
                    placeholder: 'Name'
                },
                {
                    name:'quantity',
                    placeholder: 'Quantity'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text:'Save',
                    handler: item =>{
                        console.log('save clicked', item);
                        this.items.push(item);
                    }
                }
            ]
        });
        prompt.present();
    }