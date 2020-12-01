import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-donators-item',
  templateUrl: './donators-item.component.html',
  styleUrls: ['./donators-item.component.scss']
})
export class DonatorsItemComponent implements OnInit {

  @Input() donator: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.donator);
  }

}
