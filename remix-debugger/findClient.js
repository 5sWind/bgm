var which = require('which')

var gbgm = null
var bgm = null

try {
  gbgm = which.sync('gbgm')
} catch (e) {
}

try {
  bgm = which.sync('bgm')
} catch (e) {
}
if (process.argv.length > 2) {
  if (gbgm && process.argv[2] === 'gbgm') {
    runGbgm()
  } else if (bgm && process.argv[2] === 'bgm') {
    runBgm()
  }
} else if (gbgm && bgm) {
  console.log('both bgm and gbgm has been found in your system')
  console.log('restart the command with the desired client:')
  console.log('npm run start_bgm')
  console.log('or')
  console.log('npm run start_gbgm')
} else if (gbgm) {
  runGbgm()
} else if (bgm) {
  runBgm()
} else {
  console.log('neither bgm or gbgm has been found in your system')
}

function runBgm () {
  console.log('starting bgm...')
  process.exit(20)
}

function runGbgm () {
  console.log('starting gbgm...')
  process.exit(21)
}
