var rp = 0;
      var p1 = document.getElementById("p1");
      var p2 = document.getElementById("p2");
      var p3 = document.getElementById("p3");
      var p4 = document.getElementById("p4");
      var p5 = document.getElementById("p5");
      var f = document.getElementById("f");
      var contador = 0
      var timeout1
      var timeout2
      var timeout3
      var timeout4
      var timeout5

      //pergunta 1
      function certo1() {
        rp = 1;
      }

      function proximo1() {
        if (rp == 1) {
          document.getElementById("saida1").innerHTML =
            "voce acertou, vamos para a próxima";
          setTimeout(function () {
            p1.style.display = "none";
            p2.style.display = "block";

            clearTimeout(timeout1)
            teste2();
            rp = 0;
            contador++
          }, 2000);
        } else {
          document.getElementById("saida1").innerHTML =
            "voce errou, tente novamente";

          setTimeout(function () {
            window.location.reload(1);
          }, 2000);
        }
      }

      //pergunta 2
      function certo2() {
        rp = 1;
      }

      function proximo2() {
        if (rp == 1) {
          document.getElementById("saida2").innerHTML =
            "voce acertou, vamos para a próxima";
          setTimeout(function () {
            p2.style.display = "none";
            p3.style.display = "block";

            clearTimeout(timeout2)
            teste3();
            rp = 0;
            contador++
          }, 2000);
        } else {
          document.getElementById("saida2").innerHTML =
            "voce errou, tente novamente";

          setTimeout(function () {
            window.location.reload(1);
          }, 2000);
        }
      }

      //pergunta 3
      function certo3() {
        rp = 1;
      }

      function proximo3() {
        if (rp == 1) {
          document.getElementById("saida3").innerHTML =
            "voce acertou, vamos para a próxima";
          setTimeout(function () {
            p3.style.display = "none";
            p4.style.display = "block";

            clearTimeout(timeout3)
            teste4();
            rp = 0;
            contador++
          }, 2000);
        } else {
          document.getElementById("saida3").innerHTML =
            "voce errou, tente novamente";

          setTimeout(function () {
            window.location.reload(1);
          }, 2000);
        }
      }

      //pergunta 4
      function certo4() {
        rp = 1;
      }

      function proximo4() {
        if (rp == 1) {
          document.getElementById("saida4").innerHTML =
            "voce acertou, vamos para a próxima";
          setTimeout(function () {
            p4.style.display = "none";
            p5.style.display = "block";

            clearTimeout(timeout4)
            teste5();
            rp = 0;
            contador++
          }, 2000);
        } else {
          document.getElementById("saida4").innerHTML =
            "voce errou, tente novamente";

          setTimeout(function () {
            window.location.reload(1);
          }, 2000);
        }
      }

      //pergunta 5
      function certo5() {
        rp = 1;
      }

      function proximo5() {
        if (rp == 1) {
          document.getElementById("saida5").innerHTML =
            "voce acertou, vamos para a próxima";
          setTimeout(function () {
            p5.style.display = "none";
            f.style.display = "block";

            clearTimeout(timeout5)
            rp = 0;
            contador++
          }, 2000);
        } else {
          document.getElementById("saida5").innerHTML =
            "voce errou, tente novamente";

          setTimeout(function () {
            window.location.reload(1);
          }, 2000);
        }
      }

      //  cronometro

      window.onload = function () {
        teste1();
      };

      function teste1() {
        cro1();

        timeout1 = setTimeout(function () {
          p1.style.display = "none";
          p2.style.display = "block";

          teste2();
        }, 60000);
      }

      function teste2() {
        cro2();

       timeout2 = setTimeout(function () {
          p2.style.display = "none";
          p3.style.display = "block";

          teste3();
        }, 60000);
      }

      function teste3() {
        cro3();

      timeout3 = setTimeout(function () {
          p3.style.display = "none";
          p4.style.display = "block";

          teste4();
        }, 60000);
      }

      function teste4() {
        cro4();

       timeout4 = setTimeout(function () {
          p4.style.display = "none";
          p5.style.display = "block";

          teste5();
        }, 60000);
      }

      function teste5() {
        cro5();

       timeout5 = setTimeout(function () {
          p5.style.display = "none";
          f.style.display = "block";
        }, 60000);
      }



      function cro1() {
        var seg = 60;
        function cronometro() {
          seg--;
          if (seg <= 10) {
            seg1.style.color = "red";
          } else {
            seg1.style.color = "9B2BCF";
          }

          document.getElementById("seg1").innerHTML = seg;
        }
        setInterval(cronometro, 1000);
      }

      function cro2() {
        var seg = 60;
        function cronometro() {
          seg--;
          if (seg <= 10) {
            seg2.style.color = "red";
          } else {
            seg2.style.color = "9B2BCF";
          }

          document.getElementById("seg2").innerHTML = seg;
        }
        setInterval(cronometro, 1000);
      }

      function cro3() {
        var seg = 60;
        function cronometro() {
          seg--;
          if (seg <= 10) {
            seg3.style.color = "red";
          } else {
            seg3.style.color = "9B2BCFk";
          }

          document.getElementById("seg3").innerHTML = seg;
        }
        setInterval(cronometro, 1000);
      }

      function cro4() {
        var seg = 60;
        function cronometro() {
          seg--;
          if (seg <= 10) {
            seg4.style.color = "red";
          } else {
            seg4.style.color = "9B2BCF";
          }

          document.getElementById("seg4").innerHTML = seg;
        }
        setInterval(cronometro, 1000);
      }

      function cro5() {
        var seg = 60;
        function cronometro() {
          seg--;
          if (seg <= 10) {
            seg5.style.color = "red";
          } else {
            seg5.style.color = "9B2BCF";
          }

          document.getElementById("seg5").innerHTML = seg;
        }
        setInterval(cronometro, 1000);
      }