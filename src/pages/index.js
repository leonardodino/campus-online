import React, {Fragment} from 'react'
import {mapProps} from 'recompose'
import flattenBlogPostInfo from '../fragments/BlogPostInfo'
import MetaTags from '../components/MetaTags'
import Container from '../components/Container'
import {CardRow} from '../components/CardGrid'
import Navbar from '../components/Navbar'
import StoriesTitle from '../components/StoriesTitle'
import HomeHero from '../components/HomeHero'
import PostCard from '../components/PostCard'

const PageComponent = ({posts: [hero, ...posts]}) => (
	<Fragment>
		<MetaTags title="Home" />
		<Navbar style={{position: 'fixed', top: 0, zIndex: 3}} />
		<main style={{paddingBottom: '8rem'}}>
			{hero && <HomeHero {...hero} />}
			<Container>
				<StoriesTitle
					title="Publicações recentes"
					label="Ver todas"
					url="/blog"
				/>
				<CardRow>
					{posts.map((post, index) => (
						<PostCard
							{...post}
							dynamic
							dark={post.featured}
							key={post.url}
							size={!(index % 3) % 2}
						/>
					))}
				</CardRow>
			</Container>
		</main>
	</Fragment>
)

const enhance = mapProps(({data: {blog: {posts}}}) => ({
	posts: posts.map(({post}) => flattenBlogPostInfo(post)),
}))

const IndexPage = enhance(PageComponent)

export default IndexPage

export const pageQuery = graphql`
	query IndexQuery {
		blog: allMarkdownRemark(
			sort: {order: DESC, fields: [frontmatter___date]}
			filter: {frontmatter: {template: {eq: "blog-post"}}}
		) {
			posts: edges {
				post: node {
					...BlogPostInfo
				}
			}
		}
	}
`
