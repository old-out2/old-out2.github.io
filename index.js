// buttonをクリックした時に実行する関数です
function main() {
  // テキストエリアの値を取得する
  const textArea = document.getElementById("before");

  // textareaタグ内に入力されたコンテンツを1行づつ配列にセットする処理です
  const lines = textArea.value;

  //受け取る変数を定義
  let result = "";

  // 特定の文字列を置換する処理です
  // .voice-state[data-reactid*="〇〇〇"] .avatarをli[class*="State"] img[src*="〇〇〇"]に置換します
  result = lines.replace(/.voice-state\[data-reactid\*="(.+?)"\] .avatar/g, `li[class*="State"] img[src*="$1"]`);

  // .voice-statesをul[class*="States"]に置換します
  result = lines.replace(".voice-states", `ul[class*="States"]`);

  // li.voice-stateをli[class*="State"]に置換します
  result = result.replaceAll(/li.voice-state|.voice-state/g, `li[class*="State"]`);

  // .avatarをimg[class*="avatar"]に置換します
  result = result.replace(".avatar", `img[class*="avatar"]`);

  // .userをdiv[class*="user"]に置換します
  result = result.replace(/.user|div.user/g, `div[class*="user"]`);

  // .nameをdiv[class*="name"]に置換します
  result = result.replace(".name", `div[class*="name"]`);

  // .speakingをimg[class*="Speaking"]に置換します
  result = result.replace(".speaking", `img[class*="Speaking"]`);

  // 1行づつ配列にセットしたコンテンツを出力します
  console.log(result);


  // テキストエリアの値を書き換える
  const textArea2 = document.getElementById("after");
  textArea2.value = result;
}
