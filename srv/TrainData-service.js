const cds = require('@sap/cds')
//sap.ui.define(["./TrainDataService"], createData)
module.exports = cds.service.impl(function(){
    this.before('CREATE', 'Data', genid)
    this.before('CREATE', 'DataUI', genid)
    this.on('createData', createData)
})

async function genid(req){
    const {ID} = await cds.tx(req).run(SELECT.one.from(req.target).columns('max(ID) as ID'))
    req.data.ID = ID + 1
}

async function createData(msg)
{
    const trainData = await cds.connect.to('TrainData')
    const obj = await trainData.run(INSERT.into('DataUI').entries({Text: msg.data.Text, Target: msg.data.Intent}))
    console.log(obj)
}