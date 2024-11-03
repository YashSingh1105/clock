setInterval(()=>{
    d=new Date();
    htime=d.getHours();
    mtime=d.getMinutes();
    stime=d.getSeconds();
    hrotation= (30*htime) + (mtime/2);
    mrotation=6*mtime;
    srotation=6*stime;
    hour.style.transform=`rotate(${hrotation}deg)`;
    minute.style.transform=`rotate(${mrotation}deg)`;
    second.style.transform=`rotate(${srotation}deg)`;
    const formattedTime = `${String(htime).padStart(2, '0')}:${String(mtime).padStart(2, '0')}:${String(stime).padStart(2, '0')}`;

    
    document.getElementById('digital-clock').innerText = formattedTime;
},1000);