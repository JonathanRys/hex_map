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

But in order to keep the odd tiles aligned, the even tiles in the last row need to be hidden:

![Bottom-right of map](https://jonathanrys.s3.us-east-1.amazonaws.com/grid_bottom_right.png)

This is done by clicking through the tiles until you reach the Void tile

