import { render } from 'preact';
import { useEffect, useState } from 'react';

import preactLogo from './assets/preact.svg';
import './style.css';

const Fluff_ = ({ children, style = {}, ...etc }) =>
	<div style={style}>
		<div style={{}}>
			<div style={{}}>
				<div style={{}}>
					<div style={{}}>
						<div style={{}}>
							<div style={{}}>
								<div style={{}}>
									<div style={{}}>
										<div style={{}}>
											<div style={{}}>
												<div style={{}}>
													<div style={{}}>
														<div style={{}}>
															<div style={{}}>
																<div style={{}}>
																	<div style={{}}>
																		{children}
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

const Fluff = ({ children, ...props }) =>
	<Fluff_ {...props}>
		<Fluff_>
			<Fluff_>
				{children}
			</Fluff_>
		</Fluff_>
	</Fluff_>

export function App () {
	const [ state, setState ] = useState(0)

	useEffect(() => {
		let i = 0
		let id
		const loop = () => {
			id = window.requestAnimationFrame(() => {
				setState(i++)
				loop()
			})
		}
		loop()
		return () => cancelAnimationFrame(id)
	}, [])

	return <>
		<div>
			<Fluff>
			<Fluff>
			<Fluff>
			<Fluff>
			<Fluff>
				{state}
			</Fluff>
			</Fluff>
			</Fluff>
			</Fluff>
			</Fluff>
			<a href="https://preactjs.com" target="_blank">
				<img src={preactLogo} alt="Preact logo" height="160" width="160" />
			</a>
			<h1>Get Started building Vite-powered Preact Apps </h1>
			<section>
				<Resource
					title="Learn Preact"
					description="If you're new to Preact, try the interactive tutorial to learn important concepts"
					href="https://preactjs.com/tutorial"
				/>
				<Resource
					title="Differences to React"
					description="If you're coming from React, you may want to check out our docs to see where Preact differs"
					href="https://preactjs.com/guide/v10/differences-to-react"
				/>
				<Resource
					title="Learn Vite"
					description="To learn more about Vite and how you can customize it to fit your needs, take a look at their excellent documentation"
					href="https://vitejs.dev"
				/>
			</section>
		</div>
	</>
}

function Resource(props) {
	return (
		<a href={props.href} target="_blank" class="resource">
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
	);
}

render(<App />, document.getElementById('app'));
