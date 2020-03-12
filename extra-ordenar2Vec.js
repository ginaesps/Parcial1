/* crear dos vectores de 10 elementos, llenarlos con valores aleatorios, ordenar con sort y crear función llamada mezclar
que de forma manual, cree un vector con los valores de ambos vectores ordenados de < a > */

var vec1=new Array(10), vec2=new Array(10), vec3=new Array(20);

console.log("",llenarVec(vec1,10),);
console.log("",llenarVec(vec2,10));
// en esta parte pasó algo raro: si ponía vec1.length (por ejemplo), no imprimía el vector de manera ordenada

console.log("",mezclarVecs(vec1,vec2,vec3,20));

function llenarVec(vec,size)
{
    for(var i=0;i<size;i++)
        vec[i]=Math.ceil(Math.random()*10);
    vec.sort();
    return vec;
}

function mezclarVecs(v1,v2,v3,sizev3)
{
    var i,j,temp;

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
        if(v3[i]<v3[i-1])
        {
            temp=v3[i-1];
            v3[i-1]=v3[i];
            v3[i]=temp;
        }
    }
    return v3;
}