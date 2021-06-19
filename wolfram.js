const wolframURL = "https://www.wolframalpha.com/input/?i=";

function limRedirect() {
  lim = $("#lim").val();
  seek = $("#limSeek").val();
  window.open(
    wolframURL + encodeURIComponent(lim) + "+as+x->" + encodeURIComponent(seek)
  );
}

function maxRedirect() {
  func = $("#maxFunc").val();
  window.open(wolframURL + "max+z=" + encodeURIComponent(func));
}

function diffRedirect() {
  func = $("#diffFunc").val();
  x = $("#diffX").val();
  if (func == "") {
    $("#diffToast").toast("show");
    return;
  }

  if (x == "") {
    window.open(wolframURL + "y=(" + encodeURIComponent(func) + ")'");
  } else {
    window.open(
      wolframURL +
        "y=(" +
        encodeURIComponent(func) +
        ")',+x=" +
        encodeURIComponent(x)
    );
  }
}

function detParamRedirect(A, res){
  var matStr = "det{"
  for (var i = 0; i < A.length; i++) {
    matStr += "{"
    for (var j = 0; j < A[0].length; j++) {
      matStr += A[i][j] + ","
    }
    matStr = matStr.slice(0, -1) + "},"
  }
  matStr = matStr.slice(0, -1) + "}="+res

  window.open(wolframURL+encodeURIComponent(matStr))
}

function integralRedirect(){
  var matStr = "integral " + $("#integral").val() + " dx"
  window.open(wolframURL+encodeURIComponent(matStr))
}

function definiteIntegralRedirect(){
  var matStr = "integrate " + $("#definite_integral").val() + " dx, x=" + $("#definite_integral_down").val() + ".." + $("#definite_integral_up").val()
  window.open(wolframURL+encodeURIComponent(matStr))
}

function doubleIntegralRedirect(){
  var matStr = "integrate " + $("#double_integral").val() + " " + $("#double_integral_select").val() + 
  ", x=" + $("#double_integral_x_down").val() + ".." + $("#double_integral_x_up").val() +
  ", y=" + $("#double_integral_y_down").val() + ".." + $("#double_integral_y_up").val()
  window.open(wolframURL+encodeURIComponent(matStr))
}

function tripleIntegralRedirect(){
  var matStr = "integrate " + $("#triple_integral").val() + " " + $("#triple_integral_select").val() + 
  ", x=" + $("#triple_integral_x_down").val() + ".." + $("#triple_integral_x_up").val() +
  ", y=" + $("#triple_integral_y_down").val() + ".." + $("#triple_integral_y_up").val() +
  ", z=" + $("#triple_integral_z_down").val() + ".." + $("#triple_integral_z_up").val()
  window.open(wolframURL+encodeURIComponent(matStr))
}