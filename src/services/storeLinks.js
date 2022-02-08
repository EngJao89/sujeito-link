
export async function getLinksSave(key){
  const myLinks = await localStorage.getItem(key)

  let linksSaves = JSON.parse(myLinks) || [];

  return linksSaves;
}

export async function saveLink(key, newLink){
  let linksStorage = await getLinksSave(key);

  const hasLink = linksStorage.some(link => link.id === newLink.id);

  if(!hasLink){

  }

  linksStorage.push(newLink);
  await localStorage.setItem(key, JSON.stringify(linksStorage));
}

export async function deleteLink(links, id){
  let myLinks = links.filter( item => {
    return (item.id !== id) 
  })

  localStorage.setItem('@encurtaLink', JSON.stringify(myLinks));

  return myLinks;
}