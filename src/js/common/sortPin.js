import { makePy } from './pinyin.js'

function sortPY(username) {
	var linkList = {
		other : [],
		A : [],
		B : [],
		C : [],
		D : [],
		E : [],
		F : [],
		G : [],
		H : [],
		I : [],
		J : [],
		K : [], 
		L : [],
		M : [],
		N : [],
		O : [],
		P : [],
		Q : [],
		R : [],
		S : [],
		T : [],
		U : [],
		V : [],
		W : [],
		X : [],
		Y : [],
		Z : []
	};
	
	
	for(var index = 0; index < username.length; index++) {
		var str = makePy(username[index]);

		var result = str[0].charAt(0);

		switch(result) {
			case "a":
			case "A":
				linkList.A.push(username[index]);
				break;
			case "b":
			case "B":
				linkList.B.push(username[index]);
				break;
			case "c":
			case "C":
				linkList.C.push(username[index]);
				break;
			case "d":
			case "D":
				linkList.D.push(username[index]);
				break;
			case "e":
			case "E":
				linkList.E.push(username[index]);
				break;
			case "f":
			case "F":
				linkList.F.push(username[index]);
				break;
			case "g":
			case "G":
				linkList.G.push(username[index]);
				break;
			case "h":
			case "H":
				linkList.H.push(username[index]);
				break;
			case "i":
			case "I":
				linkList.I.push(username[index]);
				break;
			case "j":
			case "J":
				linkList.J.push(username[index]);
				break;
			case "k":
			case "K":
				linkList.K.push(username[index]);
				break;
			case "l":
			case "L":
				linkList.L.push(username[index]);
				break;
			case "m":
			case "M":
				linkList.M.push(username[index]);
				break;
			case "n":
			case "N":
				linkList.N.push(username[index]);
				break;
			case "o":
			case "O":
				linkList.O.push(username[index]);
				break;
			case "p":
			case "P":
				linkList.P.push(username[index]);
				break;
			case "q":
			case "Q":
				linkList.Q.push(username[index]);
				break;
			case "r":
			case "R":
				linkList.R.push(username[index]);
				break;
			case "s":
			case "S":
				linkList.S.push(username[index]);
				break;
			case "t":
			case "T":
				linkList.T.push(username[index]);
				break;
			case "u":
			case "U":
				linkList.U.push(username[index]);
				break;
			case "v":
			case "V":
				linkList.V.push(username[index]);
				break;
			case "w":
			case "W":
				linkList.W.push(username[index]);
				break;
			case "x":
			case "X":
				linkList.X.push(username[index]);
				break;
			case "y":
			case "Y":
				linkList.Y.push(username[index]);
				break;
			case "z":
			case "Z":
				linkList.Z.push(username[index]);
				break;
			default:
				linkList.other.push(username[index]);
				break;
		}
	}

	
	return linkList;

}


export { sortPY }