import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  /*responsiveNavBar() {
    var x = document.getElementById("navBar");
    if(x.className == "topnav") {
      x.className += " responsive";
    }
    else {
      x.className = "topnav";
    }
  }*/
}
