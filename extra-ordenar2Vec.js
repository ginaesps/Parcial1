/* crear dos vectores de 10 elementos, llenarlos con valores aleatorios, ordenar con sort y crear función llamada mezclar
que de forma manual, cree un vector con los valores de ambos vectores ordenados de < a > */

var long=10;
var vec1=new Array(long), vec2=new Array(long), vec3=new Array(long*2);

console.log("",llenarVec(vec1,long),);
console.log("",llenarVec(vec2,long));
// en esta parte pasó algo raro: si ponía vec1.length (por ejemplo), no imprimía el vector de manera ordenada

console.log("",mezclarVecs(vec1,vec2,vec3,long*2));

function llenarVec(vec,size)
{
    for(var i=0;i<size;i++)
        vec[i]=Math.ceil(Math.random()*10);
    vec.sort(function(a,b){return a-b});
    return vec;
}

function mezclarVecs(v1,v2,v3,sizev3)
{
    var i,j,k,temp;

    for(i=0,j=0;i<sizev3;i+=2,j++)
    {
        if(v1[j]<=v2[j])
        {
            v3[i]=v1[j];
            v3[i+1]=v2[j];
        }
        else
        {
            v3[i]=v2[j];
            v3[i+1]=v1[j];
        }
        k=i;
        while(v3[i]<v3[i-1])
        {
            temp=v3[k-1];
            v3[k-1]=v3[k];
            v3[k]=temp;
            k--;
        }
    }
    return v3;
}
