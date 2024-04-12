db.inventory.insertOne(
    {
        item:"canvas", quantity: 100, tags:["cotton"], size:{h:19, w:30.5, uom:"cm"}
    }
)

//creating an array of objects 
[{
    item:"canvas1", quantity: 10, tags:["cotton"], size:{h:19, w:30.5, uom:"cm"}
},
{
    item:"canvas2", quantity: 50, tags:["linen"], size:{h:18, w:34.5, uom:"cm"}
},
{
    item:"canvas3", quantity: 90, tags:["jute"], size:{h:12, w:23.5, uom:"cm"}
}]