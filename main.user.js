// ==UserScript==
// @name        [MBN] HandLess-Connect
// @include     https://*.monbureaunumerique.fr*
// @include     https://cas.monbureaunumerique.fr/login*
// @include     https://educonnect.education.gouv.fr/idp/profile/SAML2/POST/SSO*
// @grant       none
// @version     2.1.0
// @author      Kodesade
// @website     https://github.com/Kodesade/MBN-HandLessConnect/
// ==/UserScript==

// Définition des constantes contenant les informations de connexion
const USERNAME = "...";
const PASSWORD = "...";

// Définition de l'expression régulière pour les liens à traiter
const LINKREGEX = /(?:https:\/\/)(?!(?:cas\.)).+\.monbureaunumerique\.fr\/?/;

// Si l'URL actuelle correspond à une expression régulière
if (LINKREGEX.exec(window.location.href)) {
  // Sélection du lien à suivre
  const target = window.document.querySelector(".fo-connect__link");
  // Redirection vers le lien
  window.location = target.href;
}

// Si l'URL actuelle est l'URL de connexion
if (window.location.href.startsWith("https://cas.monbureaunumerique.fr/login")) {
  // Sélection du bouton radio pour la connexion avec eduConnect
  const radioTarget = window.document.querySelector("#idp-EDU");
  // Coche le bouton radio
  radioTarget.checked = true;
  // Sélection du formulaire de connexion
  const form = window.document.querySelector(".cas__wayf-form");
  // Soumission du formulaire
  form.requestSubmit();
}

// Si l'URL actuelle est l'URL de connexion avec eduConnect
if (window.location.href.startsWith("https://educonnect.education.gouv.fr/idp/profile/SAML2/POST/SSO")) {
  // Sélection des champs de saisie du nom d'utilisateur et du mot de passe
  const inputUserName = window.document.querySelector("#username");
  const inputPassword = window.document.querySelector("#password");
  // Remplissage des champs de saisie avec les informations de connexion
  inputUserName.value = USERNAME;
  inputPassword.value = PASSWORD;
  // Sélection du bouton de soumission
  const submitBtn = window.document.querySelector("#bouton_valider");
  // Soumission du formulaire
  submitBtn.click();
}
