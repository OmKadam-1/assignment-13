const quote=[
    "Strong",
    "Calm",
    "Motivated",
    "Ready",
]
const list=document.getElementById('quotes');
for(let i=0; i<quote.length;i++){
    list.innerHTML=list.innerHTML +
    <div class ="quote-card">
        <h2>Be ${quote[i]}</h2>
    </div>
}