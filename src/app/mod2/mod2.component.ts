import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mod2',
  templateUrl: './mod2.component.html',
  styleUrls: ['./mod2.component.css']
})
export class Mod2Component implements OnInit {

fontSize: string = '13px';
fontFamily: string = 'Verdana, Geneva, Tahoma, sans-serif';
fontStyle: string = 'italic';

verdanaFontStyle: object = {'font-size': this.fontSize, 'font-family': this.fontFamily, 'font-style': 'italic'};

  constructor() { }

  ngOnInit(): void {
  }

}
