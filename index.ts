function main() {
  // テキストエリアの値を取得する
  const textArea = document.getElementById("before") as HTMLTextAreaElement;

  // textareaタグ内に入力されたコンテンツを1行づつ配列にセットする処理です
  const lines: string[] = textArea.value.split(" ");

  // 1行づつ配列にセットしたコンテンツをループ処理します
  for (let i = 0; i < lines.length; i++) {
    // 1行づつ配列にセットしたコンテンツを出力します
    console.log(lines[i]);
  }
}
