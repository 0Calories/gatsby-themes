/** @jsx jsx */
import { jsx } from "theme-ui"

type PostsProps = {
  TODO
}

const Homepage = ({ posts }: PostsProps) => (
  <div>
    <pre>{JSON.stringify(posts, null, 2)}</pre>
  </div>
)

export default Homepage
