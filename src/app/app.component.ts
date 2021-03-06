import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { ApiService }        from './services/api.service';

@Component({
	selector: 'app-root',
	template: `<router-outlet></router-outlet>`,
	styleUrls: []
})
export class AppComponent implements OnInit {
	constructor(private as: ApiService, private router: Router) {}

	ngOnInit() {
		this.as.checkPass().subscribe(result => {
			if (result.status!=='ok')  {
				this.router.navigate(['/set-pass']);
			}
		});
	}
}
