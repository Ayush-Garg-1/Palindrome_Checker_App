const btn = document.getElementById("btn");
btn.addEventListener("click",()=>{
    const str = document.getElementById('check').value;
    const show = document.getElementById("show");
    const len = str.length;
    let s=0,e=(len-1), t=1;
    if(str=="")
    {
        show.innerHTML = "Plz Enter A String";
        return;
    }
    while(s<e)
    {
        if(str[s]!=str[e])
        {
            t=0;
            show.innerHTML = "It's Not A Palindrome";
            document.getElementById('check').value="";
            break;
        }
        s++;
        e--;
    }
    if(t==1){
    show.innerHTML = "It's A Palindrome";
    document.getElementById('check').value="";
    }
})