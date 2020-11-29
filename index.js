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


function fnNext() {
    TurnCorrect++
    TurnAttempted++
    TurnScore++
    WordList = WordList.concat(RecentWord + "<br>")
    var RndIndex = [Math.floor(Math.random() * this[Category].length)]
    var CurrentWord = this[Category][RndIndex];
    RecentWord = CurrentWord
    document.getElementById("WordList").innerHTML = WordList;
    document.getElementById("WordDisplay").innerHTML = CurrentWord
    document.getElementById("TurnScoreDisplay").innerHTML = 'Turn Score: ' +TurnScore;
    document.getElementById("NumCorrect").innerHTML = 'Correct: '+TurnCorrect;

    UsedWords.push(CurrentWord)
    UsedIndex.push(RndIndex)
    }


function fnSkip() {
    TurnSkipped++
    TurnAttempted++
    TurnScore--
    SkipList = SkipList.concat(RecentWord + "<br>")
    var item = this[Category][Math.floor(Math.random() * this[Category].length)];
    RecentWord = item
    document.getElementById("WordDisplay").innerHTML = item;
    document.getElementById("SkipList").innerHTML = SkipList;
    document.getElementById("TurnScoreDisplay").innerHTML = 'Turn Score: ' +TurnScore;
    document.getElementById("NumSkipped").innerHTML = 'Skipped: '+TurnSkipped;

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
        Category = "Object";
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
    function fnSelect() {
        document.getElementById("MenuContainer").style.display = "none";
        document.getElementById("GameContainer").style.display = "block";
        document.getElementById("TurnCategory").innerHTML = "Category: " + Category;
        fnTimer();     

    }


    function fnTimer() {
        // Set the date we're counting down to
        var countDownDate = new Date().getTime() + 60000;

        // Update the count down every 1 second
        var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("TurnTimer").innerHTML = "Time remaining: " + seconds + "s ";

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("TurnTimer").innerHTML = "EXPIRED";
        }
        }, 1000);
    }


var People = ["Russell Crowe ","Javier Bardem","Tom Hanks","Ed Harris","Geoffrey Rush","Denzel Washington ","Russell Crowe","Sean Penn","Will Smith","Tom Wilkinson","Adrien Brody ","Nicolas Cage","Michael Caine","Daniel Day-Lewis","Jack Nicholson","Sean Penn ","Johnny Depp","Ben Kingsley","Jude Law","Bill Murray","Jamie Foxx ","Don Cheadle","Johnny Depp","Leonardo DiCaprio","Clint Eastwood","Philip Seymour Hoffman ","Terrence Howard","Heath Ledger","Joaquin Phoenix","David Strathairn","Forest Whitaker ","Leonardo DiCaprio","Ryan Gosling","Peter O'Toole","Will Smith","Daniel Day-Lewis ","George Clooney","Johnny Depp","Tommy Lee Jones","Viggo Mortensen","Sean Penn ","Richard Jenkins","Frank Langella","Brad Pitt","Mickey Rourke","Jeff Bridges ","George Clooney","Colin Firth","Morgan Freeman","Jeremy Renner","Colin Firth ","Javier Bardem","Jeff Bridges","Jesse Eisenberg","James Franco","Jean Dujardin ","Demián Bichir","George Clooney","Gary Oldman","Brad Pitt","Daniel Day-Lewis ","Bradley Cooper","Hugh Jackman","Joaquin Phoenix","Denzel Washington","Matthew McConaughey ","Christian Bale","Bruce Dern","Leonardo DiCaprio","Chiwetel Ejiofor","Eddie Redmayne ","Steve Carell","Bradley Cooper","Benedict Cumberbatch","Michael Keaton","Leonardo DiCaprio ","Bryan Cranston","Matt Damon","Michael Fassbender","Eddie Redmayne","Casey Affleck ","Andrew Garfield","Ryan Gosling","Viggo Mortensen","Denzel Washington","Gary Oldman ","Timothée Chalamet","Daniel Day-Lewis","Daniel Kaluuya","Denzel Washington","Rami Malek ","Christian Bale","Bradley Cooper","Willem Dafoe","Viggo Mortensen","Joaquin Phoenix ","Antonio Banderas","Leonardo DiCaprio","Adam Driver","Jonathan Pryce","Julia Roberts ","Joan Allen","Juliette Binoche","Ellen Burstyn","Laura Linney","Halle Berry ","Judi Dench","Nicole Kidman","Sissy Spacek","Renée Zellweger","Nicole Kidman ","Salma Hayek","Diane Lane","Julianne Moore","Renée Zellweger","Charlize Theron ","Keisha Castle-Hughes","Diane Keaton","Samantha Morton","Naomi Watts","Hilary Swank ","Annette Bening","Catalina Sandino Moreno","Imelda Staunton","Kate Winslet","Reese Witherspoon ","Judi Dench","Felicity Huffman","Keira Knightley","Charlize Theron","Helen Mirren ","Penélope Cruz","Judi Dench","Meryl Streep","Kate Winslet","Marion Cotillard ","Cate Blanchett","Julie Christie","Laura Linney","Ellen Page","Kate Winslet ","Anne Hathaway","Angelina Jolie","Melissa Leo","Meryl Streep","Sandra Bullock ","Helen Mirren","Carey Mulligan","Gabourey Sidibe","Meryl Streep","Natalie Portman ","Annette Bening","Nicole Kidman","Jennifer Lawrence","Michelle Williams","Meryl Streep ","Glenn Close","Viola Davis","Rooney Mara","Michelle Williams","Jennifer Lawrence ","Jessica Chastain","Emmanuelle Riva","Quvenzhané Wallis","Naomi Watts","Cate Blanchett ","Amy Adams","Sandra Bullock","Judi Dench","Meryl Streep","Julianne Moore ","Marion Cotillard","Felicity Jones","Rosamund Pike","Reese Witherspoon","Brie Larson ","Cate Blanchett","Jennifer Lawrence","Charlotte Rampling","Saoirse Ronan","Emma Stone ","Isabelle Huppert","Ruth Negga","Natalie Portman","Meryl Streep","Frances McDormand ","Sally Hawkins","Margot Robbie","Saoirse Ronan","Meryl Streep","Olivia Colman ","Yalitza Aparicio","Glenn Close","Lady Gaga","Melissa McCarthy","Renée Zellweger ","Cynthia Erivo","Scarlett Johansson","Saoirse Ronan","Charlize Theron","Alfred Deakin","Andrew Fisher","Arthur Fadden","Ben Chifley","Billy Hughes","Bob Hawke","Chris Watson","Frank Forde","George Reid","Gough Whitlam","Harold Holt","James Scullin","John Curtin","John Gorton","John Howard","John McEwen","Joseph Cook","Joseph Lyons","Julia Gillard"]
var Action = ["amazing","banking","calling","causing","cutting","dealing","driving","evening","falling","feeling","finding","fishing","funding","getting","growing","hearing","helping","holding","hosting","housing","joining","keeping","knowing","leading","leaving","looking","meaning","meeting","missing","morning","nothing","ongoing","opening","parking","playing","putting","reading","running","seeking","selling","sending","serving"]
var Objects = ["key chain","water bottle","shoes","cell phone","puddle","cup","toilet","eraser","grid paper","shampoo","bracelet","teddies","slipper","rug","toothpaste","white out","thread","toothbrush","sun glasses","chapter book","book","chalk","shawl","sponge","mop","rubber duck","chocolate","cookie jar","car","pillow","keyboard","apple","seat belt","socks","spoon",]
var Nature = ["Aardvark","Albatross","Alligator","Alpaca","Animal","Anole","Ant","Anteater","Antelope","Ape","Armadillo","Ass/donkey","Baboon","Badger","Barracuda","Bat","Bear ","Beaver","Bee","Binturong","Bird ","Bison","Bluebird","Boar ","Bobcat"]
var World = ["Wold1","Wold2","Wold3","Wold4","Wold5","Wold6","Wold7"]
var Random = ["Random1","Random2","Random3","Random4","Random5","Random6"]