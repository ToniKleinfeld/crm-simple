import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { StoredDataService } from '../../shared/service/stored-data.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../models/user.class';

@Component({
  selector: 'app-user-datail',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './user-datail.component.html',
  styleUrl: './user-datail.component.scss',
})
export class UserDatailComponent implements OnInit, OnDestroy {

  constructor(
    private StoredDataService: StoredDataService,
    private route: ActivatedRoute
  ) { }

  private saveUsersSubscription!:any;
  private routeParamSubscription!:any

  user?: User;
  userID?:string | null;

  ngOnInit(): void {
    this.routeParamSubscription = this.route.paramMap.subscribe((params) => {
      this.userID = params.get('id');
    });

    this.saveUsersSubscription = this.StoredDataService.saveUsersSubject.subscribe(() => {
      this.user = this. getUsersData();
    })
  }

  ngOnDestroy(): void {
    this.saveUsersSubscription.unsubscribe();
    this.routeParamSubscription.unsubscribe();
  }

  getUsersData() {
      let userarray = this.StoredDataService.savedUsers;
      let filterForUserId = userarray.filter(user => user.id === this.userID);

    return filterForUserId[0];
  }
}
