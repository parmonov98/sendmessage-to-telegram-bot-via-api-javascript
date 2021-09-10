
const sendRequest = async (token, method, content) => {

  const options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(content)
  };

  const url = `https://api.telegram.org/bot${token}/${method}`;
  const req = await fetch(url, options);
  return await req.json();
}

const data = {
  chat_id: 94665561,
  text: "<b>bold</b> text",
  parse_mode: 'HTML'
};

const token = 'token';

const responseData = sendRequest(token, 'sendMessage', content);

console.log(responseData);