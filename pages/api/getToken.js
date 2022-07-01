async function UpdateToken(setToken)  {
    const user = "akun7@mig.id"
    const pass = "8FC42E3C"
    let token = ""
      await fetch("https://mitramas-test.herokuapp.com/auth/login",{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: user,
          password: pass
        })
      }).then((res) => {
        res.json().then((data) => {setToken(data.access_token)})
      }).catch((err) => {
        console.log(err)
    })
    return token
  }

export { UpdateToken }