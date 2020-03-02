var vec=new Array(10);

for(var i=0;i<10;i++)
    vec[i]=Math.ceil(Math.random()*10);

console.log("Vector",vec);
console.log("Vector invertido",invertir(vec));

function invertir(vector) 
{
    var j,temp,k=9;
    for(j=0;j<5;j++)
    {
        temp=vector[j];
        vector[j]=vector[k];
        vector[k]=temp;
        k--;
    }
    return vector;
}
