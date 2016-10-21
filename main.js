var sections = ["#main", "#announcement", "#certificate", "#photoshoot", "#poem", "#family-tree", "#kindergarten", "#sources"];

var x = 0;

function movePageUp(n) {
    if (n !== 0) {
        x = x - 1;
    }
    $(window).scrollTo($(sections[x]));
}

function movePageDown(n) {
    if (n < 7) {
        x = x + 1;
    }
    $(window).scrollTo($(sections[x]));
}