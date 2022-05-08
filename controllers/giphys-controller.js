var giphysServices=require('../services/giphys-service')
exports.index=async function(req, res, next){
    let giphys = await giphysServices.getAll();
    res.json(giphys)
}

exports.show=function(req, res, next){
    let id =req.params.id;
    res.json(id)

}
exports.store=function(input){
    return 'stored';
}
exports.destory=function(id){
    return 'destroy';
}
exports.update=function(input){
    return 'update';
}