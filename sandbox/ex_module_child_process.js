const cp = require('child_process');
const shell = cp.spawn('dir', ['/s'], { shell: true } );
shell.stdout.pipe(process.stdout);
// Runs "dir" from Node script and outputs results.