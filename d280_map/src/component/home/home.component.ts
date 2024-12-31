import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',

})
export class HomeComponent implements OnInit{



  ngOnInit(): void {
 let svgPaths = document.querySelectorAll<SVGPathElement>('path');
          Array.from(svgPaths, (countryPath: SVGPathElement) => {
           countryPath.addEventListener('mouseover', (event:MouseEvent) => {
             const path = event.target as SVGPathElement;
             console.log(path);
              path.style.fill = '#aaaaaa';
           });
       
           countryPath.addEventListener('mouseleave', (event:MouseEvent)=> {
             const path = event.target as SVGPathElement;
             path.style.fill ='';

           });
           
           countryPath.addEventListener('mouseover',()=> {
            this.loadData(countryPath);
          });
         });       
}


async loadData(countryPath: SVGPathElement ) {
  console.log(countryPath);
  let countryUrl =`http://api.worldbank.org/v2/country/${countryPath.id}?format=json`;
  let response = await fetch(countryUrl)
  let dataArr=await response.json()
  let dataObj = dataArr[1];
//  console.log(dataObj[0]);
  
 //country
  let country: string = dataObj[0].name;
  // console.log(country);
  document.getElementById('name')!.innerText = country;
  //country capital
  let capital: string = dataObj[0].capitalCity;
  document.getElementById('capital')!.innerText = capital;

  //region
  let region: string = dataObj[0].region.value;
  // console.log(region);
  document.getElementById('region')!.innerText = region;

  //income level
  let income: string = dataObj[0].incomeLevel.value;
  document.getElementById('income')!.innerText = income;

  //longitude
  let longitude: string = dataObj[0].longitude;
  document.getElementById('longitude')!.innerText = longitude;

  //latitude
  let latitude: string = dataObj[0].latitude;
  document.getElementById('latitude')!.innerText = latitude;

}
}

