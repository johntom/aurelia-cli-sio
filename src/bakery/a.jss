

import { AppRouter } from 'aurelia-router';
import { inject, bindable } from 'aurelia-framework';
import { ApiService } from 'utils/servicesApi';
import io from 'socket.io-client'; // bare import
@inject(ApiService, AppRouter)//,  AuthServiceGTZ, ApiService)
export class Bakery {
  heading = 'Welcome to Bakery!';
  firstName = 'John';
  lastName = 'Doe';
  previousValue = this.fullName;
  constructor(api, router) {
    this.upmess = ''
    this.router = router
    this.api = api
    this.appName = 'Todo List';
    this.todoTitle = '';
    // this.todos = [
    //   new Todo('Task one', false),
    //   new Todo('Task two', false),
    //   new Todo('Task three', false)
    // ];
    this.socketio = io('', {
      'reconnection': true,
      'reconnectionDelay': 500,
      'reconnectionDelayMax': 5000,
      'reconnectionAttempts': 10
    });
  }
  // activate() {
  //   $(document).ready(function () {
  //     $(this).scrollTop(0);
  //   });
  // }
  activate() {

    var socket = io.connect('http://localhost:3000');
    socket.on('food_ready', (eventData) => {
      // <span class.bind="t.completed ? 'strikeout' : ''">${t.id} - ${t.title}</span>
      let rec = { id: eventData.rating, title: eventData.name + ' - ' + eventData.rating }
      this.todos.push(rec)
      this.bakeries.push(eventData)

      //let data = JSON.parse(eventData); // do something with data received
      console.log('data', eventData.name + ' - ' + eventData.rating)
    })


    return this.api.getbakery().then((jsonRes) => {
      this.bakeries = jsonRes//.data
      console.log('bb ', this.bakeries)
    });

  }


  addFood() {
    let product = `{name:${this.name.value},rating:${rating.value}}`
    //let product = `name=${this.name.value}&rating=${rating.value}`

    console.log('a ', product)
    return this.api.addbakery(product).then((jsonRes) => {
      //  this.bakeries = jsonRes//.data
      console.log('bb ', product)
    });
  }
  addFoodJ() {
    // let product = `{name:${this.name.value},rating:${rating.value}}`
    // let product = `{"name":"test4"},"rating":${rating.value}}`
    let product = {}
    product.name = this.name.value
    product.rating = 3//this.rating.value


    // let product = `name=${this.name.value}&rating=${rating.value}` 
    console.log('a ', product)
    return this.api.addbakeryJ(product).then((jsonRes) => {
      //  this.bakeries = jsonRes//.data
      console.log('bb ', product)
    });
  }
}



// import { MdToastService, MdModal } from "aurelia-materialize-bridge";
// import { AppRouter } from 'aurelia-router';
// import { inject, bindable } from 'aurelia-framework';
// import { ApiService } from 'utils/servicesApi';


// @inject(MdToastService, AppRouter, ApiService) //,  AuthServiceGTZ, ApiService)

// export class Bakery {
//   heading = 'Welcome to the Aurelia Navigation-Kendo-Systemjs-Cli App!';


//   constructor(toast, router, api) {
//     this.modal = MdModal;
//     this.toast = toast
//     this.api = api
//     this.appName = 'Todo List';
//     this.todoTitle = '';
//     // this.todos = [
//     //   new Todo('Task one', false),
//     //   new Todo('Task two', false),
//     //   new Todo('Task three', false)
//     // ];
//   }
//   addFoodJ() {
//   }
//   async processScans() {
//     // alert('in ')
//     // let scanapth = 'DOBRECEIPTS'
//     // //  let scanapth2 = 'WORK_ORDER'//INVOICES'
//     // this.scansinvprocessed = 0;
//     // this.scanswoprocessed = 0;
//     // await this.api.walkdir(scanapth)
//     //   .then((jsonRes) => {
//     //     let dobs = jsonRes
//     //     console.log('dobs added ', dobs)
//     //     this.scansdobsprocessed = dobs.data
//     //   });
//     //    this.toast.show(`You Processed all scans  dob:${this.scansdobsprocessed} invocies:${this.scanswoprocessed}!`, 4000);

//   }
//   agree(e) {
//     this.toast.show("You agreed!", 4000);
//   }

//   disagree(e) {
//     this.toast.show("You disagreed!", 4000);
//   }

//   openModal() {
//     this.modal.open();
//   }


//   testToast() {
//     // Materialize.toast('record saved!', 4000) // 4000 is the duration of the toast
//     this.toast.show("You disagreed!", 4000);

//   }


//   submit() {
//     this.previousValue = this.fullName;
//     // eslint-disable-next-line no-alert
//     alert(`Welcome, ${this.fullName}!`);
//   }

//   canDeactivate() {
//     // if (this.fullName !== this.previousValue) {
//     //   // eslint-disable-next-line no-alert
//     //   return confirm('Are you sure you want to leave?');
//     // }
//   }
// }

// export class UpperValueConverter {
//   toView(value) {
//     return value && value.toUpperCase();
//   }
// }
