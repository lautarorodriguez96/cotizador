const apiUrl = ' https://api.exchangeratesapi.io/latest?base=USD';

export default function getValues(){
  return fetch(apiUrl).then(res => res.json())
  .then(response => {
    return (response)
  })
}