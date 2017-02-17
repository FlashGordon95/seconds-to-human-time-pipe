import {Pipe} from "@angular/core";
@Pipe({
       name: 'secondsToTime'
})

/*
@author Ryan Gordon
@inputs seconds:int
@outputs formattedTimeString:string
  A custom Pipe used to transform an integer representing an amount of seconds in a more readable format.

  Possible outputs:
  if seconds greater than 60:
  X minutes Y seconds ==> X=Y/60 Y=Y%60

  if seconds greater than 3600:
  X hours Y minutes Z seconds ==>  X = Z/60/60 Y = (Z / 60) % 60 Z = x % (60**2)
  
  repo-url - https://github.com/FlashGordon95/seconds-to-human-time-pipe
*/
export class secondsToTimePipe{
times = {
    hour: 3600,
    minute: 60,
    second: 1
}

    transform(seconds){
        let formattedTimeString: string = '';
        let letter: string = '';
        for(var key in this.times){
            if(Math.floor(seconds / this.times[key]) > 0){
                if(Math.floor(seconds / this.times[key]) >1 ){
                    letter = 's';
                }
                else{
                    letter = '';
                }
                //Appends this portion of the timeString to formattedTimeString 
                formattedTimeString += Math.floor(seconds / this.times[key]).toString() + ' ' + key.toString() + letter + ' ';
                
                seconds = seconds - this.times[key] * Math.floor(seconds / this.times[key]);

            }
        }
        return formattedTimeString;
    }
}