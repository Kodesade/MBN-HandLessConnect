// ==UserScript==
// @name        [MBN] HandLess-Connect
// @include     https://*.monbureaunumerique.fr*
// @include     https://cas.monbureaunumerique.fr/login*
// @include     https://educonnect.education.gouv.fr/idp/profile/SAML2/POST/SSO*
// @grant       none
// @version     2.0.0
// @author      Kodesade
// ==/UserScript==

const USERNAME = "..."
const PASSWORD = "..."
const LINKREGEX = /(?:https:\/\/)(?!(?:cas\.)).+\.monbureaunumerique\.fr\/?/

if (LINKREGEX.exec(window.location.href)){
  var target = window.document.querySelector(".fo-connect__link")
  var link = target.href
  window.location = link
}

if (window.location.href.startsWith("https://cas.monbureaunumerique.fr/login")){
  var radioTarget = window.document.querySelector("#idp-EDU")
  radioTarget.checked = true
  var form = window.document.querySelector(".cas__wayf-form")
  form.requestSubmit()
}

if (window.location.href.startsWith("https://educonnect.education.gouv.fr/idp/profile/SAML2/POST/SSO")){
  var inputUserName = window.document.querySelector("#username")
  var inputPassword = window.document.querySelector("#password")
  inputUserName.value = USERNAME
  inputPassword.value = PASSWORD
  var submitBtn = window.document.querySelector("#bouton_valider")
  submitBtn.click()
  
}
