const Clothing = require('../models/clothing.js');

const index = (req, res) => {
    res.render('index.ejs');
};

const clothingIndex = async (req, res) => {
    const clothes = await Clothing.find();
    res.render('./clothing/clothing-index.ejs', {clothes});
};

const clothingNew = (req, res) => {
    res.render('clothing/new.ejs');
};

const clothingCreate = async (req, res) => {
    await Clothing.create(req.body);
    res.redirect('/clothing');
};

const clothingShow = async (req, res) => {
    const currentClothing = await Clothing.findById(req.params.clothingId);
    res.render('clothing/show.ejs', {clothing: currentClothing});
};

const clothingEdit = async (req, res) => {
    const currentClothing = await Clothing.findById(req.params.clothingId);
    res.render('clothing/edit.ejs', {clothing: currentClothing});
};

const clothingUpdate = async (req, res) => {
    await Clothing.findByIdAndUpdate(req.params.clothingId, req.body);
    res.redirect(`/clothing/${req.params.clothingId}`);
};

const clothingDelete = async (req, res) => {
    await Clothing.findByIdAndDelete(req.params.clothingId);
    res.redirect("/clothing");
};

module.exports = {
    index,
    clothingIndex,
    clothingNew,
    clothingCreate,
    clothingShow,
    clothingEdit,
    clothingUpdate,
    clothingDelete
};
