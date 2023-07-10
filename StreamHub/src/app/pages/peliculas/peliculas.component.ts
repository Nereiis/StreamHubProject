import { PeliculasService } from 'src/app/services/peliculas/pelicula.service';
import { PeliculasI } from 'src/app/models/interfaces';
import { Component } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent {
  peliculasList: PeliculasI[] = [];
  constructor(private service: PeliculasService) {}

  ngOnInit(): void {
    this.service.getPeliculas().subscribe((data: any) => {
      console.log(data);
      this.peliculasList = [...data];
    })
  }
}