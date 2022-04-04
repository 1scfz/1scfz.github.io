function generateNebula(container,n){
    var cw=container.clientWidth, ch=container.clientHeight, particleSize=(cw>ch?cw:ch)/2;
    container.innerHTML="";
    for(var i=0;i<n;i++){
        var d=document.createElement("div");
        d.className="particle";
        d.style.animationDuration=(180*(0.8+Math.random()*0.5))+"s";
        if(Math.random()<0.5)d.style.animationDirection="reverse";
        d.style.backgroundImage="url('neb"+(~~(4*Math.random()))+".png')";
        var size=particleSize*(0.8+Math.random()*0.4);
        d.style.width=d.style.height=size+"px";
        d.style.left=(Math.random()*cw-size/2)+"px";
        d.style.top=(Math.random()*ch-size/2)+"px";
        d.style.backgroundColor=Math.random()<0.5?("rgba("+~~((0.15+Math.random()*0.3)*256)+","+~~((0.65+Math.random()*0.15)*256)+","+~~((0.9+Math.random()*0.1)*256)+",1)"):("rgba("+~~((0.9+Math.random()*0.1)*256)+","+~~((0.15+Math.random()*0.3)*256)+","+~~((0.15+Math.random()*0.3)*256)+",0.8)");
        container.appendChild(d);
    }
}
function onResize(){generateNebula(document.getElementById("neb1"),30);}
window.addEventListener("resize",onResize);
onResize();