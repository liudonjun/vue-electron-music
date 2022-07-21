import request from '../utils/request'
let fs = require('fs')
/**
 * get
 * @param {*} url
 * @param {*} params
 */
export const getAction = (url, params = {}) => request({ url: url, method: 'get', params: params })

/**
 * downloadFile
 * @param {*} url
 * @param {*} path
 */
export const downloadFile = (url, path) => {
  let receivedBytes = 0
  let totalBytes = 0
  let req = request({
    method: 'GET',
    url,
  })
  var out = fs.createWriteStream(path)
  req.pipe(out)
  req.on('response', function (data) {
    // Change the total bytes value to get progress later.
    console.log("data.headers['content-length']", data)
    totalBytes = parseInt(data.headers['content-length'])
  })
  req.on('data', function (chunk) {
    // Update the received bytes
    receivedBytes += chunk.length
    showProgress(receivedBytes, totalBytes)
  })
  req.on('end', function () {
    alert('File succesfully downloaded')
  })
}

/**
 * 处理显示进度
 * @param {*} received
 * @param {*} total
 */
function showProgress(received, total) {
  var percentage = (received * 100) / total
  console.log(percentage + '% | ' + received + ' bytes out of ' + total + ' bytes.')
}
