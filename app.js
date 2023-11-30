class Drumkit{
    constructor(){
        this.pads= document.querySelectorAll('.pad')
        this.kickAudio = document.querySelector('.kick-sound')
        this.snareAudio = document.querySelector('.snare-sound')
        this.hihatAudio = document.querySelector('.hihat-sound')
        this.playbtn= document.querySelector('.play')
        this.CurrentKick='./Track/kick-classic.wav',
        this.Currentsnare='./Track/snare-acoustic01.wav',
        this.CurrentHihat='./Track/hihat-acoustic01.wav',
        this.index = 0;
        this.bpm = 200;
        this.Isplaying= null;
        this.selects = document.querySelectorAll('select')
        this.mutebtn= document.querySelectorAll('.mute')
        this.tempoSlider= document.querySelector('.tempo-slider') 
    }
    activepad(){
        this.classList.toggle("active");
        console.log(this)
    }
    repeat(){
        let step= this.index % 8;
        // console.log(step)
        const activebars = document.querySelectorAll(`.b${step}`);
        console.log(activebars)
        activebars.forEach(bar=>{
            bar.style.animation = `playTrack 0.3s alternate ease-in-out 2`;
           if(bar.classList.contains('active')){
            if(bar.classList.contains('kick-pad')){
                this.kickAudio.currentTime=0;
                this.kickAudio.play();
            }
            if(bar.classList.contains('snare-pad')){
                this.snareAudio.currentTime=0;
                this.snareAudio.play();
            }
            if(bar.classList.contains('hihat-pad')){
                this.hihatAudio.currentTime=0;
                this.hihatAudio.play();
            } 
           }
        })
         this.index++;
    }
    start(){
        const interval = (60/this.bpm)*1000;
        if(!this.Isplaying){
       this.Isplaying = setInterval(()=>{
            this.repeat()
        },interval);}
        else{
            //clear intravel
            clearInterval(this.Isplaying);
            this.Isplaying = null;
        }
    }
    updateBtn(){
        if(!this.Isplaying){
            this.playbtn.innerHTML="stop";
            this.playbtn.classList.add("active")
        }else{
            this.playbtn.innerHTML="play"
            this.playbtn.classList.remove("active");
        }
    }

    changeSound(e){
        const selectionName= e.target.name;
        const selectionValue= e.target.value;
        console.log(selectionName)
        switch(selectionName){
            case "kick-select" :
                this.kickAudio.src = selectionValue;
                break;
            case "snare-select" :
                    this.snareAudio.src = selectionValue;
                    break;
            case "hihat-select" :
                        this.hihatAudio.src = selectionValue;
                        break;
        }
    }
    mute(e){
        
        // console.log(e.target.getAttribute("data-track"));
     const muteIndex= e.target.getAttribute("data-track");
        e.target.classList.toggle("active");
        if(e.target.classList.contains("active")){
            switch(muteIndex){
                case "0":
                    this.kickAudio.volume =0
                    break;
                
                case "1":
                    this.snareAudio.volume =0
                    break;
                
                case "2":
                        this.hihatAudio.volume =0
                        break;    
            }
        } else{
            switch(muteIndex){
                case "0":
                    this.kickAudio.volume =1
                    break;
                
                case "1":
                    this.snareAudio.volume =1
                    break;
                
                case "2":
                        this.hihatAudio.volume =1
                        break;    
            }

        }
       }
       changeTempo(e){
        console.log(e)
        const tempoText= document.querySelector(".tempo-nr");
        this.bpm = e.target.value;
        tempoText.innerHTML= e.target.value;
       }
       updateTempo(e){
        this.bpm = e.target.value;
         clearInterval(this.Isplaying);
         this.Isplaying =null;
         const playbtn = document.querySelector(".play")
         if(playbtn.classList.contains("active")){
            this.start();
         }
       }


}

const drumkit = new Drumkit()

//event listenrs

 drumkit.pads.forEach(pad=>{
    pad.addEventListener("click",drumkit.activepad)
 })

drumkit.playbtn.addEventListener("click",()=>{
    drumkit.updateBtn();
    drumkit.start();
    
})


drumkit.selects.forEach(select=>{
    select.addEventListener('change',function(e){
        drumkit.changeSound(e);
    })
})

drumkit.mutebtn.forEach(btn=>{
btn.addEventListener('click', function(e){
  drumkit.mute(e)
})
})

drumkit.tempoSlider.addEventListener("input",function(e){
    drumkit.changeTempo(e)

})

drumkit.tempoSlider.addEventListener("change",function(e){
    drumkit.updateTempo(e)

})
