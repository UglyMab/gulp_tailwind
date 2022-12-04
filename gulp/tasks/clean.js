const del = require('del')

module.exports = clean = () => {
  return del('dist')
}
