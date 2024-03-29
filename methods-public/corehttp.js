// Class constructor function
class coreHTTP {

  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }

  async post(url, data) {
    const response = await fetch(url,
      {method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(data)
      });
    const resData = await response.json();
    return resData;
  }

  async put(url, data) {
    const response = await fetch(url,
      {method: "PUT",
       headers: {"content-type": "application/json"},
       body: JSON.stringify(data)
      });
    const resData = await response.json();
    return resData;}

  async delete(url) {
    const response = await fetch(url,
      {method: "DELETE",
       headers: {"content-type": "application/json"}
      });
    const resData = await "Task deleted...";
    return resData;
  }

}  // End of class
