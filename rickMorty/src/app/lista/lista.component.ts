import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

articulos:any = [];


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8")
    .subscribe(
      result => {
        this.articulos = result;
        console.log(this.articulos)
      },
      error => {
        console.log('problemas');
      }
    )
  }

}
