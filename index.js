var Category = ""
var TurnCorrect = 0;
var TurnSkipped = 0;
var TurnAttempted = 0;
var TurnScore = 0;
var StartTime;
var EndTime;
var TimeElapsed = 0;
var WordList = "";
var SkipList = "";

var RecentWord = '';
var UsedWords = [];
var UsedIndex = [];
var CurrentWord = ''
var RndIndex = 0;
var CurrentWord = '';
var TurnTime = 30;
var TimerUpdateInterval = 1000;

var OriginalListPeople = ["Russell Crowe ","Javier Bardem","Tom Hanks","Ed Harris","Geoffrey Rush","Denzel Washington ","Russell Crowe","Sean Penn","Will Smith","Tom Wilkinson","Adrien Brody ","Nicolas Cage","Michael Caine","Daniel Day-Lewis","Jack Nicholson","Sean Penn ","Johnny Depp","Ben Kingsley","Jude Law","Bill Murray","Jamie Foxx ","Don Cheadle","Johnny Depp","Leonardo DiCaprio","Clint Eastwood","Philip Seymour Hoffman ","Terrence Howard","Heath Ledger","Joaquin Phoenix","David Strathairn","Forest Whitaker ","Leonardo DiCaprio","Ryan Gosling","Peter O'Toole","Will Smith","Daniel Day-Lewis ","George Clooney","Johnny Depp","Tommy Lee Jones","Viggo Mortensen","Sean Penn ","Richard Jenkins","Frank Langella","Brad Pitt","Mickey Rourke","Jeff Bridges ","George Clooney","Colin Firth","Morgan Freeman","Jeremy Renner","Colin Firth ","Javier Bardem","Jeff Bridges","Jesse Eisenberg","James Franco","Jean Dujardin ","Demián Bichir","George Clooney","Gary Oldman","Brad Pitt","Daniel Day-Lewis ","Bradley Cooper","Hugh Jackman","Joaquin Phoenix","Denzel Washington","Matthew McConaughey ","Christian Bale","Bruce Dern","Leonardo DiCaprio","Chiwetel Ejiofor","Eddie Redmayne ","Steve Carell","Bradley Cooper","Benedict Cumberbatch","Michael Keaton","Leonardo DiCaprio ","Bryan Cranston","Matt Damon","Michael Fassbender","Eddie Redmayne","Casey Affleck ","Andrew Garfield","Ryan Gosling","Viggo Mortensen","Denzel Washington","Gary Oldman ","Timothée Chalamet","Daniel Day-Lewis","Daniel Kaluuya","Denzel Washington","Rami Malek ","Christian Bale","Bradley Cooper","Willem Dafoe","Viggo Mortensen","Joaquin Phoenix ","Antonio Banderas","Leonardo DiCaprio","Adam Driver","Jonathan Pryce","Julia Roberts ","Joan Allen","Juliette Binoche","Ellen Burstyn","Laura Linney","Halle Berry ","Judi Dench","Nicole Kidman","Sissy Spacek","Renée Zellweger","Nicole Kidman ","Salma Hayek","Diane Lane","Julianne Moore","Renée Zellweger","Charlize Theron ","Keisha Castle-Hughes","Diane Keaton","Samantha Morton","Naomi Watts","Hilary Swank ","Annette Bening","Catalina Sandino Moreno","Imelda Staunton","Kate Winslet","Reese Witherspoon ","Judi Dench","Felicity Huffman","Keira Knightley","Charlize Theron","Helen Mirren ","Penélope Cruz","Judi Dench","Meryl Streep","Kate Winslet","Marion Cotillard ","Cate Blanchett","Julie Christie","Laura Linney","Ellen Page","Kate Winslet ","Anne Hathaway","Angelina Jolie","Melissa Leo","Meryl Streep","Sandra Bullock ","Helen Mirren","Carey Mulligan","Gabourey Sidibe","Meryl Streep","Natalie Portman ","Annette Bening","Nicole Kidman","Jennifer Lawrence","Michelle Williams","Meryl Streep ","Glenn Close","Viola Davis","Rooney Mara","Michelle Williams","Jennifer Lawrence ","Jessica Chastain","Emmanuelle Riva","Quvenzhané Wallis","Naomi Watts","Cate Blanchett ","Amy Adams","Sandra Bullock","Judi Dench","Meryl Streep","Julianne Moore ","Marion Cotillard","Felicity Jones","Rosamund Pike","Reese Witherspoon","Brie Larson ","Cate Blanchett","Jennifer Lawrence","Charlotte Rampling","Saoirse Ronan","Emma Stone ","Isabelle Huppert","Ruth Negga","Natalie Portman","Meryl Streep","Frances McDormand ","Sally Hawkins","Margot Robbie","Saoirse Ronan","Meryl Streep","Olivia Colman ","Yalitza Aparicio","Glenn Close","Lady Gaga","Melissa McCarthy","Renée Zellweger ","Cynthia Erivo","Scarlett Johansson","Saoirse Ronan","Charlize Theron","Alfred Deakin","Andrew Fisher","Arthur Fadden","Ben Chifley","Billy Hughes","Bob Hawke","Chris Watson","Frank Forde","George Reid","Gough Whitlam","Harold Holt","James Scullin","John Curtin","John Gorton","John Howard","John McEwen","Joseph Cook","Joseph Lyons","Julia Gillard"]
var OriginalListAction = ["amazing","banking","calling","causing","cutting","dealing","driving","evening","falling","feeling","finding","fishing","funding","getting","growing","hearing","helping","holding","hosting","housing","joining","keeping","knowing","leading","leaving","looking","meaning","meeting","missing","morning","nothing","ongoing","opening","parking","playing","putting","reading","running","seeking","selling","sending","serving"]
var OriginalListObjects = ["key chain","water bottle","shoes","cell phone","puddle","cup","toilet","eraser","grid paper","shampoo","bracelet","teddies","slipper","rug","toothpaste","white out","thread","toothbrush","sun glasses","chapter book","book","chalk","shawl","sponge","mop","rubber duck","chocolate","cookie jar","car","pillow","keyboard","apple","seat belt","socks","spoon",]
var OriginalListNature = ["Aardvark","Albatross","Alligator","Alpaca","Animal","Anole","Ant","Anteater","Antelope","Ape","Armadillo","Ass/donkey","Baboon","Badger","Barracuda","Bat","Bear ","Beaver","Bee","Binturong","Bird ","Bison","Bluebird","Boar ","Bobcat"]
var OriginalListWorld = ["World1","World2","World3","World4","World5","World6","World7"]
var OriginalListRandom = ["Random1","Random2","Random3","Random4","Random5","Random6"]

var People = OriginalListPeople.slice();
var Action = OriginalListAction.slice();
var Objects = OriginalListObjects.slice();
var Nature = OriginalListNature.slice();
var World = OriginalListWorld.slice();
var Random = OriginalListRandom.slice();


function fnStart() {
    fnTimer();
    fnShuffle(this[Category]);
    CurrentWord = this[Category].pop();
    document.getElementById("WordDisplay").innerHTML = CurrentWord;
    document.getElementById("NextColumn").setAttribute('onclick','fnNext()');
    RecentWord = CurrentWord;
    WordList = CurrentWord;
}

function fnNext() {
    document.getElementById("WordList").innerHTML = WordList;

    TurnCorrect++;
    TurnAttempted++;
    TurnScore++;
    if (this[Category].length === 0) {
        this[Category] = this['OriginalList' + Category].slice();
        fnShuffle(this[Category]);
    }
    CurrentWord = this[Category].pop();
    RecentWord = CurrentWord;
    WordList = WordList.concat("<br>" + RecentWord);

    document.getElementById("WordDisplay").innerHTML = CurrentWord;
    document.getElementById("TurnScoreDisplay").innerHTML = 'Turn Score: ' +TurnScore;
    document.getElementById("NumCorrect").innerHTML = 'Correct: '+TurnCorrect;
    
}


function fnSkip() {
    TurnSkipped++
    TurnAttempted++
    if (TurnSkipped>1) {
        TurnScore-- 
    }
    SkipList = SkipList.concat(RecentWord + "<br>")
    if (this[Category].length === 0) {
        this[Category] = this['OriginalList' + Category].slice();
        fnShuffle(this[Category]);
    }
    CurrentWord = this[Category].pop();
    RecentWord = CurrentWord
    document.getElementById("WordDisplay").innerHTML = CurrentWord;
    document.getElementById("SkipList").innerHTML = SkipList;
    document.getElementById("TurnScoreDisplay").innerHTML = 'Turn Score: ' +TurnScore;
    document.getElementById("NumSkipped").innerHTML = 'Skipped: '+TurnSkipped;

}

function fnEndTurn() {
//Reset timer, go to menu, reset variables.
}

function fnNextWord() {
    //Reset timer, go to menu, reset variables.
    }


function fnSelect() {
    document.getElementById("MenuContainer").style.display = "none";
    document.getElementById("GameContainer").style.display = "block";
    document.getElementById("TurnCategory").innerHTML = "Category: " + Category;


}



//Functions to pick the topic
    function fnPeople() {
        Category = "People";
        fnSelect();

    }
    function fnNature() {
        Category = "Nature";
        fnSelect();

    }
    function fnObject() {
        Category = "Objects";
        fnSelect();

    }
    function fnAction() {
        Category = "Action";
        fnSelect();

    }
    function fnRandom() {
        Category = "Random";
        fnSelect();

    }
    function fnWorld() {
        Category = "World";
        fnSelect();


    }


