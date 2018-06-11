//Created by Anie Gomez 

const getRemainTime = deadline =>{
        let now = new Date(),
        remainTime =(new Date(deadline) - now +1000)/1000,
        remainSeconds =('0'+Math.floor( remainTime % 60)).slice(-2),//floor is redont, slice obtent a fragment of a string in this case obtent two digits.
        remainMinutes = ('0'+Math.floor(remainTime/60 %60)).slice(-2),
        remainHours = ('0'+Math.floor(remainTime/3600 % 24)).slice(-2),
        remainDays = Math.floor(remainTime/ (3600 * 24))
        
        return {
            remainSeconds,
            remainMinutes,
            remainHours,
            remainDays,
            remainTime
        }
};

const countdown = (deadline, elem, finalMessage) =>{
        const el = document.getElementById(elem);
        let i = 0
        const timerUpdate = setInterval( () =>{
            let t =getRemainTime(deadline[i]);
            el.innerHTML =`${t.remainDays}d:${t.remainHours}h:${t.remainMinutes}m:${t.remainSeconds}s`;
             if(t.remainTime <=1){
                 i++;
                 if(i == deadline.length-1){
                    clearInterval(timerUpdate);
                    el.innerHTML= finalMessage;
                 }
             }
        },1000)
};

countdown(
    [
    'Jun 11 2018 12:11:00',
    'Jun 11 2018 12:11:30',
    'Jun 11 2018 12:11:50',

],
'clock',
'Time to go Home wuiii!!!'
)