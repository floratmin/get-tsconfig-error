import { getTsconfig } from 'get-tsconfig';
import * as path from 'node:path';


console.log(process.cwd());

console.log(getTsconfig(path.resolve('library', 'tsconfig.lib.json')));
