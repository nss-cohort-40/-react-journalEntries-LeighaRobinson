const remoteURL = "http://localhost:5000";

export default {
  get(id) {
    return fetch(`${remoteURL}/entries/${id}`).then((result) => result.json());
  },
  getAll() {
    return fetch(`${remoteURL}/entries`).then((result) => result.json());
  },
};
