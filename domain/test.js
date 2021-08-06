import chai from 'chai';
import * as main from './main.js';

const expect = chai.expect;

const pierre_oglyphe = main.beneficiaire('Oglyphe', 'Pierre', 'test@email.com');
const hal_identic = main.beneficiaire('Hal', 'Identic', 'test@email.com');

expect(main.identifier_beneficiaire(pierre_oglyphe, hal_identic), "L'email identifie le beneficiaire").to.be.true;


const annonce_test = main.annonce(pierre_oglyphe.email, '15', 'Mon annonce de test', 'Grenoble', 'Cherche masseur de pingouins');
expect(main.est_brouillon(annonce_test), "L'annonce est un brouillon par default").to.be.true;
expect(() => main.annonce_brouillon(annonce_test), "On ne peut pas passer en brouillon une annonce qui l'est deja").to.throw("L'annonce est déjà un brouillon");

const annonce_test_publiee = main.annonce_publiee(annonce_test);
expect(main.est_publiee(annonce_test_publiee), "L'annonce publiee est bien publiee").to.be.true;
expect(() => main.annonce_publiee(annonce_test_publiee), "On ne peut pas publier une annonce qui l'est deja").to.throw("L'annonce est déjà publiée");

const annonce_test_brouillon = main.annonce_brouillon(annonce_test_publiee);
expect(main.est_brouillon(annonce_test_brouillon), "L'annonce remise en brouillon est bien brouillon").to.be.true;


const annonce_test_deux = main.annonce(hal_identic.email, '17', 'Une autre annonce de test', 'Grenoble', 'Cherche buraliste');
const annonce_test_trois = main.annonce(hal_identic.email, '25', 'Encore une autre annonce de test', 'Grenoble', 'Cherche coiffeur');
const hal_a_besoin_dun_buraliste = main.beneficiaire_avec_nouvelle_annonce(hal_identic, annonce_test_deux);
expect(hal_a_besoin_dun_buraliste.liste_annonce).to.have.lengthOf(1);
expect(hal_a_besoin_dun_buraliste.liste_annonce[0]).to.deep.equal(annonce_test_deux);

const hal_a_aussi_besoin_dun_coiffeur = main.beneficiaire_avec_nouvelle_annonce(hal_a_besoin_dun_buraliste, annonce_test_trois);
expect(hal_a_aussi_besoin_dun_coiffeur.liste_annonce).to.have.lengthOf(2);
expect(hal_a_aussi_besoin_dun_coiffeur.liste_annonce[0]).to.deep.equal(annonce_test_trois);

console.log('SUCCESS !');
