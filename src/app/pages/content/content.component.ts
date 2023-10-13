import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{
photoCover: string ="https://i0.wp.com/metagalaxia.com.br/wp-content/uploads/2023/06/Itachi-Uchiha.webp?resize=1024%2C768"
contentTitle: string="Itachi "
contentText: string="Itachi é o irmão mais velho de Sasuke Uchiha e é responsável pela morte de todos os membros de seu clã, poupando apenas Sasuke. Durante boa parte da série, ele é tratado como um ninja renegado, mas perto do momento de sua morte, o seu papel como vilão é bastante diminuído. É revelado que ele foi ordenado pelos conselheiros da Vila da Folha a matar o próprio clã"

constructor(
 private route:ActivatedRoute
){ }

ngOnInit(): void {
  this.route.paramMap.subscribe( value =>
    console.log(value.get('id'))

  )
}

}
