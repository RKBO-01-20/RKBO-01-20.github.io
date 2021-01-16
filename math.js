function calcLog2() {
    k = $("#logK").val();
    $("#logKN").val(Math.log2(k));
    $("#logKNAnswer").val(Math.ceil(Math.log2(k)));
  }

  function getAsciiCode() {
    var char = $("#charToAscii").val();
    $("#asciiNum").val(char.charCodeAt(0));
    $("#asciiHex").val(char.charCodeAt(0).toString(16));
  }

  function getCharFromASCII() {
    var num = $("#numToAscii").val();
    var hex = $("#hexToAscii").val();
    if (num != "") {
      $("#asciiChar").val(String.fromCharCode(num));
    } else {
      $("#asciiChar").val(String.fromCharCode(parseInt(hex, 16)));
    }
  }

  function decodeThreeBits() {
    str = $("#stringToDecodeThree").val();
    if (str.length % 3 != 0) {
      $("#decodeThreeBits-toast").toast("show");
      return;
    }

    blocks = [];
    final = "";
    for (i = 0; i < str.length; i++) {
      if (i % 3 == 0) {
        blocks[i / 3] = "";

        if (i > 0) {
          final +=
            blocks[i / 3 - 1].split("0").length - 1 >
            blocks[i / 3 - 1].split("1").length - 1
              ? "0"
              : "1";
        }
      }

      blocks[Math.floor(i / 3)] += str[i];
    }
    final +=
      blocks[blocks.length - 1].split("0").length - 1 >
      blocks[blocks.length - 1].split("1").length - 1
        ? "0"
        : "1";
    $("#decodedThreeBits").val(final);
  }