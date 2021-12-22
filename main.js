p1name = localStorage.getItem("Player_1_Name");
p2name = localStorage.getItem("Player_2_Name");
document.getElementById("u1name").innerHTML = p1name + " : ";
document.getElementById("u2name").innerHTML = p2name + " : ";
p1score = 0;
p2score = 0;
document.getElementById("u1score").innerHTML = p1score;
document.getElementById("u2score").innerHTML = p2score;
document.getElementById("qturn").innerHTML = "Question Turn : " + p1name;
document.getElementById("aturn").innerHTML = "Answer Turn : " + p2name;
function send() {
  get_word = document.getElementById("word").value;
  word = get_word.toLowerCase();
  console.log("word in lowerCase = " + word);

  charAt1 = word.charAt(1);
  console.log(charAt1);

  lenght_divide_2 = Math.floor(word.length / 2);
  charAt2 = word.charAt(lenght_divide_2);
  console.log(charAt2);

  lenght_minus_1 = word.length - 1;
  charAt3 = word.charAt(lenght_minus_1);
  console.log(charAt3);

  remove_charAt1 = word.replace(charAt1, "_");
  remove_charAt2 = remove_charAt1.replace(charAt2, "_");
  remove_charAt3 = remove_charAt2.replace(charAt3, "_");
  console.log(remove_charAt3);

  question_word = "<h4 id='word_display'> Q. " + remove_charAt3 + "</h4>";
  input_box = "<br>Answer : <input type='text' id='input_check_box'>";
  check_button =
    "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
  row = question_word + input_box + check_button;
  document.getElementById("output").innerHTML = row;
  document.getElementById("word").value = "";
}
qt = "1";
at = "2";
function check() {
  ans = document.getElementById("input_check_box").value;
  answer = ans.toLowerCase();
  if (answer == word) {
    if (at == "1") {
      p1score = p1score + 1;
      document.getElementById("u1score").innerHTML = p1score;
    } else if (at == "2") {
      p1score = p1score + 1;
      document.getElementById("u1score").innerHTML = p1score;
    }
  }
  if (qt == "1") {
    qt = "2";
    document.getElementById("qturn").innerHTML = "Question Turn : " + p2name;
  } else if (qt == "2") {
    qt = "1";
    document.getElementById("qturn").innerHTML = "Question Turn : " + p1name;
  }
  if (at == "1") {
    at = "2";
    document.getElementById("aturn").innerHTML = "Answer Turn : " + p2name;
  } else if (at == "2") {
    at = "1";
    document.getElementById("aturn").innerHTML = "Answer Turn : " + p1name;
  }
}
