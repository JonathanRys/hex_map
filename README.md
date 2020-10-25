# Hex-map
A hexagon map tool for creating hexagon grid maps

## Basic Usage
Right click to scroll through the tiles in one direction and left click to scroll in the other direction

### Generating a new map
There is a control panel at the top left corner of the map where you can set the map dimensions and default fill tile:
![Controls](https://jonathanrys.s3.us-east-1.amazonaws.com/controls.png)

The width uses letters(base 26) as increments while the height uses numeric(base 10) increments.

The top left of the map has a pocket for the base:

![Top-left of map](https://jonathanrys.s3.us-east-1.amazonaws.com/grid_top_left.png)

As do all the other corners.

#### Theme selector
A theme can be selected from the theme selector.

![Theme selector](https://jonathanrys.s3.us-east-1.amazonaws.com/theme_selector.png)

The available themes are: Grass, Sand, Halloween and Easter.  Changing from one theme to another should preserve most tiles but some tile sets have more special tiles than others so some tiles may not convert correctly to other themes.

#### Fill tile

In the above image you will notice a fill tile.  Clicking this tile will toggle through the available tiles in a theme.  If a tile is unavailable in the selected theme, the coresponding tile from the grass set is used.  Once a fill tile is selected, clicking any tile on the map will paint that tile and its mirrored cousins with the selected tile.
