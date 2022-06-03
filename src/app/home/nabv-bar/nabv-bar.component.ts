import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart-service';

@Component({
  selector: 'app-nabv-bar',
  templateUrl: './nabv-bar.component.html',
  styleUrls: ['./nabv-bar.component.scss']
})
export class NabvBarComponent implements OnInit {

  cart: any[] = [];

  constructor(private cartService: CartService) {
    this.cartService.cartMethodCalled$.subscribe(res => {
      if(!!res){
        this.cart = res;
      }
     });
  }

  ngOnInit(): void {
  }

}
