import Link from "next/link"

export default function PolitiqueDeConfidentialite() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-24 md:py-32">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Politique de Confidentialité</h1>
        <p className="text-muted-foreground">Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}</p>
      </div>

      <div className="prose prose-blue max-w-none">
        <p className="lead text-lg mb-8">
          Chez Sejouris, nous accordons une grande importance à la protection de vos données personnelles. Cette
          politique de confidentialité vous explique comment nous collectons, utilisons, partageons et protégeons vos
          informations lorsque vous utilisez notre site web et nos services.
        </p>

        <h2 className="text-2xl font-bold text-primary mt-8 mb-4">1. Informations que nous collectons</h2>

        <h3 className="text-xl font-semibold text-primary mt-6 mb-3">1.1 Informations que vous nous fournissez</h3>
        <p>Nous collectons les informations que vous nous fournissez directement lorsque vous :</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Remplissez notre formulaire de contact</li>
          <li>Créez un compte sur notre plateforme</li>
          <li>Nous contactez par téléphone ou par email</li>
          <li>Participez à nos enquêtes ou promotions</li>
        </ul>
        <p>
          Ces informations peuvent inclure votre nom, prénom, adresse email, numéro de téléphone, adresse postale,
          informations sur votre bien immobilier, et toute autre information que vous choisissez de nous communiquer.
        </p>

        <h3 className="text-xl font-semibold text-primary mt-6 mb-3">1.2 Informations collectées automatiquement</h3>
        <p>
          Lorsque vous visitez notre site web, nous pouvons collecter automatiquement certaines informations, notamment
          :
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Votre adresse IP</li>
          <li>Le type et la version de votre navigateur</li>
          <li>Le type d'appareil que vous utilisez</li>
          <li>Votre système d'exploitation</li>
          <li>Les pages que vous visitez sur notre site</li>
          <li>La date et l'heure de votre visite</li>
          <li>Le temps passé sur chaque page</li>
        </ul>
        <p>
          Nous utilisons des cookies et d'autres technologies similaires pour collecter ces informations. Pour plus
          d'informations sur notre utilisation des cookies, veuillez consulter notre politique en matière de cookies.
        </p>

        <h2 className="text-2xl font-bold text-primary mt-8 mb-4">2. Comment nous utilisons vos informations</h2>
        <p>Nous utilisons les informations que nous collectons pour :</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Vous fournir nos services et répondre à vos demandes</li>
          <li>Vous envoyer des informations sur nos services, des offres spéciales et des mises à jour</li>
          <li>Personnaliser et améliorer votre expérience sur notre site</li>
          <li>Analyser l'utilisation de notre site et améliorer nos services</li>
          <li>Détecter, prévenir et résoudre les problèmes techniques ou de sécurité</li>
          <li>Respecter nos obligations légales</li>
        </ul>

        <h2 className="text-2xl font-bold text-primary mt-8 mb-4">3. Partage de vos informations</h2>
        <p>
          Nous ne vendons pas vos données personnelles à des tiers. Nous pouvons partager vos informations dans les cas
          suivants :
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            Avec nos prestataires de services qui nous aident à fournir nos services (par exemple, hébergement web,
            traitement des paiements, service client)
          </li>
          <li>Si nécessaire pour respecter la loi, protéger nos droits ou la sécurité de nos utilisateurs</li>
          <li>Dans le cadre d'une fusion, acquisition ou vente d'actifs, auquel cas nous vous en informerons</li>
          <li>Avec votre consentement ou selon vos instructions</li>
        </ul>

        <h2 className="text-2xl font-bold text-primary mt-8 mb-4">4. Conservation des données</h2>
        <p>
          Nous conservons vos données personnelles aussi longtemps que nécessaire pour fournir nos services, respecter
          nos obligations légales, résoudre les litiges et faire appliquer nos accords. La durée de conservation peut
          varier en fonction du type de données et de la finalité du traitement.
        </p>

        <h2 className="text-2xl font-bold text-primary mt-8 mb-4">5. Sécurité des données</h2>
        <p>
          Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos
          données personnelles contre la perte, l'accès non autorisé, la divulgation, l'altération ou la destruction.
          Cependant, aucune méthode de transmission sur Internet ou de stockage électronique n'est totalement sécurisée,
          et nous ne pouvons garantir une sécurité absolue.
        </p>

        <h2 className="text-2xl font-bold text-primary mt-8 mb-4">6. Vos droits</h2>
        <p>
          Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés,
          vous disposez des droits suivants concernant vos données personnelles :
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            Droit d'accès : vous pouvez demander une copie des données personnelles que nous détenons à votre sujet
          </li>
          <li>Droit de rectification : vous pouvez demander la correction de données inexactes ou incomplètes</li>
          <li>
            Droit à l'effacement : vous pouvez demander la suppression de vos données dans certaines circonstances
          </li>
          <li>Droit à la limitation du traitement : vous pouvez demander la limitation du traitement de vos données</li>
          <li>
            Droit à la portabilité des données : vous pouvez demander le transfert de vos données à un autre organisme
          </li>
          <li>
            Droit d'opposition : vous pouvez vous opposer au traitement de vos données dans certaines circonstances
          </li>
        </ul>
        <p>
          Pour exercer ces droits, veuillez nous contacter à l'adresse email suivante :{" "}
          <a href="mailto:contact@sejouris.com" className="text-primary hover:underline">
            contact@sejouris.com
          </a>
          .
        </p>

        <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
          7. Modifications de notre politique de confidentialité
        </h2>
        <p>
          Nous pouvons modifier cette politique de confidentialité de temps à autre. Toute modification sera publiée sur
          cette page avec une date de mise à jour. Nous vous encourageons à consulter régulièrement cette page pour
          rester informé des changements.
        </p>

        <h2 className="text-2xl font-bold text-primary mt-8 mb-4">8. Contact</h2>
        <p>
          Si vous avez des questions ou des préoccupations concernant notre politique de confidentialité ou nos
          pratiques en matière de données, veuillez nous contacter à :
        </p>
        <div className="mt-4 mb-8">
          <p className="font-semibold">Sejouris SAS</p>
          <p>60 rue François 1er</p>
          <p>75008 Paris</p>
          <p>
            Email :{" "}
            <a href="mailto:contact@sejouris.com" className="text-primary hover:underline">
              contact@sejouris.com
            </a>
          </p>
          <p>Téléphone : +33 6 95 47 22 37</p>
        </div>
      </div>

      <div className="mt-12 border-t pt-8">
        <Link href="/" className="text-primary hover:underline flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-4 w-4"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          Retour à l'accueil
        </Link>
      </div>
    </div>
  )
}

