import vento from 'ventojs'

const ventoEngine = (filePath, options, callback) =>
  vento()
    .run(filePath, options)
    .then(({ content }) => callback(null, content))
    .catch((err) => callback(err))

export default ventoEngine