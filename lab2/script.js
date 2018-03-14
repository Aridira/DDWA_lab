"use strict"

const down = (str) => str.toLowerCase()
const visible = (rows, action) => { rows.hidden = action }

function Search(table, search){
	  let iter = new tableIterator(table);
	  let element = iter.next();
	  while(element!=null){
			let exist = SearchInCells(element, search, [0,1,2])
			visible(element, exist)
		  element = iter.next()
	}
}

function IncludeStr(row, search, position = 0){
	let cellValue = row.cells[position].textContent
	return down(cellValue).includes(down(search))
}

function SearchInCells(row, search, cellArray){
	for(let cell in cellArray){
		if (IncludeStr(row, search, cell)){
			return false;
		}
	}
	return true;
}

function tableIterator(table){
  let nextIndex = 1;
  let rows = table.rows;
  return {
    next: function(){
        return nextIndex < rows.length
      ? rows[nextIndex++]
      : null;
    }
  }
}
