const linksSocialMedia = {
  youtube: 'channel/UC5WZfGUSt6EEmC5ar1-AiOw',
  instagram: 'brenonoites',
  github: 'onerbreno'
}

function changeLinkSocialMedia() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeLinkSocialMedia()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = `${data.html_url}`
      userLogin.textContent = data.login
      userImage.src = data.avatar_url
    })
}

getGithubProfileInfos()
