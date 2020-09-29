import axios from "axios"
import db from '../firebase';

const ENDPOINT =
  "https://api.github.com/users/AdrianGHub/repos?sort=updated&direction=desc&per_page=6"

export async function fetchProjects() {
  try {
    const response = await axios.get(ENDPOINT)

    return response
  } catch (error) {
    console.log(error)
  }
}

export async function fetchArticles() {
  try {
    const response = await db
    .collection('Articles')
    .limit(8)
    .get()
    .then(docs => docs)
    return response
  } catch (error) {
    console.log(error)
  }
}

async function deleteRecord (id) {
  db.collection('Articles')
  .doc(id).delete()
}

