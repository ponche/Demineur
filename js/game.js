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
			
			if(mapGame[i][j].hide)
			{
				// on cache la cellule
				celluleMap.classList.add("hide");
			}
			else
			{
				// on affiche la cellule 
				if(mapGame[i][j].isBomb)
				{
					//Boum
					alert("vous avez perdu!!!") ;
				}
				else
				{
					celluleMap.textContent = mapGame[i][j].nbBombVoisine ; 
				}
			}
			 
			
			rowArray.appendChild(celluleMap) ; 
			
		}
	}
	
	
}

function installationDesBombes(nbBomb, espace)
{
	for(x = 0 ; x < nbBomb ; x++)
	{
		var spaceBomb = Math.floor(Math.random() * espace) ; 
		
		//on parcours le tableau 
		for(i = 0; i < mapGame.length ; i++)
		{
			for(j = 0; j < mapGame[i].length; j++)
			{
				spaceBomb-- ; 
				if(spaceBomb <= 0)
				{
					//Placement de la bombe
					if(!placementBombe(i, j)
						x-- ; 
					
					//tirage d'un nouveau nombre
					spaceBomb = Math.floor(Math.random() * espace) ;
				}
			}
		}
	}
}

function placementBombe(i , j)
{
	if(!mapGame[i][j].isBomb)
	{
		mapGame[i][j].isBomb = true ; 
	
		// incrémentation des indicateur 
		for(x = -1 ; x < 2 ; x++)
		{
			for(y = -1; y < 2 ; y++)
			{
				mapGame[i + x][j + y].nbBombVoisine++
			}
		}
		return true ; 
	}
	else
		return false ; 


// appel de test 
createMap();
//drawMap() ; 
