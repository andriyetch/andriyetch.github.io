window.onload = () => {
    document.getElementById('button1').addEventListener('click', () => {
        //play Dorime
        audio = new Audio('../assets/dorime.mp3');
        audio.currentTime = 4;
        audio.play();

        //remove buttons
        document.getElementById('main').remove();
        //add circle
        var mainText = document.getElementById("circle");
        mainText.classList.add('main-dupe');
        mainText.innerText = `
        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
        ⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠛⠻⣿⣿⣿⣿⣿⣿
        ⣿⣿⣿⣿⣿⣦⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣄⡀⠀⢻⣿⣿⣿⣿⣿
        ⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠸⣿⣿⣿⠃⢰⣿⣿⣿⣿⣿
        ⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⣿⣿⣿⣿⣿
        ⣿⣿⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⢶⣶⣶⣾⣿⣿⣿⣿⣿⣿
        ⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⢠⡀⠐⠀⠀⠀⠻⢿⣿⣿⣿⣿⣿⣿⣿
        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⢸⣷⡄⠀⠣⣄⡀⠀⠉⠛⢿⣿⣿⣿⣿
        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠀⣿⣿⣦⠀⠹⣿⣷⣶⣦⣼⣿⣿⣿⣿
        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣼⣿⣿⣿⣷⣄⣸⣿⣿⣿⣿⣿⣿⣿⣿
        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿`;

       mainText.addEventListener('click', () => {
           window.location.href = '';
       })
    });//end button1 press

    document.getElementById('button2').addEventListener('click', () => {
        window.location.href = './seriouspage.html';
    });

}
