import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../../cart-service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  selectedBrand: string = 'ALL';
  categoryList: any[] = [];
  productsList: any[] = [];
  productsForSelectedCategory: any = [];
  productsForSelectedBrand: any[] = [];
  selectedBrandArray: string | null = '';
  currentTabIndex: number = 0;
  currentSortSetting: string = '';
  result: any;
  cart: any = [];

  value: number = 40;
  highValue: number = 60;
  options: any = {
    floor: 0,
    ceil: 100
  };



  constructor(private cartService: CartService,  private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.getProducts()
    debugger;
  }

  tabClick(tab: any) {
    this.selectedBrand = 'ALL'
    this.selectedBrandArray = null
    debugger
    console.log(tab);
    this.currentTabIndex = tab.index
    this.getProductListByCategory(tab.index, true)
  }
  getProductListByCategory(index: number, fromTab: any) {
    let categoryName = this.categoryList[index]
    const productsForSelectedCategory = this.productsList.filter(x => x.category === categoryName);
    this.productsForSelectedCategory = productsForSelectedCategory
    let event = {target: {value: ''}}
    event.target.value = this.currentSortSetting
    this.sortProductCategory(event)
    if(this.selectedBrandArray) {
      this.choosenBrand(this.selectedBrandArray)
    }
    debugger
  }
  getProducts() {
    this.cartService.getProducts().subscribe(
      (result) => {
        debugger
        this.productsList = result.products
        debugger
        this.categoryList = [...new Set(this.productsList.map((x) => x.category))];
        this.getProductListByCategory(0, false)

      }
    )
  }
  choosenBrand(event: any) {
    debugger
    let val = event.target.value
    if(!!val) {
      this.getProductByBrand(val)
      this.selectedBrandArray = val
      this.selectedBrand = 'CUSTOM'
    } else {
      debugger
      this.selectedBrand = 'ALL'
      this.selectedBrandArray = val
      this.getProductListByCategory(this.currentTabIndex, false)
    }
    debugger

  }

  buyNow(stock: number) {
    if(stock < 50) {
      this.toastr.warning('hurry! only a few items left')
    }
  }

  getProductByBrand(brand: string) {
    const productsForSelectedBrand = this.productsForSelectedCategory.filter((x: any) => x.brand === brand)
    this.productsForSelectedBrand = productsForSelectedBrand
  }

  getStarArray(number: any) {
    let starArray: any = Array.from(Array(Math.floor(number)).keys())
    return starArray
  }

  sortProductCategory(event: any) {
    let val = event.target.value;
    this.currentSortSetting = val
    let sortedArray: any[];
    if(val === 'rating') {
      sortedArray =  this.productsForSelectedCategory.sort((a: any, b: any) => parseFloat(a.rating) - parseFloat(b.rating));
      debugger
      this.productsForSelectedCategory = sortedArray.reverse()

    }
    if(val === 'price') {
      sortedArray =  this.productsForSelectedCategory.sort((a: any, b: any) => parseFloat(a.price) - parseFloat(b.price));
      debugger
      this.productsForSelectedCategory = sortedArray

    }
    if(val === 'discount') {
      sortedArray =  this.productsForSelectedCategory.sort((a: any, b: any) => parseFloat(a.discountPercentage) - parseFloat(b.discountPercentage));
      debugger
      this.productsForSelectedCategory = sortedArray.reverse()

    }

  }

  addItemToCart(product: any) {
    debugger
    this.cart.push(product)
    this.cartService.callCartMethod(this.cart);
    this.toastr.success('Added to Cart')
  }
}
