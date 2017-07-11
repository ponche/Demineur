var mapGame = Array(Array()) ; 
var heightMap = 100 ; 
var widthMap = 100 ; 

var caseMap = function()
{
	this.nbBombVoisine = 0 ; 
	this.isBomb = false ; 
	this.hide = true ; 
}



function createMap()
{
	for(i = 0; i < heightMap; i++)
	{
		mapGame.push([]) ; 
		for(j = 0; j < widthMap ; j++)
		{
			mapGame[i].push(new caseMap()) ; 
		}
		
	}
}

function drawMap()
{
	// recupération de la balise table
	var tableau = document.getElementById("map") ; 
	// delete tableau 
	tableau.innerHTML = "" ;
	
	// création du tableau 
	
	for(i = 0 ; i < mapGame.length ; i++)
	{
		//creation des balise tr (row) 
		var rowArray = document.createElement("tr") ; 
		tableau.appendChild(rowArray) ;
		
		for(j = 0 ; j < mapGame[i].length ; j++)
		{
			// Creation de la cellule  
			var celluleMap = document.createElement("td") ; 
			// ajoute de class
			celluleMap.classList.add("r" + i + "c" + j);
			celluleMap.textContent = mapGame[i][j].nbBombVoisine ; 
			
			rowArray.appendChild(celluleMap) ; 
			
		}
	}
	
	
}

function placementBomb(nbBomb)
{
	
}
