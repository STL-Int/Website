import { MDXProvider } from "@mdx-js/react"

const MyH1 = props => <h1 style={{ color: "#000000" }} {...props} />
const MyParagraph = props => (
  <p style={{ fontSize: "16px", lineHeight: 1.6 }} {...props} />
)

const components = {
  h1: MyH1,
  p: MyParagraph,
}

export default wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)
