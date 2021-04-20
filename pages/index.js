import React from 'react'
import Head from 'next/head'

        // Set the date we're counting down to
        var countDownDate = new Date("May 23, 2021 16:30:00").getTime();

        // Update the count down every 1 second
        var x = setInterval(function() {
            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Output the result in an element with id="demo"
            document.getElementById("timmer").innerHTML =
                days + "D " + hours + "H " + minutes + "M " + seconds + "S ";

            // If the count down is over, write some text
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("demo").innerHTML = "CLOSED";
            }
        }, 1000);

const Home = () => (
  <div>
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
    <div className="wrapper">
  <h1>coming soon<span className="dot">.</span></h1>
  <p id="timmer" />
  <div className="icons">
    <a href="https://www.linkedin.com/in/mayank-gautam-4209ba202/" target="blank"><i className="fab fa-linkedin-in" /></a>
    <a href="https://github.com/mayank3810" target="blank"><i className="fab fa-github" /></a>
    <a href="mailto:mayankgautam2105@gmail.com" target="blank"><i className="fas fa-envelope" /></a>
  </div>
</div>


    <style jsx>{`
      :global(html,body) {
        margin: 0;
        padding: 0;
        height: 100%;
      }

      :global(body) {
        background: #00091b;
        color: #fff;
      }

      @keyframes fadeIn {
        from {
            top: 20%;
            opacity: 0;
        }

        to {
            top: 100;
            opacity: 1;
        }
    }

    @-webkit-keyframes fadeIn {
        from {
            top: 20%;
            opacity: 0;
        }

        to {
            top: 100;
            opacity: 1;
        }
    }

    .wrapper {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        animation: fadeIn 1000ms ease;
        -webkit-animation: fadeIn 1000ms ease;
    }

    h1 {
        text-align: center;
        font-size: 80px;
        font-family: "Poppins", sans-serif;
        margin-bottom: 20px;
        line-height: 1;
        font-weight: 700;
    }

    .dot {
        color: #4febfe;
    }

    p {
        text-align: center;
        padding-bottom: 20px;
        font-size: 50px;
        margin: 18px;
        font-family: "Poppins", sans-serif;
        font-weight: normal;
    }

    .icons {
        text-align: center;
    }

    .icons i {
        color: #00091b;
        background: #fff;
        height: 15px;
        width: 15px;
        padding: 13px;
        margin: 0 10px;
        border-radius: 50px;
        border: 2px solid #fff;
        transition: all 200ms ease;
        text-decoration: none;
        position: relative;
    }

    .icons i:hover,
    .icons i:active {
        color: #fff;
        background: none;
        cursor: pointer !important;
        transform: scale(1.2);
        -webkit-transform: scale(1.2);
        text-decoration: none;
    }
    `}</style>
  </div>
)

export default Home
