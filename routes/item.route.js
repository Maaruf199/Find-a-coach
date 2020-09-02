const router = require("express").Router();
const Item = require("../model/item.model");
const checkToken = require("../config/config");

/* 
    @route GET api/items/:id
    @desc Gets one item
    @access public
*/
router.get("/:id", async (req, res) => {
  try {
    let item = await Item.findById(req.params.id);

    res.status(200).json({
      message: "item found",
      item,
    });
  } catch (err) {
    res.status(500).json({
      message: "oh non je ne sais pas ce qui s’est passé",
      statuscode: "EB500",
    });
  }
});
/* 
    @route PUT api/items/:id
    @desc updates one item
    @access public
*/
router.put("/:id", async (req, res) => {
  try {
    let item = await Item.findByIdAndUpdate(req.params.id, req.body);

    if (item) {
      res.status(200).json({
        message: "nothing spoil",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "ok already or not, maybe not work",
    });
  }
});
/* 
    @route DELETE api/items/:id
    @desc deletes one item
    @access public
*/
router.delete("/:id", async (req, res) => {
  try {
    let itemDelete = await Item.findByIdAndDelete(req.params.id);

    if (itemDelete) {
      res.status(200).json({
        message: "U dón comót am!",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "失败",
      statuscode: "EB500",
    });
  }
});

/* 
    @route POST api/items
    @desc Gets all items
    @access public
*/
router.post("/", async (req, res) => {
  try {
    let item = new Item(req.body);

    let savedItem = await item.save();

    res.status(201).json({
      message: "成功",
    });
  } catch (error) {
    res.status(500).json({
      message: "失败",
      statuscode: "EB500",
    });
  }
});
/* 
    @route GET api/items
    @desc Gets all items
    @access public
*/
router.get("/", checkToken, async (req, res) => {
  console.log(req.user);

  try {
    let items = await Item.find();

    res.status(200).send({
      count: items.length,
      items,
    });
  } catch (error) {
    res.status(500).json({
      message: "1010101001111000111",
      statuscode: "EB500",
    });
  }
});

module.exports = router;