import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//modules
import { PipesModule } from '../pipes/pipes.module';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';


import { AccountSettingComponent } from './account-setting/account-setting.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { PagesComponent } from './pages.component';


import { BusquedaComponent } from './busqueda/busqueda.component';

import { InicioComponent } from './inicio/inicio.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { CategoryComponent } from './category/category.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './cart/cart.component';
// import { SearchComponent } from './search/search.component';
// import { WalletComponent } from './wallet/wallet.component';
// import { SettingsComponent } from './settings/settings.component';
// import { ProductComponent } from './product/product.component';
// import { ShippingComponent } from './shipping/shipping.component';
// import { PickupStoreComponent } from './pickup-store/pickup-store.component';
// import { PedidosComponent } from './pedidos/pedidos.component';
// import { PedidoStatusComponent } from './pedido-status/pedido-status.component';
// import { SinglepageComponent } from './singlepage/singlepage.component';
// import { LoginRegisterComponent } from './login-register/login-register.component';
// import { WalletOrderComponent } from './wallet-order/wallet-order.component';
// import { WalletPaymentComponent } from './wallet-payment/wallet-payment.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AccountSettingComponent,
    BusquedaComponent,
    InicioComponent,
    HomeComponent,
    PagesComponent,
    ProfileComponent,
    ProfileEditComponent,
    CategoryComponent,
    FavoritesComponent,
    StoreComponent,
    CartComponent,
    // SearchComponent,
    // WalletComponent,
    // WalletOrderComponent,
    // WalletPaymentComponent,
    // ShippingComponent,
    // SettingsComponent,
    // ProductComponent,
    // PickupStoreComponent,
    // PedidosComponent,
    // PedidoStatusComponent,
    // SinglepageComponent,
  ],
  exports: [
    DashboardComponent,
    PagesComponent,
    AccountSettingComponent,
    InicioComponent,
    HomeComponent,
    PagesComponent,
    ProfileComponent,
    ProfileEditComponent,
    CategoryComponent,
    FavoritesComponent,
    StoreComponent,
    CartComponent,
    // SearchComponent,
    // WalletComponent,
    // WalletOrderComponent,
    // WalletPaymentComponent,
    // ShippingComponent,
    // SettingsComponent,
    // ProductComponent,
    // PickupStoreComponent,
    // PedidosComponent,
    // PedidoStatusComponent,
    // SinglepageComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    RouterModule,
    ComponentsModule,
    ReactiveFormsModule,
    PipesModule


  ]
})
export class PagesModule { }
