document.addEventListener("DOMContentLoaded", function (e) {
    let display = document.getElementById("calc");
    let buttons = Array.from(document.getElementsByClassName("button"));
    buttons.map((button) => {
        button.addEventListener("click", (e) => {
            console.log("you click on " + e.target.value);
            switch (e.target.value) {
                case "ON":
                    display.value = "ON";
                    break;

                case "OFF":
                    display.value = "OFF";
                    break;

                case "Clear":
                    display.value = " ";
                    break;

                case "AC":
                    display.value = display.value.slice(0, -1);
                    break;

                case "=":
                    display.value = eval(display.value);
                    break;

                default:
                    display.value += e.target.value;
                    break;
            }
        });
    });
});
