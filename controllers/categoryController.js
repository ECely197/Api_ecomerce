import categoryModel from "../models/ModelCategory.js";

async function getAll(req, res) {
  try {
    const categories = await categoryModel.find({ deleteAt: null });
    return res.json(categories);
  } catch (error) {
    console.log(error);
    return res.status(404).json("categorias no encontradas");
  }
}

async function getById(req, res) {
  try {
    const category = await categoryModel.findById(req.params.id);
    return res.json(category);
  } catch (error) {
    console.log(error);
    return res.status(404).json("Categoria no encontrada");
  }
}

async function create(req, res) {
  const{ id, name, description, festivity} = req.body;
  try {
    const newCategory = await categoryModel.create({
      id,
      name,
      description,
      festivity,
    });
    return res.status(201).json(newCategory);
  } catch (error) {
    console.log(error);
    return res.status(500).json("error interno del servidor");
  }
}

async function update(req, res) {
  const categoryUpdate = await categoryModel.findById(req.params.id);
  if (categoryUpdate !== null) {
    const { id, name, description, festivity, season } = req.body;

    categoryUpdate.id = id || categoryUpdate.id;
    categoryUpdate.name = name || categoryUpdate.name;
    categoryUpdate.description = description || categoryUpdate.description;
    categoryUpdate.festivity = festivity || categoryUpdate.festivity;
    categoryUpdate.season = season || categoryUpdate.season;

    await categoryUpdate.save();

    return res.json("la categoria se a actualizado");
  } else {
    return res.json("no existe categoria con el ID mencionado");
  }
}

async function destroy(req, res) {
  const categoryDestroy = await categoryModel.findById(req.params.id);
  const nuevoArrayDeCategorias = [];
  for (const category of categories) {
    if (category.id !== categoryId) {
      nuevoArrayDeCategory.push(category);
    }
  }
  products = nuevoArrayDeCategories;
  return res.json({
    message: "Se ha eliminado la categoria",
  });
}
export default {
  getAll: getAll,
  getById: getById,
  create: create,
  update: update,
  destroy: destroy,
};
