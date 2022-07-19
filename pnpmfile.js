'use strict'
module.exports = {
  hooks: {
    readPackage
  }
}

function readPackage (pkg) {
  if (!pkg.dependencies) return pkg

  if (pkg.dependencies.resolve) {
    pkg.dependencies.resolve = 'zkochan/node-resolve'
  }
  if (pkg.dependencies['resolve-from']) {
    pkg.dependencies['resolve-from'] = 'zkochan/resolve-from'
  }
  return pkg
}