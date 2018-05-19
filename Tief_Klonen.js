/* 
    Anleitung:
	
	Code Einbinden mit:
    <script src="Tief_Clonen.js"></script>
	
	
	Dann im eigenen Code:
	
	KlonObjekt = MeineFunktionen.clone(Objekt);
	
	oder
	
	KlonObjekt = Objekt.clone();
		
*/

//Kann tief Kopieren Arrays und Objekte!!
var MeineFunktionen = {}; //Namespace
MeineFunktionen.clone = function (objekt) {
    //Neues Objekt Erzeugen
    if (objekt instanceof Array)//Array und Object sind instanceof Object
        var newObjekt = [];   //Aber nur Array ist instanceof Array!
    else
        var newObjekt = {};

    for (var propertyName in objekt) {
        //Object und Array werden durch '!' oder '!=' als false ausgewertet so das else Teil
        if (typeof objekt[propertyName] != 'object')
        //if(!((objekt[propertyName]) instanceof Object))
        {
            //Eigenschaften Kopieren von alt zu neuem Objekt bzw. Array
            console.log('propertyName: ' + propertyName + '\npropertyWert: ' + objekt[propertyName]);
            newObjekt[propertyName] = objekt[propertyName];
        }
        else {
            //Rekursives tiefes Kopieren
            console.log('propertyName: ' + propertyName + '\npropertyWert: ' + objekt[propertyName]);
            newObjekt[propertyName] = MeineFunktionen.clone(objekt[propertyName]);
        }
    }
    return newObjekt;
}

//Dieser Code ist nicht von mir, ist aber so ziemlich genau
//die kurz Variante von meinem Obigen,
Object.prototype.clone = function () {
    var newObj = (this instanceof Array) ? [] : {};
    for (var item in this) {
        if (item == 'clone') continue;
        if (this[item] && typeof this[item] == "object") {
            newObj[item] = this[item].clone();
        } else newObj[item] = this[item]
    } return newObj;
};
/*
    Andere Klon Möglichkeiten:
	- Zum Teil nur Flach :(

    //Testobjekt erstellen:
	var arr1 = [5,2,[77,{m: 1000}],{a:{b:88}},9,'55'];

    //var arr2 = arr1;
    //arr2 = [].concat(arr1);
    //arr2 = arr1.slice();
    //var arr2 = MeineFunktionen.clone(arr1);

    //var obj2 = Object.create(obj1);
    //var obj2 = {};
    //obj2.__proto__ = obj1;
    //var obj2 = obj1.constructor();
    //var obj2 = {};
    //var obj2 = Object.assign({}, obj1)
    var str1 =   JSON.stringify(obj1)
    var obj2 =   JSON.parse(str1);


    
    
    //Aendern immer 2. Array um zu Beweisen das es verschiedene Objekte sind!
    arr2[1] =  100;
    arr2[2][1].m = 1111;
    arr2[5] = '666';
    arr2[3].a.b = '20000';

    //Ausgeben immer zuerst 1. Array um zu zeigen nicht mitgeändert.
    document.write('arr1: ' + arr1 + '<br>');
    document.write('arr2: ' + arr2 + '<br><br>');

    document.write('arr1[3].a: ' + arr1[3].a + '<br>');
    document.write('arr2[3].a: ' + arr2[3].a + '<br><br>');

    document.write('arr1[3].a.b: ' + arr1[3].a.b + '<br>');
    document.write('arr2[3].a.b: ' + arr2[3].a.b + '<br><br>');

    document.write('arr1[2][1].m: ' + arr1[2][1].m + '<br>');
    document.write('arr2[2][1].m: ' + arr2[2][1].m + '<br><br>');
*/
