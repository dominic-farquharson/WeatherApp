// importing models
const models = require('../db/models/index');
/*
 Function to get favorites. Running a query to grab Favorites based on the user's id.
*/
function getFavorites(req, res, next) {
  models.sequelize.query(
    'SELECT "Products"."productName", "Orders"."id", "Products"."category", "Products"."price", "Products"."unitSize", "Products"."alcohol", "Orders"."quantity", "Users"."username" FROM "Users" JOIN "Orders" ON "Users"."id" = "Orders"."userId"JOIN "Products" ON "Products"."id" = "Orders"."productId" WHERE "Users"."id" = :id',
   {   //req.user.id
    replacements: { id: req.user.id }, /// replaces :id in the query
    type: models.sequelize.QueryTypes.SELECT // don't need metadata in the response
  }).then((favorites) => {
    console.log('rendering favorites');
    res.locals.favorites = favorites; // setting res.locals object to access in the response
    return next(); // next function
  });
}

/*
Creating an order
Pulling User Id from request object
*/
function addToFavorites(req, res, next) {
  console.log('add to favorites',req);
  return models.Favorite.create({
    userId: req.user.id,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    searchQuery: req.body.address
  });
  
}
/* Exporting functions */
module.exports = {
  getFavorites,
  addToFavorites
}
