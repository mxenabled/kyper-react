const path = require('path')
const fs = require('fs');
const packages = require('../package-list')
const _template = require('lodash.template')

packages.forEach(packageName => {
  const distPath = path.join(__dirname, '..', '..', 'dist')
  const outputPath = path.join(__dirname, '..', 'modules', packageName)

  // Make module directory
  if (!fs.existsSync(outputPath)){
    fs.mkdirSync(outputPath);
  }

  // Copy file from dist.
  fs.copyFileSync(path.join(distPath, `${packageName}.js`), path.join(outputPath, `${packageName}.js`))
  console.log(`Copied ${packageName}.js`)

  // read the file to parse the version
  const data = fs.readFileSync(path.join(outputPath, `${packageName}.js`), 'utf8')
  // Modified version of the official semvar regex.
  // group 1 is whole version.
  const regex = RegExp(/KYPER-VERSION:((0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*))(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?/,'gm');
  const version = regex.exec(data)

  const templatePath = fs.realpathSync(path.join(__dirname, '..', 'templates'))
  const packageTemplate = fs.readFileSync(path.join(templatePath, 'package-json.jst'), 'utf8')

  // Build Package.json
  fs.writeFileSync(path.join(outputPath, 'package.json'), _template(packageTemplate)({
    name: `${packageName} NAME`,
    version: version[1],
    identifier: `${packageName} IDENTIFIER`,
    dependencies: null,
  }));

})

