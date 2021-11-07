const socialLinks = {
  github: 'LucasReb',
  youtube: "LucasRebouças",
  facebook: "",
  instagram: "lucas_rebsilv",
  twitter: "Lucas_rebSilv",
}

function changeLinks() {
  for (let li of socialMediaLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${socialLinks[social]}`
  }
}

changeLinks()

function getGitUserInfo() {
  const url = `https://api.github.com/users/${socialLinks.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userGit.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitUserInfo()