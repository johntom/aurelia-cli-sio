

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
    this.appName = 'Welcome to Bakery!';//'Todo List';
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
   // var socket = io("https://server.com", {path: "/chatApp/socket.io"});
    // var socket = io("https://localhost:3000", {path: "/bakery/socket.io"});
    
    var socket = io.connect('http://localhost:3000');
    socket.on('food_ready', (eventData) => {
      // <span class.bind="t.completed ? 'strikeout' : ''">${t.id} - ${t.title}</span>
      let rec = { id: eventData.rating, title: eventData.name + ' - ' + eventData.rating }
      // this.todos.push(rec)
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
