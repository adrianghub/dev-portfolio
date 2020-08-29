import axios from "axios"
import firebase from '../firebase'

const ENDPOINT =
  "https://api.github.com/users/AdrianGHub/repos?sort=updated&direction=desc&per_page=6"

const db = firebase.firestore()

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

