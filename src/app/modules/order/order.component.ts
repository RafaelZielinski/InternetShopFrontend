import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { CartSummary } from '../common/model/cart/cartSummary';
import { CartIconService } from '../common/service/cart-icon.service';
import { JwtService } from '../common/service/jwt.service';
import { InitData } from './model/initData';
import { OrderDto } from './model/OrderDto';
import { OrderSummary } from './model/OrderSummary';
import { OrderService } from './order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  cartSummary!: CartSummary;
  formGroup!: FormGroup;
  orderSummary!: OrderSummary;
  initData!: InitData;
  errorMessage = false;
  isLoggedIn = false;

  private statuses = new Map<string, string>([
    ["NEW", "Nowe"]
  ])
  constructor(
    private cookieService: CookieService,
    private orderService: OrderService,
    private formBuilder: FormBuilder,
    private cartItemService: CartIconService,
    private jwtService: JwtService
  ) { }

  ngOnInit(): void {
    this.checkCartEmpty();
    this.getinitData();
    this.formGroup = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      street: ['', Validators.required],
      zipcode: ['', Validators.required],
      city: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      shipment: ['', Validators.required],
      payment: ['', Validators.required]
    });
    this.isLoggedIn = this.jwtService.isLoggedIn();
  }

  checkCartEmpty() {
    let cartId = Number(this.cookieService.get("cartId"));
    this.orderService.getCart(cartId)
      .subscribe(summary => this.cartSummary = summary);
  }

  submit() {
    if (this.formGroup.valid) {
      this.orderService.placeOrder({
        firstname: this.formGroup.get('firstname')?.value,
        lastname: this.formGroup.get('lastname')?.value,
        street: this.formGroup.get('street')?.value,
        zipcode: this.formGroup.get('zipcode')?.value,
        city: this.formGroup.get('city')?.value,
        email: this.formGroup.get('email')?.value,
        phone: this.formGroup.get('phone')?.value,
        cartId: Number(this.cookieService.get('cartId')),
        shipmentId: Number(this.formGroup.get('shipment')?.value.id),
        paymentId:  Number(this.formGroup.get('payment')?.value.id)
      } as OrderDto)
        .subscribe({
          next: orderSummary => { 
            this.cartItemService.cartChanges(0);
            this.orderSummary = orderSummary;
            this.cookieService.delete('cartId');
            this.errorMessage = false;
        },
            error: err => this.errorMessage = true
        })
    }
  }

  getinitData(){
    this.orderService.getInitData()
    .subscribe(data =>  {
      this.initData = data;
      this.setDefultShipment();
      this.setDefaultPayment();
    })
  }

  setDefaultPayment() {
    this.formGroup.patchValue({"payment": this.initData.payment
    .filter(payment => payment.defaultPayment === true)[0]
  });
  }

  setDefultShipment(){
    this.formGroup.patchValue({"shipment": this.initData.shipments
    .filter(shipment => shipment.defaultShipment === true)[0]
  });
  }

  get shipment() {
    return this.formGroup.get("shipment");
  }

  getStatus(status: string) {
    return this.statuses.get(status);
  }

  get firstname() {
    return this.formGroup.get("firstname");
  }
  get lastname() {
    return this.formGroup.get("lastname");
  }
  get street() {
    return this.formGroup.get("street");
  }
  get zipcode() {
    return this.formGroup.get("zipcode");
  }
  get city() {
    return this.formGroup.get("city");
  }
  get email() {
    return this.formGroup.get("email");
  }
  get phone() {
    return this.formGroup.get("phone");
  }
}
