# Recipe Application

Using the Spoonacular API. A person could use the application to search up recipes by ingredients. This is more to remind myself of how to use public API's and some Reactjs.

## Spoonacular

#### Search Recipes

```http
  GET https://api.spoonacular.com/recipes/complexSearch
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `ingredients` | `string` | apples, flour, sugar |

## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Example Color | ![#FEBD2F](https://via.placeholder.com/10/f8f8f8?text=+) #FEBD2F |
| Example Color | ![#242424](https://via.placeholder.com/10/00b48a?text=+) #242424 |
| Example Color | ![#00d1a0](https://via.placeholder.com/10/00b48a?text=+) #00d1a0 |


## Screenshots

![App Screenshot](https://res.cloudinary.com/dbrdhogvw/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1680129972/image_aa47ww.png)


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file. The spoonacular API key.

`REACT_APP_SPOON_KEY`


