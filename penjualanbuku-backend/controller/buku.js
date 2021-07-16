const bukuModel = require('../model/buku')
const { requestResponse } = require('../config')
const objectId = require('mongoose').Types.ObjectId
const { deleteImage } = require('../uploadConfig')

exports.insertbuku = (data) =>
  new Promise((resolve, reject) => {
    bukuModel.create(data)
    .then(() => resolve(requestResponse.sukses('Berhasil Input buku')))
    .catch(() => reject(requestResponse.serverError))
})

exports.getAllbuku = () =>
  new Promise((resolve, reject) => {
    bukuModel.find({})
      .then(buku=> resolve(requestResponse.suksesWithData(buku)))
      .catch(error => reject(requestResponse.serverError))
  })

  exports.getbyId = (id) =>
  new Promise((resolve, reject) => {
    bukuModel.findOne({
      _id: objectId(id)
    }).then(buku=> resolve(requestResponse.suksesWithData(buku)))
    .catch(error => reject(requestResponse.serverError))
  })

  exports.edit = (data, id, changeImage) =>
  new Promise((resolve, reject) => {
    bukuModel.updateOne({
      _id: objectId(id)
    }, data)
      .then(() => {
        if (changeImage) {
          deleteImage(data.oldImage)
        }
        resolve(requestResponse.sukses('Berhasil Edit buku'))
      }).catch(() => reject(requestResponse.serverError))
  })

  exports.delete = (id) =>
  new Promise((resolve, reject) => {
    bukuModel.findOne({
      _id: objectId(id)
    }).then(buku => {
      bukuModel.deleteOne({
        _id: objectId(id)
      }).then(() => {
        deleteImage(buku.image)
        resolve(requestResponse.sukses('Berhasil Delete buku'))
      }).catch(()=> reject(requestResponse.serverError))
    })
  })