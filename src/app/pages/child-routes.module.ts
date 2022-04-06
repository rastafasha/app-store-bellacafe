import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminGuard } from '../guards/admin.guard';
import { PagesComponent } from './pages.component';

import { AccountSettingComponent } from './account-setting/account-setting.component';

import { BusquedaComponent } from './busqueda/busqueda.component';
import { HomeComponent } from './home/home.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './cart/cart.component';
// import { PedidoStatusComponent } from './pedido-status/pedido-status.component';
// import { PedidosComponent } from './pedidos/pedidos.component';
// import { ProductComponent } from './product/product.component';
// import { ProfileEditComponent } from './profile-edit/profile-edit.component';
// import { ProfileComponent } from './profile/profile.component';
// import { SearchComponent } from './search/search.component';
// import { SettingsComponent } from './settings/settings.component';
// import { ShippingComponent } from './shipping/shipping.component';
// import { WalletOrderComponent } from './wallet-order/wallet-order.component';
// import { WalletPaymentComponent } from './wallet-payment/wallet-payment.component';
// import { WalletComponent } from './wallet/wallet.component';



const childRoutes: Routes = [
  { path: '', component: HomeComponent, data:{tituloPage:'home'} },
            { path: 'account-settings', component: AccountSettingComponent, data:{tituloPage:'Ajustes de Cuenta'} },
            { path: 'buscar/:termino', component: BusquedaComponent, data:{tituloPage:'Busquedas'} },


            //tienda
  {path:'home', component: HomeComponent, data:{tituloPage:'Bienvenido '}},
  {path:'profile', component: ProfileComponent, data:{tituloPage:'Profile '}},
  {path:'profile/edit', component: ProfileEditComponent, data:{tituloPage:'Profile Edit '}},
  {path:'product/:id', component: ProductComponent, data:{tituloPage:'Product '}},
  {path:'category', component: CategoryComponent, data:{tituloPage:'Category '}},
  {path:'category/:id', component: CategoryComponent, data:{tituloPage:'Category '}},
  {path:'favorites', component: FavoritesComponent, data:{tituloPage:'Favorites '}},
  {path:'store', component: StoreComponent, data:{tituloPage:'Store '}},
  {path:'cart', component: CartComponent, data:{tituloPage:'Cart '}},
  // {path:'search', component: SearchComponent, data:{tituloPage:'Search '}},
  // {path:'wallet', component: WalletComponent, data:{tituloPage:'Wallet '}  },
  // {path:'wallet-order', component: WalletOrderComponent, data:{tituloPage:'Wallet Order'}  },
  // {path:'wallet-payment', component: WalletPaymentComponent, data:{tituloPage:'Wallet Payment'}  },
  // {path:'settings', component: SettingsComponent, data:{tituloPage:'Bienvenido '}},
  // {path:'shipping', component: ShippingComponent, data:{tituloPage:'Shipping '}},
  // {path:'pickup-store', component: ShippingComponent, data:{tituloPage:'Pickup Store '}},
  // {path:'orders', component: PedidosComponent, data:{tituloPage:'Orders '}},
  // {path:'order-status', component: PedidoStatusComponent, data:{tituloPage:'Order Status '}},


            //rutas de admin
            // { path: 'usuarios', canActivate: [ AdminGuard ], component: UsuariosComponent, data:{tituloPage:'Mantenimiento de Usuarios '} },
]

@NgModule({
  imports: [ RouterModule.forChild(childRoutes) ],
    exports: [ RouterModule ]
})
export class ChildRoutesModule { }
