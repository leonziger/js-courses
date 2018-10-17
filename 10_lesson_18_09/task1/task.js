function getAllNames(users) {
  return users.map(function (user) {
    let name = user.first_name||'';

    return {
      name,
      length: name.length
    }
  })
}

console.log(getAllNames(users));