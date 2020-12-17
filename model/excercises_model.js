const {conn} = require('./config');


const create = async({title, description, img, leftColor, rightColor}) => {
    (await conn()).collection('apibackend').insertOne({
        title,
        description,
        img,
        leftColor,
        rightColor
    });
}

const find = async({
    conditions = {},
    projection = {},
    sort = {},
    limit= 20   
}) => {
    try {
        return (await conn())
            .collection('apibackend')
            .find(conditions, { projection })
            .sort(sort)
            .limit(limit)
            .toArray()
            
    } catch (error) {
        console.log(error)
    }
};

const all = () => find ({});

const findById = async (num) => {
    console.log(num)
    try{
        return (await conn()).collection('apibackend').findOne({title : num})
    }catch (e) {
        console.log(e);
    }  
    
}

module.exports= {create, findById, all};