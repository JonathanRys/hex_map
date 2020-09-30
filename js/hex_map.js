window.onload = function () {
  function fromAlpha(s) {
    return s.split('').reduce((r, a) => r * 26 + parseInt(a, 36) - 9, 0) - 1;
  }

  function toAlpha(n) {
    var result = '';
    do {
      result = (n % 26 + 10).toString(36) + result;
      n = Math.floor(n / 26) - 1;
    } while (n >= 0);
    return result.toUpperCase();
  }

  const makeHexagonRow = (rowIndex, staggered=false) => {
    const hexagonRow = document.createElement('div');
    hexagonRow.classList.add('hexagon-row');
    
    for (let w = fromAlpha('A') ; w <= endWidth; w++) {
      hexagonRow.appendChild(makeHexagon(toAlpha(w) + rowIndex, !(w % 2), staggered && w % 2 === 0));
    }
    return hexagonRow;
  }

  const makeTitleText = (data) => {
    return `Name: ${data.name}\nEnergy Cost: ${data.cost}\nPoints: ${data.points}\nBuildable: ${data.buildable}\nPassable: ${data.passable}\nDefense modifier: ${data.defense_modifier}\nAttack modifier: ${data.attack_modifier}`;
  };

  const makeHexagon = (text='', even=false, hidden=false) => {
    const hexagon = document.createElement('div');
    const left = document.createElement('div');
    const middle = document.createElement('div');
    const right = document.createElement('div');
    
    // Add the text
    middle.innerText = text;
    hexagon.setAttribute('data-cell', text);
    
    if (!gridColors[text]) {
      // Default when there is no data
      gridColors[text] = 0;
    }

    if (TILES[gridColors[text] % TILES.length].src.length) {
      hexagon.style.backgroundImage = `url(${TILES[gridColors[text] % TILES.length].src})`;
    } else {
      // Color the tile instead
      left.style.opacity = 1;
      left.style.borderRightColor = TILES[gridColors[text] % TILES.length].color;
      middle.style.background = TILES[gridColors[text] % TILES.length].color;
      right.style.opacity = 1;
      right.style.borderLeftColor = TILES[gridColors[text] % TILES.length].color;
    }

    // Increment counters
    counters.buildable += TILES[gridColors[text] % TILES.length].buildable
    counters.points += TILES[gridColors[text] % TILES.length].points

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

    hexagon.title = makeTitleText(TILES[gridColors[text] % TILES.length])

    hexagon.appendChild(left);
    hexagon.appendChild(middle);
    hexagon.appendChild(right);

    return hexagon;
  };

  /*** Begin program code ***/
  // Counters
  const counters = {
    buildable: 0,
    points: 0
  };

  const localWidth = localStorage.getItem('height');
  const localHeight = localStorage.getItem('width');

  if (localWidth) {
    document.getElementById('height').value = localWidth;
  }

  if (localHeight) {
    document.getElementById('width').value = localHeight;
  }

  // Edit these via the UI
  const endWidth = fromAlpha(document.getElementById('width').value);
  const endHeight = parseInt(document.getElementById('height').value);

  // Check localStorage for a saved map
  const data = JSON.parse(localStorage.getItem('hexMap'));
  const gridColors = data || {};
  
  const fragment = document.createDocumentFragment();

  // Create the grid
  for (let h = 1; h <= endHeight; h++) {
    fragment.appendChild(makeHexagonRow(h, h > endHeight));
  }

  // Update localStorage
  localStorage.setItem('hexMap', JSON.stringify(gridColors));

  // Attach event listeners
  const grid = document.getElementById('grid');

  // Left click
  grid.addEventListener('click', e => {
    if (!e.target.parentNode.classList.contains('hexagon')) {
      return
    }

    const cellIndex = e.target.parentNode.dataset.cell;

    // Decrement counters
    counters.buildable -= TILES[gridColors[cellIndex] % TILES.length].buildable
    counters.points -= TILES[gridColors[cellIndex] % TILES.length].points

    // If the index is at the end start at 0 to prevent saved data from breaking worse when changes are made
    if (gridColors[cellIndex] === TILES.length) {
      gridColors[cellIndex] = 0;
    }

    const nextTile = TILES[++gridColors[cellIndex] % TILES.length];
    const nextColor = nextTile.color;

    e.target.parentNode.title = makeTitleText(nextTile)

    if (TILES[gridColors[cellIndex] % TILES.length].src.length) {
      for (let child of e.target.parentNode.children) {
        if (child.classList.contains('left')) {
          child.style.opacity = 0;
        } else if (child.classList.contains('middle')) {
          child.style.background = 'transparent';
        } else if (child.classList.contains('right')) {
          child.style.opacity = 0;
        }
      }
      e.target.parentNode.style.backgroundImage = `url(${nextTile.src})`;
    } else {
      // Color the tile instead
      e.target.parentNode.style.backgroundImage = 'none';
      for (let child of e.target.parentNode.children) {
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

    localStorage.setItem('hexMap', JSON.stringify(gridColors));

    // Increment counters
    counters.buildable += TILES[gridColors[cellIndex] % TILES.length].buildable
    counters.points += TILES[gridColors[cellIndex] % TILES.length].points

    // Update stats
    document.getElementById('buildable').textContent = `${Math.round(counters.buildable / 4)} / ${counters.buildable}`;
    document.getElementById('points').textContent = `${Math.round(counters.points / 4)} / ${counters.points}`;

    return false;
  });

  // Right click
  grid.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    if (!e.target.parentNode.classList.contains('hexagon')) {
      return
    }

    const cellIndex = e.target.parentNode.dataset.cell;

    // Decrement counters
    counters.buildable -= TILES[gridColors[cellIndex] % TILES.length].buildable
    counters.points -= TILES[gridColors[cellIndex] % TILES.length].points

    // If the index is 0 start at the end
    if (!gridColors[cellIndex]) {
      gridColors[cellIndex] = TILES.length;
    }

    const nextTile = TILES[--gridColors[cellIndex] % TILES.length];
    const nextColor = nextTile.color;

    e.target.parentNode.title = makeTitleText(nextTile);

    if (TILES[gridColors[cellIndex] % TILES.length].src.length) {
      for (let child of e.target.parentNode.children) {
        if (child.classList.contains('left')) {
          child.style.opacity = 0;
        } else if (child.classList.contains('middle')) {
          child.style.background = 'transparent';
        } else if (child.classList.contains('right')) {
          child.style.opacity = 0;
        }
      }
      e.target.parentNode.style.backgroundImage = `url(${nextTile.src})`;
    } else {
      // Color the tile instead
      e.target.parentNode.style.backgroundImage = 'none';
      for (let child of e.target.parentNode.children) {
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

    localStorage.setItem('hexMap', JSON.stringify(gridColors));

    // Increment counters
    counters.buildable += TILES[gridColors[cellIndex] % TILES.length].buildable
    counters.points += TILES[gridColors[cellIndex] % TILES.length].points

    // Update stats
    document.getElementById('buildable').textContent = `${Math.round(counters.buildable / 4)} / ${counters.buildable}`;
    document.getElementById('points').textContent = `${Math.round(counters.points / 4)} / ${counters.points}`;

    return false;
  }, false);

  // Set the width of the grid so it doesn't wrap
  grid.style.width = endWidth * 95 + 100 + 'px';

  grid.appendChild(fragment);

  // Display stats
  document.getElementById('buildable').textContent = `${Math.round(counters.buildable / 4)} / ${counters.buildable}`;
  document.getElementById('points').textContent = `${Math.round(counters.points / 4)} / ${counters.points}`;

  document.getElementById('reset').addEventListener('click', (e) => {
    localStorage.removeItem('hexMap');
    location.reload();
  });

  document.querySelector('.controls').addEventListener('change', (e) => {
    if (e.target.tagName == 'INPUT') {
      e.target.style.backgroundColor = 'burlywood';

      localStorage.setItem(e.target.id, e.target.value);
    }
  });

  // Filter data on the width to only accept alpha chars

  // grid.addEventListener('touchmove', (e) => {});
  // grid.addEventListener('touchend', (e) => {});
};
