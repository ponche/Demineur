var mapGame = Array(Array()) ; 
var heightMap = 10 ; 
var widthMap = 10 ; 

var caseMap = function()
{
	this.nbBombVoisine = 0 ; 
	this.isBomb = false ; 
	this.hide = true ; 
}



function createMap()
{
	for(i = 0; i < 10; i++)
	{
		mapGame.push([]) ; 
		for(j = 0; j < 10 ; j++)
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
			
			rowArray.appendChild(celluleMap) ; 
			
		}
	}
	
	
}

