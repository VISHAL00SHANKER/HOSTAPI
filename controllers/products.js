const Product = require("../models/product");

const getAllProducts = async(req, res) => {
    const {company, name, featured, sort, select } = req.query;
    const queryobject = {};

    if(company){
        queryobject.company = company;
    }

    if(featured){
        queryobject.featured = featured;
    }

    if(name){
        queryobject.name = {$regex: name, $options : "i"};
    }

    let apidata = Product.find(queryobject);

    if(select){
        let selectFix = select.split(",").join(" ");
        apidata = apidata.select(selectFix);
    }

    if(sort){
        let sortFix = sort.split(",").join(" ");
        apidata = apidata.sort(sortFix);
    }

    let page = Number(req.query.page) || 1;
    let limit  = Number(req.query.limit) || 7;

    let skip = (page - 1 )* limit;

    apidata = apidata.skip(skip).limit(limit);

    console.log(queryobject);

    const mydata = await apidata;
    res.status(200).json({mydata, nbHits: mydata.length});
};

const getAllProductsTesting= async(req, res) => {

    const mydata = await Product.find(req.query).select("name company");
    res.status(200).json({mydata});

};

module.exports = {getAllProducts, getAllProductsTesting};