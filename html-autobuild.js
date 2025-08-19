const { spawn } = require('child_process');
const chokidar = require('chokidar');

const SOURCE_DIR = './source';

function runMakeHtml() {
  const make = spawn('make', ['html'], { stdio: 'inherit' });
  make.on('close', (code) => {
    if (code !== 0) {
      console.error(`make html exited with code ${code}`);
    }
  });
}

// Watch for changes in the source directory
const watcher = chokidar.watch(SOURCE_DIR, {
  ignoreInitial: true,
  persistent: true,
});

console.log(`Watching ${SOURCE_DIR} for changes...`);

watcher.on('all', (event, path) => {
  console.log(`Detected ${event} in ${path}. Running 'make html'...`);
  runMakeHtml();
});
