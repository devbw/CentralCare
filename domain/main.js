export function beneficiaire(nom, prenom, email){
  return {
      nom,
      prenom,
      email,
      liste_annonce: []
  };
}

export function identifier_beneficiaire(gauche, droit) {
  return gauche.email == droit.email;
}

export function beneficiaire_avec_nouvelle_annonce(beneficiaire, annonce){
  return {
      ...beneficiaire,
      liste_annonce: [annonce, ...beneficiaire.liste_annonce]
  }
}

export const AnnonceStatut = {
  BROUILLON: 0,
  PUBLIE: 1
};

export function est_publiee({ statut }) {
  return statut === AnnonceStatut.PUBLIE;
}

export function est_brouillon({ statut }) {
  return statut === AnnonceStatut.BROUILLON;
}

export function annonce(email_beneficiaire, taux_horaire, titre, localisation, description){
  return {
      email_beneficiaire,
      taux_horaire,
      titre,
      localisation,
      description,
      statut: AnnonceStatut.BROUILLON
  };
}

export function annonce_publiee(annonce){
  if(annonce.statut === AnnonceStatut.PUBLIE) {
      throw new Error("L'annonce est déjà publiée");
  }

  return {
      ...annonce,
      statut: AnnonceStatut.PUBLIE
  }
}

export function annonce_brouillon(annonce) {
  if(annonce.statut === AnnonceStatut.BROUILLON) {
      throw new Error("L'annonce est déjà un brouillon");
  }

  return {
      ...annonce,
      statut: AnnonceStatut.BROUILLON
  }
}
