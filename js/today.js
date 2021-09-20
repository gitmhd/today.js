/**
 * TodayJS constructor
 */
class TodayJS {
   constructor() {
      this.date = new Date();
   }
   milliseconds() {
      return this.date.getMilliseconds();
   }
   seconds() {
      return this.date.getSeconds();
   }
   minutes() {
      return this.date.getMinutes();
   }
   hours() {
      return this.date.getHours();
   }
   day(sp) {
      if (sp === "week") {
         switch (this.date.getDay()) {
            case 0:
               return "Sunday";
            case 1:
               return "Monday";
            case 2:
               return "Tuesday";
            case 3:
               return "Wednesday";
            case 4:
               return "Thursday";
            case 5:
               return "Friday";
            case 6:
               return "Saturday";
         }
      } else if (sp === "month") {
         return this.date.getDate();
      }
   }
   month() {
      switch (this.date.getMonth()) {
         case 0:
            return "January";
         case 1:
            return "February";
         case 2:
            return "Mars";
         case 3:
            return "April";
         case 4:
            return "May";
         case 5:
            return "June";
         case 6:
            return "July";
         case 7:
            return "August";
         case 8:
            return "September";
         case 9:
            return "October";
         case 10:
            return "November";
         case 11:
            return "December";
      }
   }
   year() {
      return this.date.getFullYear();
   }
}
