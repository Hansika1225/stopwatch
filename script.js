let seconds = 0;
        let interval = null;

        const display = document.getElementById("display");
        const startButton = document.getElementById("start");
        const pauseButton = document.getElementById("pause");
        const resetButton = document.getElementById("reset");

        function formatTime(seconds) {
            let hrs = Math.floor(seconds / 3600);
            let mins = Math.floor((seconds % 3600) / 60);
            let secs = seconds % 60;

            return (
                (hrs < 10 ? "0" : "") + hrs + ":" +
                (mins < 10 ? "0" : "") + mins + ":" +
                (secs < 10 ? "0" : "") + secs
            );
        }

        function updateDisplay() {
            display.innerHTML = formatTime(seconds);
        }

        startButton.addEventListener("click", function () {
            if (!interval) {
                interval = setInterval(function () {
                    seconds++;
                    updateDisplay();
                }, 1000);
            }
        });

        pauseButton.addEventListener("click", function () {
            clearInterval(interval);
            interval = null;
        });

        resetButton.addEventListener("click", function () {
            clearInterval(interval);
            interval = null;
            seconds = 0;
            updateDisplay();
        });

        updateDisplay();
