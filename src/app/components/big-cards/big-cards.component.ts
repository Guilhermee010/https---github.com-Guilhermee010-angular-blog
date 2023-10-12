import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-cards',
  templateUrl: './big-cards.component.html',
  styleUrls: ['./big-cards.component.css']
})
export class BigCardsComponent {
@Input()
photoCover: string =""
@Input()
cardTitle: string = ""
@Input()
cardDescription: string = ""
}
