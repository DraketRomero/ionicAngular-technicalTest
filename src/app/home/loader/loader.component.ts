import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {

  showLoader: boolean = false;

  segs: number = 0;

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) { }

  redirect() {
    this.activatedRoute.params.subscribe(({ segs }) => {
      this.segs = segs;
    })

    this.showLoader = true;
    setTimeout(() => {
      this.showLoader = false;
      this.router.navigateByUrl(`/images/${this.segs}`);
    }, (this.segs * 1000));
  }
}
