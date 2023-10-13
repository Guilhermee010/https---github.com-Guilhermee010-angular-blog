import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/datas/datasFake';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{
photoCover: string =""
contentTitle: string=" "
contentText: string=""
private id:string | null= "0"

constructor(
 private route:ActivatedRoute
){ }

ngOnInit(): void {
  this.route.paramMap.subscribe( value =>
    this.id= value.get('id')
  )
  this.setValuesToComponent(this.id)
}
  setValuesToComponent(id:String | null){
    const result = dataFake.filter(article => article.id == id)[0]
    this.contentTitle = result.title
    this.photoCover = result.photo
    this.contentText = result.description

  }


}
