import * as React from "react"
import { Link } from "gatsby"

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>You found the ABOUT page</h1>
      <p style={paragraphStyles}>
        We are a multibillion dollar movement that offers numerous services and renting starships, mercenaries, and other types of weaponry is our specialty. Thats all you get.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Locate one of our offices on Earth, Mars, and soon to be Jupiter, to inquire about a service. <code style={codeStyles}>GOODBYE</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>ABOUT</title>
