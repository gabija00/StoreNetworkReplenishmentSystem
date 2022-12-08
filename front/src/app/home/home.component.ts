import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  content: string;
  readData:any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getPublicContent().subscribe(
      data => {
        this.content = JSON.parse(data).message;
        this.readData = JSON.parse(data).data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

}
