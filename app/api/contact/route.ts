import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Configuration du transporteur d'email
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER || "smtp.gmail.com",
  port: Number.parseInt(process.env.EMAIL_PORT || "587"),
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

// Adresse email de destination
const DESTINATION_EMAIL = process.env.DESTINATION_EMAIL || "contact@sejouris.com"

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const data = Object.fromEntries(formData.entries())

    // Création du contenu de l'email
    const emailContent = `
      <h1>Nouvelle demande de contact sur Sejouris.com</h1>
      <p><strong>Date:</strong> ${new Date().toLocaleString("fr-FR")}</p>
      <h2>Informations du contact</h2>
      <ul>
        <li><strong>Prénom:</strong> ${data.prenom}</li>
        <li><strong>Nom:</strong> ${data.nom}</li>
        <li><strong>Email:</strong> ${data.email}</li>
        <li><strong>Téléphone:</strong> ${data.telephone}</li>
      </ul>
      <h2>Informations sur le bien</h2>
      <ul>
        <li><strong>Type de bien:</strong> ${data.typeBien || "Non spécifié"}</li>
        <li><strong>Localisation:</strong> ${data.localisation}</li>
      </ul>
      ${data.message ? `<h2>Message</h2><p>${data.message}</p>` : ""}
    `

    // Configuration de l'email
    const mailOptions = {
      from: `"Formulaire Sejouris" <${process.env.EMAIL_USER}>`,
      to: DESTINATION_EMAIL,
      subject: `Nouvelle demande de contact - ${data.prenom} ${data.nom}`,
      html: emailContent,
      replyTo: data.email as string,
    }

    // Envoi de l'email
    await transporter.sendMail(mailOptions)

    // Envoi d'un email de confirmation au client
    const confirmationMailOptions = {
      from: `"Sejouris" <${process.env.EMAIL_USER}>`,
      to: data.email as string,
      subject: "Confirmation de votre demande - Sejouris",
      html: `
        <h1>Merci pour votre demande !</h1>
        <p>Cher(e) ${data.prenom},</p>
        <p>Nous avons bien reçu votre demande concernant votre bien situé à ${data.localisation}.</p>
        <p>Notre équipe va étudier votre demande et vous contactera dans les plus brefs délais.</p>
        <p>Cordialement,</p>
        <p>L'équipe Sejouris</p>
      `,
    }

    await transporter.sendMail(confirmationMailOptions)

    return NextResponse.json({
      success: true,
      message: "Formulaire soumis avec succès",
    })
  } catch (error) {
    console.error("Erreur lors de la soumission du formulaire:", error)
    return NextResponse.json({ success: false, message: "Erreur lors de la soumission du formulaire" }, { status: 500 })
  }
}

