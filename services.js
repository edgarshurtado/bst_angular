blackShadder.service('ScheduleService', function(){
    var self = this;

    this.scheduleList = {
        0:{
            morning: {
                opening: "9:00",
                close:"14:00"
            },
            afternoon: {
                opening: "16:00",
                close: "20:00"
            }
        },
        1:{
            morning: {
                opening: "9:00",
                close:"14:00"
            },
            afternoon: {
                opening: "16:00",
                close: "20:00"
            }
        },
        2:{
            morning: {
                opening: "9:00",
                close:"14:00"
            },
            afternoon: {
                opening: "16:00",
                close: "20:00"
            }
        },
        3:{
            morning: {
                opening: "9:00",
                close:"14:00"
            },
            afternoon: {
                opening: "16:00",
                close: "22:00"
            }
        },
        4:{
            morning: {
                opening: "9:00",
                close:"14:00"
            },
            afternoon: {
                opening: "16:00",
                close: "21:09"
            }
        },
        5:{
            morning: {
                opening: "9:00",
                close:"14:00"
            },
            afternoon: {
                opening: "16:00",
                close: "20:00"
            }
        },
        6:{
            morning: {
                opening: "9:00",
                close:"14:00"
            },
            afternoon: {
                opening: "16:00",
                close: "20:00"
            }
        },
    };

    this.viewReadySchedule = function()
    {
        var weekday=new Array(7);
        weekday[0]="Lunes";
        weekday[1]="Martes";
        weekday[2]="Miércoles";
        weekday[3]="Jueves";
        weekday[4]="Viernes";
        weekday[5]="Sábado";
        weekday[6]="Domingo";

        return weekday.map(function(){
            // TODO
        })
    }

    this.isOpen = function(){
        var date = new Date();

        var day = date.getDay();
        var hours = date.getHours();
        var minutes = date.getMinutes();


        var todaySchedule = self.scheduleList[day];

        if(hours < 12){
            var scheduleHours = todaySchedule["morning"];

        }else {
            var scheduleHours = todaySchedule["afternoon"];
        }

        return self.isNowInTimeRange(
            scheduleHours["opening"], scheduleHours["close"]
        )
    }

    this.isNowInTimeRange = function(openingTime, closingTime)
    {
        var rightNow = new Date();

        openingTime = openingTime.split(":")
        var openTimeObj = new Date(
            rightNow.getFullYear(), rightNow.getMonth(), rightNow.getDate(),
            openingTime[0], openingTime[1]
        );

        closingTime = closingTime.split(":")
        var closeTimeObj = new Date(
            rightNow.getFullYear(), rightNow.getMonth(), rightNow.getDate(),
            closingTime[0], closingTime[1]
        );

        return openTimeObj <= rightNow && rightNow < closeTimeObj;
    }
});