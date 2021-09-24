// ==UserScript==
// @name         AutoConnect
// @version      final
// @description  FreeHand connect to ENT
// @author       Kodesade
// @match        https://cas.monbureaunumerique.fr/login*
// @match        https://educonnect.education.gouv.fr/*
// @icon         https://www.google.com/s2/favicons?domain=monbureaunumerique.fr
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if(location.origin == "https://cas.monbureaunumerique.fr"){
        document.querySelector("#idp-EDU").click()
        document.querySelector("#button-submit").click()
    }
    if(location.origin == "https://educonnect.education.gouv.fr"){
        document.querySelector("#username").value = "Nom d'utilisateur" // To modify
        document.querySelector("#password").value = "Mot de passe" // To modify
        document.querySelector("#bouton_valider").click()
    }
})();
