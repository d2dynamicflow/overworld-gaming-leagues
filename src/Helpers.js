// Convert To Slug
export const convertToSlug = (text) => {
  return text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
}
// Login
export const login = async (formData) => {
  //Fetch Auth Data
  // const response = await fetch("/api/login", {
  //   method: "POST",
  //   headers: {
  //     "Content-type": "application/json",
  //     "Accept": "application/json"
  //   },
  //   body: JSON.stringify(formData)
  // })
  const response = await fetch(`${apiUrl}/users/1`)
  const data = await response.json()
  //Check if credentials are correct
  if (data.ok) {
    // localStorage.setItem('login', true)
    // localStorage.setItem('token', data.token)
    // localStorage.setItem('user', JSON.stringify(data.data))
    // setUser(data.data)
    // setToken(data.token)
    // setIsLogin(true)
    // await getPosts()
    // await getUsers()
    console.log("login");
  }
  return data
}
