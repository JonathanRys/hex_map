window.onload = () => {
  const fromAlpha = s => {
    return s.split('').reduce((r, a) => r * 26 + parseInt(a, 36) - 9, 0) - 1;
  }

  const toAlpha = n => {
    var result = '';
    do {
      result = (n % 26 + 10).toString(36) + result;
      n = Math.floor(n / 26) - 1;
    } while (n >= 0);
    return result.toUpperCase();
  }

  const getCoords = compoundValue => {
    // Split a coordinate string into its constituent parts      
    for (let i = 0 ; i < compoundValue.length ; i ++) {
      if (/[A-Z]/.test(compoundValue[i])) continue;
      return [compoundValue.substr(0, i), compoundValue.substr(-(compoundValue.length - i))];
    }
  }

  // Function to get the repective tile in all other quadrants
  const getMirrors = cellIndex => {
    const coordinates = getCoords(cellIndex);

    const x = fromAlpha(coordinates[0]);
    const y = coordinates[1];

    return [
      coordinates[0] + y,
      coordinates[0] + (x % 2 ? 1 + endHeight - y : endHeight - y),
      toAlpha(endWidth - x) + y,
      toAlpha(endWidth - x) + (x % 2 ? 1 + endHeight - y : endHeight - y)
    ];
  };

  // Function to get all tiles in the set
  const getActiveTiles = theme => {
    // Use an array to assure order.
    // Special tiles may have a variable length so they need to be last
    const tilesets = ['standard', 'resource', 'special'];

    const activeTiles = [];

    tilesets.forEach(tileset => {
      for (let tile in TILES[tileset][theme] || []) {
        activeTiles.push(TILES[tileset][theme][tile]);
      }
    });

    return activeTiles;
  };

  const makeHexagonRow = (rowIndex, staggered=false) => {
    const hexagonRow = document.createElement('div');
    hexagonRow.classList.add('hexagon-row');
    
    for (let w = fromAlpha('A') ; w <= endWidth; w++) {
      const hideHexagon = staggered && w % 2 === 0;
      hexagonRow.appendChild(makeHexagon(toAlpha(w) + rowIndex, !(w % 2), hideHexagon));
    }
    return hexagonRow;
  }

  const makeTitleText = data => {
    return `Name: ${data.name}\nEnergy Cost: ${data.cost}\nPoints: ${data.points}\nBuildable: ${data.buildable}\nPassable: ${data.passable}\nDefense modifier: ${data.defense_modifier}\nAttack modifier: ${data.attack_modifier}`;
  };

  const updateTile = (nextTile, cellIndex) => {
    const target = document.querySelector(`[data-cell='${cellIndex}']`);
    const nextColor = nextTile.color;
    const currentTile = activeTiles[gridColors[cellIndex] % activeTiles.length];

    target.title = makeTitleText(nextTile);

    // Check if the tile has a valid src image and apply it
    if (currentTile.src.length) {
      for (let child of target.children) {
        if (child.classList.contains('left')) {
          child.style.opacity = 0;
        } else if (child.classList.contains('middle')) {
          child.style.background = 'transparent';
        } else if (child.classList.contains('right')) {
          child.style.opacity = 0;
        }
      }
      target.style.backgroundImage = `url(${nextTile.src})`;
    } else {
      // Otherwise, color the tile instead
      target.style.backgroundImage = 'none';
      for (let child of target.children) {
        if (child.classList.contains('left')) {
          child.style.opacity = 1;
          child.style.borderRightColor = nextColor;
        } else if (child.classList.contains('middle')) {
          child.style.background = nextColor;
        } else if (child.classList.contains('right')) {
          child.style.opacity = 1;
          child.style.borderLeftColor = nextColor;
        }
      }
    }
  };

  const makeHexagon = (text='', even=false, hidden=false) => {
    const hexagon = document.createElement('div');
    const left = document.createElement('div');
    const middle = document.createElement('div');
    const right = document.createElement('div');
    let currentTile = activeTiles[gridColors[text] % activeTiles.length || 0];
    
    // Add the text
    middle.innerText = text;
    hexagon.setAttribute('data-cell', text);
    
    if (!gridColors[text]) {
      // Default when there is no data
      gridColors[text] = localStorage.getItem('fillColor') || 0;
      currentTile = activeTiles[gridColors[text] % activeTiles.length];
    }

    if (currentTile.src.length) {
      hexagon.style.backgroundImage = `url(${currentTile.src})`;
    } else {
      // Color the tile instead
      left.style.opacity = 1;
      left.style.borderRightColor = currentTile.color;
      middle.style.background = currentTile.color;
      right.style.opacity = 1;
      right.style.borderLeftColor = currentTile.color;
    }

    // Increment counters
    counters.buildable += currentTile.buildable;
    counters.points += currentTile.points;

    // Add classes
    hexagon.classList.add('hexagon');
    left.classList.add('left');
    middle.classList.add('middle');
    right.classList.add('right');
    
    if (even) {
      hexagon.classList.add('even');
    }

    if (hidden) {
      hexagon.style.visibility = 'hidden';
    }

    hexagon.title = makeTitleText(currentTile);

    hexagon.appendChild(left);
    hexagon.appendChild(middle);
    hexagon.appendChild(right);

    return hexagon;
  };


  /*** Begin program code ***/
  
  /* Initialize data */

  // Check localStorage for a saved data
  const data = JSON.parse(localStorage.getItem('hexMap'));
  const localHeight = localStorage.getItem('height') || 3;
  const localWidth = localStorage.getItem('width') || 'C';
  let selectedTheme = localStorage.getItem('theme') || 'grass';
  // let selectedTileset = localStorage.getItem('tileset') || 'standard';
  let fillCell = localStorage.getItem('fillColor') || 0;

  const gridColors = data || {'fill-cell': fillCell};

  // Get the combined array of tiles from the selected set
  const activeTiles = getActiveTiles(selectedTheme);

  // Counters
  const counters = {
    buildable: 0,
    points: 0
  };

  // Set default values from data
  const endWidth = fromAlpha(localWidth);
  const endHeight = parseInt(localHeight);
  
  // Update the the UI
  document.getElementById('height').value = localHeight;
  document.getElementById('width').value = localWidth;
  document.getElementById('theme').value = selectedTheme;


  /*** Attach event listeners ***/
  // Get the elements we're attaching events to
  const grid = document.getElementById('grid');

  // Left click
  grid.addEventListener('click', e => {
    if (!e.target.parentNode.classList.contains('hexagon')) {
      return;
    }

    const cellIndex = e.target.parentNode.dataset.cell;
    const mirroredTiles = getMirrors(cellIndex);

    mirroredTiles.forEach( index => {
      let currentTile = activeTiles[gridColors[index] % activeTiles.length];
      // Decrement counters
      counters.buildable -= currentTile.buildable;
      counters.points -= currentTile.points;

      gridColors[index] = gridColors['fill-cell'];

      // Update the counter and get the next tile
      const nextTile = activeTiles[gridColors[index] % activeTiles.length];

      updateTile(nextTile, index);

      // Increment counters
      counters.buildable += nextTile.buildable;
      counters.points += nextTile.points;
    });

    localStorage.setItem('hexMap', JSON.stringify(gridColors));

    // Update stats
    document.getElementById('buildable').textContent = `${Math.round(counters.buildable / 4)} / ${counters.buildable}`;
    document.getElementById('points').textContent = `${Math.round(counters.points / 4)} / ${counters.points}`;

    return false;
  });

  // Right click
  grid.addEventListener('contextmenu', e => {
    e.preventDefault();
    if (!e.target.parentNode.classList.contains('hexagon')) {
      return
    }

    const cellIndex = e.target.parentNode.dataset.cell;
    const mirroredTiles = getMirrors(cellIndex);

    mirroredTiles.forEach( index => {
      let currentTile = activeTiles[gridColors[index] % activeTiles.length];

      // Decrement counters
      counters.buildable -= currentTile.buildable;
      counters.points -= currentTile.points;

      gridColors[index] = gridColors['fill-cell'];

      // Update the counter and get the next tile
      const nextTile = activeTiles[gridColors[index] % activeTiles.length];

      updateTile(nextTile, index);

      // Increment counters
      counters.buildable += nextTile.buildable;
      counters.points += nextTile.points;
    });

    localStorage.setItem('hexMap', JSON.stringify(gridColors));

    // Update stats
    document.getElementById('buildable').textContent = `${Math.round(counters.buildable / 4)} / ${counters.buildable}`;
    document.getElementById('points').textContent = `${Math.round(counters.points / 4)} / ${counters.points}`;

    return false;
  }, false);

  /* Construct the grid */
  const fragment = document.createDocumentFragment();

  for (let h = 1; h <= endHeight; h++) {
    fragment.appendChild(makeHexagonRow(h, h >= endHeight));
  }

  // Update localStorage
  localStorage.setItem('hexMap', JSON.stringify(gridColors));

  // Set the width of the grid so it doesn't wrap
  grid.style.width = endWidth * 95 + 100 + 'px';

  grid.appendChild(fragment);

  // Display stats
  document.getElementById('buildable').textContent = `${Math.round(counters.buildable / 4)} / ${counters.buildable}`;
  document.getElementById('points').textContent = `${Math.round(counters.points / 4)} / ${counters.points}`;

  document.getElementById('reset').addEventListener('click', e => {
    localStorage.removeItem('hexMap');
    location.reload();
  });

  // When the controls are changed update localStorage and change the color to indicate a change
  document.querySelector('.controls').addEventListener('change', e => {
    if (e.target.tagName == 'INPUT') {
      e.target.style.backgroundColor = 'burlywood';

      localStorage.setItem(e.target.id, e.target.value);
    }
  });

  // Allow selection of different themes and tilesets
  document.getElementById('theme').addEventListener('change', e => {
    e.stopPropagation();
    selectedTheme = e.target.value;

    // Update localStorage
    localStorage.setItem('theme', selectedTheme);
    // Update the UI
    location.reload();
  });

  // Do I need this?
  // document.getElementById('tileset').addEventListener('change', e => {
  //   e.stopPropagation();
  //   selectedTileset = e.target.value;

  //   // Update localStorage
  //   localStorage.setItem('tileset', selectedTileset);
  //   // Update the active fill tile
  // });


  // @todo Add toggle mode vs fill mode

  // @todo Add full mobile zoom and paint support

  /***
    After looking at the docs I think I should make first finger paint, second finger pan
    double-finger pan too
    or tap = paint/toggle, drag = pan?
  ***/

  /*** Fill tile functionality ***/
  // Get the default fill tile element
  const fillTile = document.getElementById('fill-tile');

  // Update it with the saved color
  updateTile(activeTiles[localStorage.getItem('fillColor') || 0], 'fill-cell');

  // Attach event handlers for default fill color
  fillTile.addEventListener('click', e => {
    if (!e.target.parentNode.classList.contains('hexagon')) {
      return;
    }

    const cellIndex = 'fill-cell';
    // If the index is at the end start at 0 to prevent saved data from breaking worse when changes are made
    if (gridColors[cellIndex] === activeTiles.length) {
      gridColors[cellIndex] = 0;
    }

    fillCell = ++gridColors[cellIndex] % activeTiles.length;

    const nextTile = activeTiles[fillCell];

    updateTile(nextTile, cellIndex);

    localStorage.setItem('fillColor', fillCell);
  });

  // Right click
  fillTile.addEventListener('contextmenu', e => {
    e.preventDefault();
    if (!e.target.parentNode.classList.contains('hexagon')) {
      return;
    }

    const cellIndex = 'fill-cell';

    // If the index is 0 start at the end
    if (!gridColors[cellIndex]) {
      gridColors[cellIndex] = activeTiles.length;
    }

    fillCell = --gridColors[cellIndex] % activeTiles.length;

    const nextTile = activeTiles[fillCell];

    updateTile(nextTile, cellIndex);

    localStorage.setItem('fillColor', fillCell);
    return false;
  }, false);

  // @todo Filter data on the width to only accept alpha chars

  // grid.addEventListener('touchmove', (e) => {});
  // grid.addEventListener('touchend', (e) => {});
};
