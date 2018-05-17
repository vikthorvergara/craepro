import { MaterializeSharedModule } from '../shared/materialize-shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavModule } from '../nav/nav.module';
import { AddButtonModule } from '../add-button/add-button.module';

import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioSenhaComponent } from './usuario/usuario-senha.component';
import { UsuarioService } from './usuario.service';

@NgModule({
	declarations: [
		UsuarioListComponent,
		UsuarioComponent,
		UsuarioSenhaComponent
	],
	exports: [],
	imports: [
		MaterializeSharedModule,
		BrowserModule,
		NavModule,
		AddButtonModule,
	],
	providers: [
		UsuarioService
	]
})
export class UsuarioModule { }
