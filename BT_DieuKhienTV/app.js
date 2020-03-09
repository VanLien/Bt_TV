        function Remote(volume) {
                this.status=false;
                this.remoteOn=function () {
                        this.status=true;
                        this.tv.On();
                };
                this.remoteOff=function () {
                        this.status=false;
                        this.tv.Off;
                };
                this.volumeUp=function (tv,number) {
                        tv.volumeUpTv(number);
                };
                this.volumeDown=function (tv,number) {
                        tv.volumeUpDownTv(number);
                };
                this.connectToTivi=function (tivi) {
                        this.tv=tivi
                }
        }
        function Tivi(volume) {
                this.status=false;
                this.On=function () {
                        this.status=true;
                };
                this.Off=function () {
                        this.status=false;
                };
                this.volume=volume;
                this.getVolume=function () {
                        return this.volume;
                };
                this.setVolume=function () {
                        this.volume=volume;
                }
        }
 let tv=new Tivi(15);
 let rm=new Remote();
 rm.connectToTivi(tv);
 function OnOff() {
         if (rm.status) {
                 rm.remoteOff();
                 document.getElementById("TV").innerHTML="TV OFF";
         } else {
                 rm.remoteOn();
                 document.getElementById("TV").innerHTML="TV On";
         }
 }
