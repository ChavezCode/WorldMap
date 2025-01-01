
import { Component, OnInit } from '@angular/core';
import { WorldService } from './world.service';


@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrl: './world.component.scss',
  providers: [WorldService],
})
export class WorldComponent implements OnInit{
    

  constructor(private worldService: WorldService) {}




    ngOnInit(): void {
      let svgPaths = document.querySelectorAll<SVGPathElement>('path');
               Array.from(svgPaths, (countryPath: SVGPathElement) => {
                countryPath.addEventListener('mouseover', (event:MouseEvent) => {
                  const path = event.target as SVGPathElement;
                  console.log(path);
                  let countryId = path.id;
                  console.log(countryId);
                  path.style.fill = '#0d4ad9';
                  this.worldService.getData(countryId).subscribe(data => {
                    console.log(data[1]);
                  let countryId = data[1];
                  let country: string = countryId[0].name;
                  // console.log(country);
                  document.getElementById('name')!.innerText = country;
                  //country capital
                  let capital: string = countryId[0].capitalCity;
                  document.getElementById('capital')!.innerText = capital;
                
                  //region
                  let region: string = countryId[0].region.value;
                  // console.log(region);
                  document.getElementById('region')!.innerText = region;
                
                  //income level
                  let income: string = countryId[0].incomeLevel.value;
                  document.getElementById('income')!.innerText = income;
                
                  //longitude
                  let longitude: string = countryId[0].longitude;
                  document.getElementById('longitude')!.innerText = longitude;
                
                  //latitude
                  let latitude: string = countryId[0].latitude;
                  document.getElementById('latitude')!.innerText = latitude;

                    
                })}),
                countryPath.addEventListener('mouseleave', (event:MouseEvent)=> {
                  const path = event.target as SVGPathElement;
                  path.style.fill ='';
     
                });
                
              //   countryPath.addEventListener('mouseover',()=> {
              //    this.loadData(countryPath);
              //  });
              });       
     }
  
  
            
}



