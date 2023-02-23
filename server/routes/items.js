const express = require("express");
const router = express.Router();
const { Item } = require("../models");
const { items } = require("../seedData");

// include check, validationResult methods from the Express Validator package in your Express Router
//const { check, validationResult } = require("express-validator");

// GET /items
router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

// Get an any individual item
router.get("/:id", async (req, res, next) => {
  try {
    const item = await Item.findByPk(req.params.id);

    if (!item) {
      res.status(404);
      next();
    } else {
      res.send(item);
    }
  } catch (error) {
    next(error);
  }
});

// POST /api/items
// for when a new additem form is submitted
router.post("/", async (req, res, next) => {
  // set defaults
  // let category = req.body.category ? req.body.category : "";
  // let title = req.body.title ? req.body.title : "";
  // let description = req.body.description ? req.body.description : "";
  // let image = req.body.image ? req.body.image : "";
  // let price = req.body.price ? req.body.price : "";

  // post the new item to the inventory db
  // try {
  //   await Item.create({
  //     category: category,
  //     title: title,
  //     description: description,
  //     image: image,
  //     price: price,
  //   });

  //   res.send("Form submitted successfully.");
  // } catch (error) {
  //   next(error);
  // }

  try {
    const items = await Item.create(req.body);
    res.send(items);
  } catch (error) {
    next(error);
  }
});

// DELETE /items/:id
router.delete("/:id", async (req, res, next) => {
  try {
    let item = await Item.findByPk(req.params.id);
    await item.destroy();
    res.send(item);
  } catch (error) {
    nexr(error);
  }

  // try {
  //   await Item.destroy({
  //     where: {
  //       id: req.params.id,
  //     },
  //   });

  //   const items = await Item.findAll();
  //   console.log(items);
  //   res.send(items);
  // } catch (error) {
  //   nexr(error);
  // }
});

// PUT /items/:id
router.put("/:id", async (req, res, next) => {
  try {
    await Item.update(req.body, { where: { id: req.params.id } });
    const item = await Item.findByPk(req.params.id);
    res.send(item);
  } catch (error) {
    next(error);
  }
  // try {
  //   const updatedItem = await Item.update(req.body, {
  //     where: { id: req.params.id },
  //   });

  //   const items = await Item.findAll();
  //   res.send(items);
  // } catch (error) {
  //   next(error);
  // }
});
// router.post('/api/update', async (req,res) => {
//   try{
//       const data = await req.body;
//       console.log("Received POST request to update item:", data); // .body for data
//       // Update (set) one item w/ separate category handler
//       const itemToUpdate = await Item.findByPk(data.id);
//       const updatedItem = await itemToUpdate.set({ // Using .set instead of .update because whole entry being saved together
//           title: data.title,
//           description: data.description,
//           price: data.price,
//           imageUrl: data.imageUrl
//       });
//       await updatedItem.save();
//       res.send({message: `Finished updating data record for ${updatedItem.title}.`});  // TODO: make this run after promise completed above
//   } catch (err) {
//       res.send({message: err});
//   }
// });

module.exports = router;
