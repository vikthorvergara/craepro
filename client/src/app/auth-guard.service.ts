import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

	constructor(
		private auth: AuthService,
		private location: Location,
		private router: Router) {}

	canActivate() {
		if (!this.auth.isLoggedIn()) {
			this.router.navigateByUrl('/login' + this.location.path());
			return false;
		}
		return true;
	}
}
