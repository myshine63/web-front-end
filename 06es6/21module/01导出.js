/*导出方式1*/
export var name='tom;';
/*导出方式2*/
let age=14;
export {age};
/*导出方式3*/
function say() {
    console.log('hello')
}
export {say as s};//修改名字
/*默认导出,一个js只能有一个默认导出*/
let male='man';
export default male;
