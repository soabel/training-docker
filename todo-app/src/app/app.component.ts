import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todo-app';

  task: any = {};
  tasks: any[] = [];
  constructor(private readonly appService: AppService) {

  }
  ngOnInit(): void {
    // this.tasks.push(
    //   { id: '0', name: 'Comprar fruta', description: 'Comprar fruta fresca de METRO' }
    // );

    this.list();
  }

  list() {
    console.log('list');
    this.appService.find().subscribe(
      res => {
        this.tasks = res;
      },
      err => {
        console.log(err);
        alert('Error');
      });
  }

  save() {
    console.log(this.task);
    this.appService.save(this.task).subscribe(
      res => {
        this.list();
        this.task = {};
      },
      err => {
        console.log(err);
        alert('Error');
      });
  }

}
