var vec=new Array(10);

for(var i=0;i<10;i++)
    vec[i]=Math.ceil(Math.random()*10);

console.log("Vector: ",vec);
console.log(invertir(vec));

function invertir(vector) 
{
    for(var j=9;j>=0;j--)
        console.log(vector[j]);
}
