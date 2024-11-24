function clk(val) {
    const screen = document.getElementById("screen");
    screen.value += val;
}

function clrdisp() {
    const screen = document.getElementById("screen");
    screen.value = "";
}

function eql() {
    const screen = document.getElementById("screen");
    try {
        // Evaluate the expression and update the screen
        screen.value = eval(screen.value);
    } catch {
        screen.value = "Error";
    }
}
