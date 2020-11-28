var Category1 = location.href.split("/").slice(-1); 
var Category2 = Category1.toString();
var Category = ""
var i = 0;
var s = 0;
var c = 0;
var StartTime;
var EndTime;
var TimeElapsed = 0;
var WordList = "";
var RecentWord = '';
var UsedWords = [];
var UsedIndex = [];
var CurrentWord = ''
var RndIndex = 0;
var CurrentWord = '';


function fnNext() {
    WordList = WordList.concat(RecentWord + "<br>")
    var RndIndex = [Math.floor(Math.random() * this[Category].length)]
    var CurrentWord = this[Category][RndIndex];
    RecentWord = CurrentWord
    document.getElementById("WordList").innerHTML = WordList;
    if (UsedWords.includes(CurrentWord)) {
        document.getElementById("Answer").innerHTML = CurrentWord + " [DUPLICATE]";
    } else {    document.getElementById("Answer").innerHTML = CurrentWord
           }
    document.getElementById("Score").innerHTML = 'Score: '+i;
    i = i + 1
    c = c + 1
    UsedWords.push(CurrentWord)
    UsedIndex.push(RndIndex)
    var x = document.getElementById("Score");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }

}

function fnTest() {
    document.getElementById("MenuContainer").style.display = "none";
    document.getElementById("GameContainer").style.display = "block";

}


function fnPeople() {
    Category = "People";
    alert(Category);
    document.getElementById("MenuContainer").style.display = "none";
    document.getElementById("GameContainer").style.display = "block";

}

function fnNature() {
    Category = "Nature"
    alert(Category)
}

function fnSkip() {
    s = s + 1
    WordList = WordList.concat(RecentWord + " [SKIPPED] " + "<br>")
    var item = this[Category][Math.floor(Math.random() * this[Category].length)];
    RecentWord = item
    document.getElementById("Answer").innerHTML = item;
    document.getElementById("WordList").innerHTML = WordList;
    document.getElementById("Skip").innerHTML = 'Skipped: '+s;
    c = c + 1
}

var People = ["Russell Crowe ","Javier Bardem","Tom Hanks","Ed Harris","Geoffrey Rush","Denzel Washington ","Russell Crowe","Sean Penn","Will Smith","Tom Wilkinson","Adrien Brody ","Nicolas Cage","Michael Caine","Daniel Day-Lewis","Jack Nicholson","Sean Penn ","Johnny Depp","Ben Kingsley","Jude Law","Bill Murray","Jamie Foxx ","Don Cheadle","Johnny Depp","Leonardo DiCaprio","Clint Eastwood","Philip Seymour Hoffman ","Terrence Howard","Heath Ledger","Joaquin Phoenix","David Strathairn","Forest Whitaker ","Leonardo DiCaprio","Ryan Gosling","Peter O'Toole","Will Smith","Daniel Day-Lewis ","George Clooney","Johnny Depp","Tommy Lee Jones","Viggo Mortensen","Sean Penn ","Richard Jenkins","Frank Langella","Brad Pitt","Mickey Rourke","Jeff Bridges ","George Clooney","Colin Firth","Morgan Freeman","Jeremy Renner","Colin Firth ","Javier Bardem","Jeff Bridges","Jesse Eisenberg","James Franco","Jean Dujardin ","Demián Bichir","George Clooney","Gary Oldman","Brad Pitt","Daniel Day-Lewis ","Bradley Cooper","Hugh Jackman","Joaquin Phoenix","Denzel Washington","Matthew McConaughey ","Christian Bale","Bruce Dern","Leonardo DiCaprio","Chiwetel Ejiofor","Eddie Redmayne ","Steve Carell","Bradley Cooper","Benedict Cumberbatch","Michael Keaton","Leonardo DiCaprio ","Bryan Cranston","Matt Damon","Michael Fassbender","Eddie Redmayne","Casey Affleck ","Andrew Garfield","Ryan Gosling","Viggo Mortensen","Denzel Washington","Gary Oldman ","Timothée Chalamet","Daniel Day-Lewis","Daniel Kaluuya","Denzel Washington","Rami Malek ","Christian Bale","Bradley Cooper","Willem Dafoe","Viggo Mortensen","Joaquin Phoenix ","Antonio Banderas","Leonardo DiCaprio","Adam Driver","Jonathan Pryce","Julia Roberts ","Joan Allen","Juliette Binoche","Ellen Burstyn","Laura Linney","Halle Berry ","Judi Dench","Nicole Kidman","Sissy Spacek","Renée Zellweger","Nicole Kidman ","Salma Hayek","Diane Lane","Julianne Moore","Renée Zellweger","Charlize Theron ","Keisha Castle-Hughes","Diane Keaton","Samantha Morton","Naomi Watts","Hilary Swank ","Annette Bening","Catalina Sandino Moreno","Imelda Staunton","Kate Winslet","Reese Witherspoon ","Judi Dench","Felicity Huffman","Keira Knightley","Charlize Theron","Helen Mirren ","Penélope Cruz","Judi Dench","Meryl Streep","Kate Winslet","Marion Cotillard ","Cate Blanchett","Julie Christie","Laura Linney","Ellen Page","Kate Winslet ","Anne Hathaway","Angelina Jolie","Melissa Leo","Meryl Streep","Sandra Bullock ","Helen Mirren","Carey Mulligan","Gabourey Sidibe","Meryl Streep","Natalie Portman ","Annette Bening","Nicole Kidman","Jennifer Lawrence","Michelle Williams","Meryl Streep ","Glenn Close","Viola Davis","Rooney Mara","Michelle Williams","Jennifer Lawrence ","Jessica Chastain","Emmanuelle Riva","Quvenzhané Wallis","Naomi Watts","Cate Blanchett ","Amy Adams","Sandra Bullock","Judi Dench","Meryl Streep","Julianne Moore ","Marion Cotillard","Felicity Jones","Rosamund Pike","Reese Witherspoon","Brie Larson ","Cate Blanchett","Jennifer Lawrence","Charlotte Rampling","Saoirse Ronan","Emma Stone ","Isabelle Huppert","Ruth Negga","Natalie Portman","Meryl Streep","Frances McDormand ","Sally Hawkins","Margot Robbie","Saoirse Ronan","Meryl Streep","Olivia Colman ","Yalitza Aparicio","Glenn Close","Lady Gaga","Melissa McCarthy","Renée Zellweger ","Cynthia Erivo","Scarlett Johansson","Saoirse Ronan","Charlize Theron","Alfred Deakin","Andrew Fisher","Arthur Fadden","Ben Chifley","Billy Hughes","Bob Hawke","Chris Watson","Frank Forde","George Reid","Gough Whitlam","Harold Holt","James Scullin","John Curtin","John Gorton","John Howard","John McEwen","Joseph Cook","Joseph Lyons","Julia Gillard"]
var Action = ["amazing","banking","calling","causing","cutting","dealing","driving","evening","falling","feeling","finding","fishing","funding","getting","growing","hearing","helping","holding","hosting","housing","joining","keeping","knowing","leading","leaving","looking","meaning","meeting","missing","morning","nothing","ongoing","opening","parking","playing","putting","reading","running","seeking","selling","sending","serving"]
var Objects = ["key chain","water bottle","shoes","cell phone","puddle","cup","toilet","eraser","grid paper","shampoo","bracelet","teddies","slipper","rug","toothpaste","white out","thread","toothbrush","sun glasses","chapter book","book","chalk","shawl","sponge","mop","rubber duck","chocolate","cookie jar","car","pillow","keyboard","apple","seat belt","socks","spoon",]
var Nature = ["Aardvark","Albatross","Alligator","Alpaca","Animal","Anole","Ant","Anteater","Antelope","Ape","Armadillo","Ass/donkey","Baboon","Badger","Barracuda","Bat","Bear ","Beaver","Bee","Binturong","Bird ","Bison","Bluebird","Boar ","Bobcat",]


var GamePageHTML = '<head>    <meta charset="utf-8">    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">    <title>Articky</title>    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">    <link rel="stylesheet" href="assets/css/styles.css"></head><body>    <div class="row" style="border-width: 5px;border-style: solid;background: #ff0000;">        <div class="col">            <h1 style="text-align: center;">People</h1>        </div>    </div>    <div class="row" style="border-width: 5px;border-style: solid;background: #0029ff;">        <div class="col">            <h1 style="text-align: center;" id="Answer">Word</h1>        </div>    </div>    <div class="row" style="border-width: 5px;border-style: solid;">        <div class="col" style="background: #ffe500;">            <h1 style="text-align: center;">Skip</h1>            <p style="text-align: center;"></p>        </div>        <div class="col" id="NextHeading" onclick="fnNext()" style="background: #14ff00;">            <h1 style="text-align: center;">Next</h1>            <p style="text-align: center;" id="WordList"></p>        </div>    </div>    <div class="row" style="border-width: 5px;border-style: solid;">        <div class="col" style="background: #9c5778;">            <h1 style="text-align: center;" id="Score">Score</h1>        </div>    </div>    <script src="assets/js/jquery.min.js"></script>    <script src="assets/bootstrap/js/bootstrap.min.js"></script>    <script src="/index.js"></script></body>'
