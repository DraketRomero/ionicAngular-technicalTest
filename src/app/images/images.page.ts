import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface images {
  name: string;
  text: string;
}

@Component({
  selector: 'app-images',
  templateUrl: './images.page.html',
  styleUrls: ['./images.page.scss'],
})
export class ImagesPage implements OnInit {

  segs: number = 0;

  imagesHeroes: images[] = [
    {
      name: "Batman",
      text: "En los cómics, uno de los apodos más intrigantes de Batman es 'El mejor detective del mundo'. Este título resalta su increíble capacidad para resolver misterios y su aguda mente analítica, que a menudo lo pone a la par o incluso por encima de sus habilidades físicas y tecnológicas.",
    },
    {
      name: "WonderWoman",
      text: "Wonder Woman fue creada en 1941 por William Moulton Marston, quien también es conocido por inventar una versión temprana del detector de mentiras. Este detalle curioso se refleja en el famoso 'Lazo de la Verdad' de Wonder Woman, que obliga a quien lo toca a decir la verdad."
    },
    {
      name: "Superman",
      text: "El símbolo de la 'S' en el pecho de Superman no solo representa su nombre. En la versión moderna de los cómics, se ha revelado que en Krypton, el símbolo también es el emblema de la familia El y significa 'esperanza'."
    },
  ];

  constructor(
    private readonly activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ segs }) => {
      this.segs = +segs;
    })
  }

  arayHeores(): images[] {

    if(this.segs === 10) {
      return this.imagesHeroes.slice(0, 2);
    }

    if(this.segs === 15) {
      const randoom = Math.floor(Math.random() * this.imagesHeroes.length);
      let randoomElement = [];
      randoomElement.push(this.imagesHeroes[randoom]);

      return randoomElement;  
    }

    return this.imagesHeroes;
  }

}
