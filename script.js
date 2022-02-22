async function searchName(name1){
  const url =`https://api.nationalize.io?name=${name1}`;
  await fetch(url)
  .then(response=> response.json())
  .then((jsonData)=>{
    const a=jsonData;
    document.getElementById("demo").innerHTML=JSON.stringify(a.name);
    document.getElementById("demo1").innerHTML=JSON.stringify(a.country[0]);
    document.getElementById("demo2").innerHTML=JSON.stringify(a.country[1]);
  })
  .catch((er) => {
    console.error(er);
    alert("problem on response");
  });
}

window.onload=()=>{
  const searchFieldElement= document.getElementById("searchField");
  searchFieldElement.onkeyup=(event)=>{
    searchName(searchFieldElement.value);
  };
}