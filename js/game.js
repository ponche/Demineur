var mapGame = Array(Array()) ; 
var heightMap = 100 ; 
var widthMap = 100 ; 

// variable test 
var count =  0 ; 

var caseMap = function()
{
	this.nbBombVoisine = 0 ; 
	this.isBomb = false ; 
	this.hide = true ; //TEST must is true on starts
}



function createMap()
{
	for(var i = 0; i < heightMap; i++)
	{
		mapGame.push([]) ; 
		for(var j = 0; j < widthMap ; j++)
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
	
	for(var i = 0 ; i < mapGame.length ; i++)
	{
		//creation des balise tr (row) 
		var rowArray = document.createElement("tr") ; 
		tableau.appendChild(rowArray) ;
		
		for(var j = 0 ; j < mapGame[i].length ; j++)
		{
			// Creation de la cellule  
			var celluleMap = document.createElement("td") ; 
			// ajoute de class
			celluleMap.classList.add("r" + i + "c" + j);
			celluleMap.setAttribute("onclick", "discoveryCase("+ i +"," + j + ")")
			
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
					// logo d'une bombe
					celluleMap.textContent = 9 ; 
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
	var x = 0; 
	while( x < nbBomb )
	{
		var spaceBomb = Math.floor(Math.random() * espace) ; 
		
		//on parcours le tableau 
		for(var i = 0; i < mapGame.length ; i++)
		{
			for(var j = 0; j < mapGame[i].length; j++)
			{
				spaceBomb-- ; 
				if(spaceBomb <= 0)
				{
					//Placement de la bombe
					if(placementBombe(i, j))
						x++ ; 
					
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
		for(var x = -1 ; x < 2 ; x++)
		{
			for(y = -1; y < 2 ; y++)
			{
				if(typeof mapGame[i + x] !== 'undefined')
					if(typeof mapGame[i + x][j + y] !== 'undefined')
					{
						mapGame[i + x][j + y].nbBombVoisine++ ;
					}
				
			}
		}
		return true ; 
	}
	else
		return false ; 
}
function discoveryCase(i, j)
{
	if(mapGame[i][j].isBomb)
		alert("Vous avez perdu !!!!") ; 
	else
	{
		
		mapGame[i][j].hide = false ;
		setTimeout(updateCellule, 1000 , i, j ) ;
		//updateCellule(i, j) ; 
		if(mapGame[i][j].nbBombVoisine == 0)
		{	
			for(var x = -1 ; x < 2 ; x++)
			{
				for(var y = -1; y < 2 ; y++)
				{
					if(typeof mapGame[i + x] !== 'undefined')
					{
						if(typeof mapGame[i + x][j + y] !== 'undefined')
						{
							//mapGame[i + x][j + y].nbBombVoisine++ ;
							if(mapGame[i + x][j + y].hide)
							{
								//console.log(setTimeout(discoveryCase, 100, i + x , j + y )) ; 
								discoveryCase(i + x, j + y);
								count ++ ; // variable Test 
							}
						}
					}
				}
			}
		}
	}
}
function updateCellule(x, y) 
{
	
	var cellule = document.querySelector(".r"+x+"c"+y)
	
	if(mapGame[x][y].hide)
	{
		// on cache la cellule
		cellule.classList.add("hide");
		
	}
	else
	{
		// on affiche la cellule 
		
		if(mapGame[x][y].isBomb)
		{
			//Boum
			// logo d'une bombe
			cellule.textContent = 9 ; 
		}
		else
		{
			cellule.textContent = mapGame[x][y].nbBombVoisine ;
			cellule.classList.remove("hide") ;
		}
	}
}

$(document).ready(function() 
{
// appel de test 
createMap();
installationDesBombes(700, 70) ; 
drawMap() ; 

// Handler event
//$("table").on("click", drawMap) ; 
}) ;
