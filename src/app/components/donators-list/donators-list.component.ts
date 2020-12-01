import { Component, OnInit } from '@angular/core';
import { DonatorsService } from 'src/app/services/donators.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-donators-list',
  templateUrl: './donators-list.component.html',
  styleUrls: ['./donators-list.component.scss']
})
export class DonatorsListComponent implements OnInit {

  public donators: any;

  constructor(private service: DonatorsService) { }

  ngOnInit(): void {
    this.service.getDonators()
      .subscribe(
        (response: any) => {
          this.donators = response;
        },
        (error: any) => {
          alert('An unexpected error occured.');
          console.log(error);
        });
  }

}
