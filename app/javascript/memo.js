const buildHTML = (XHR) => {
  
  const item = XHR.response.post;
  const html = `
        <div class = "post">
          <div class = "post-date">
            投稿日時：${item.created_at}
          </div>
          <div class = "post-content">
            ${item.content}
          </div>
        </div>`;
  return html;
}

function post(){
  const submit = document.getElementById("submit");
  submit.addEventListener('click' ,(e) => {
    e.preventDefault();
    // 送信ボタンを押した時に動作するやつ
    console.log("押されていることの確認");
    const form = document.getElementById("form");
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts" , true);
    XHR.responseType = "json";
    XHR.send(formData);
    
    XHR.onload = () => {
      if(XHR.status != 200){
        console.log("エラーが起こった");
        alert(`Error ${XHR.status}： ${XHR.statusText}`);
        return null;
      }

      const list = document.getElementById("list")
      const formText = document.getElementById("content");
      // debugger;
      
        list.insertAdjacentHTML('afterend' , buildHTML(XHR));
        formText.value = "";
    };
  });

}

window.addEventListener('load' , post);