var vec=new Array(10);

for(var i=0;i<10;i++)
    vec[i]=Math.ceil(Math.random()*10);

console.log("Vector: ",vec);
console.log("Vector invertido: ",invertir(vec));

function invertir(vector)
{
    var vec2=new Array(10),k=0;
    for(var j=9;j>=0;j--)
    {
        vec2[j]=vector[k];
        k++;
    }
    return vec2;
}