import { Component, OnInit } from '@angular/core';
declare var Chart:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Line Chart Graph';

ngOnInit(){
  var arr1 = [12, 19, 3, 5, 2, 3,58,34,23,12,14,67], 
  arr2 = [7, 11, 5, 8, 3, 7,45,23,56,78,90,12],
  arr3 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  var options = {
    type: 'line',
    data: {
      labels: arr3,
      datasets: [
        {
          label: 'Well Data1',
          data: arr1,
          borderWidth: 1
        },	
        {
          label: 'Well Data2',
          data: arr2,
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            reverse: false
          }
        }]
      }
    }
  }
  
  var ctx = document.getElementById('chartJSContainer');
  new Chart(ctx, options);
}
}
