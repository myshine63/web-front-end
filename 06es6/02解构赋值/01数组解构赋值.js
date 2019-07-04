/*常规解构,对应位置对应值*/
{
    let [a, b, c] = [1, 2, 3];//a=1,b=2,c=3
    let [e, [f, g]] = [1, [2, 3]];//e=1,f=2,g=3
}
/*不完全解构*/
{
    let [a, b] = [1];//a=1,b=undefined
    let [c, [d, e]] = [1, [2]];//c=1,d=2,e=undefined
}
/*数组解构,注意  ...arr  只能发在数组最后面*/
{
    let [a, b, ...arr] = [1, 2, 3, 4, 5];//arr=[3,4,5];
    let [c, ...arr1] = [1];//c=1,arr1=[];
}
/*数组解构等号右边一定要是数组,或者具有iterator解构*/
{
    let [a, b, c] = new Set([1, 2, 3]);
    let [...arr] = new Set([1, 2, 3]);
}
