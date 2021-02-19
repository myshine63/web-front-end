// import引入的变量,都应该只读，不要去修改
// import应该放在代码最上面
import {a, b, c, d, e} from './01导出.mjs'
import add from './01导出.mjs'

console.log(a, b, c, e)
d(1,2)
add();
