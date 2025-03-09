import Link from "next/link"

export default function MentionsLegales() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-24 md:py-32">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Mentions Légales</h1>
        <p className="text-muted-foreground">Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}</p>
      </div>

      <div className="prose prose-blue max-w-none">
        <h2 className="text-2xl font-bold text-primary mt-8 mb-4">1. Informations légales</h2>
        <p>Le site Sejouris.com est édité par :</p>
        <div className="mt-4 mb-6">
          <p className="font-semibold">Sejouris SAS</p>
          <p>Société par Actions Simplifiée au capital de 10 000 €</p>
          <p>Siège social : 60 rue François 1er, 75008 Paris</p>
          <p>SIREN : 941 168 148</p>
          <p>RCS : 941 168 148 R.C.S. Paris</p>
          <p>N° TVA Intracommunautaire : FR35 941 168 148</p>
        </div>

        <h2 className="text-2xl font-bold text-primary mt-8 mb-4">2. Directeur de la publication</h2>
        <p>
          Le directeur de la publication du site Sejouris.com est Monsieur Jean Dupont, en sa qualité de Président de
          Sejouris SAS.
        </p>

        <h2 className="text-2xl font-bold text-primary mt-8 mb-4">3. Hébergement</h2>
        <p>Le site Sejouris.com est hébergé par :</p>
        <div className="mt-4 mb-6">
          <p>Vercel Inc.</p>
          <p>340 S Lemon Ave #4133</p>
          <p>Walnut, CA 91789</p>
          <p>États-Unis</p>
          <p>
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              https://vercel.com
            </a>
          </p>
        </div>

        <h2 className="text-2xl font-bold text-primary mt-8 mb-4">4. Propriété intellectuelle</h2>
        <p>
          L'ensemble du contenu du site Sejouris.com (structure, textes, logos, images, vidéos, graphismes, etc.) est la
          propriété exclusive de Sejouris SAS ou de ses partenaires, et est protégé par les lois françaises et
          internationales relatives à la propriété intellectuelle.
        </p>
        <p>
          Toute reproduction, représentation, modification, publication, adaptation ou exploitation de tout ou partie
          des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite
          préalable de Sejouris SAS.
        </p>
        <p>
          Toute exploitation non autorisée du site ou de son contenu sera considérée comme constitutive d'une
          contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de la
          Propriété Intellectuelle.
        </p>

        <h2 className="text-2xl font-bold text-primary mt-8 mb-4">5. Limitation de responsabilité</h2>
        <p>
          Sejouris SAS s'efforce d'assurer au mieux de ses possibilités l'exactitude et la mise à jour des informations
          diffusées sur son site, dont elle se réserve le droit de corriger, à tout moment et sans préavis, le contenu.
        </p>
        <p>
          Toutefois, Sejouris SAS ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à
          disposition sur son site. En conséquence, Sejouris SAS décline toute responsabilité :
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le site ;
          </li>
          <li>
            pour tous dommages résultant d'une intrusion frauduleuse d'un tiers ayant entraîné une modification des
            informations mises à disposition sur le site ;
          </li>
          <li>
            et plus généralement, pour tous dommages, directs ou indirects, qu'elles qu'en soient les causes, origines,
            natures ou conséquences, provoqués à raison de l'accès de quiconque au site ou de l'impossibilité d'y
            accéder, de même que l'utilisation du site et/ou du crédit accordé à une quelconque information provenant
            directement ou indirectement de ce dernier.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-primary mt-8 mb-4">6. Liens hypertextes</h2>
        <p>
          Le site Sejouris.com peut contenir des liens hypertextes vers d'autres sites internet ou d'autres ressources
          disponibles sur Internet. Sejouris SAS ne dispose d'aucun moyen pour contrôler les sites en connexion avec son
          site internet et ne répond pas de la disponibilité de tels sites et sources externes, ni ne la garantit.
        </p>
        <p>
          Sejouris SAS ne peut être tenue pour responsable de tout dommage, de quelque nature que ce soit, résultant du
          contenu de ces sites ou sources externes, et notamment des informations, produits ou services qu'ils
          proposent, ou de tout usage qui peut être fait de ces éléments.
        </p>
        <p>
          La mise en place de liens hypertextes par des tiers vers des pages ou des documents diffusés sur le site
          Sejouris.com est autorisée sous réserve que les liens ne contreviennent pas aux intérêts de Sejouris SAS, et
          qu'ils garantissent la possibilité pour l'utilisateur d'identifier l'origine et l'auteur du document.
        </p>

        <h2 className="text-2xl font-bold text-primary mt-8 mb-4">7. Droit applicable et juridiction compétente</h2>
        <p>
          Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français
          seront seuls compétents.
        </p>

        <h2 className="text-2xl font-bold text-primary mt-8 mb-4">8. Contact</h2>
        <p>
          Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter à l'adresse suivante :
        </p>
        <div className="mt-4 mb-8">
          <p>Sejouris SAS</p>
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

