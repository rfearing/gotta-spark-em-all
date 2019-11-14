import css from 'BASE/scss/base.scss';

/**
 * The Header for the default Layout
 */
export default () => (
	<header className={`bg-light ${css.pageHeader}`}>
		<div className="container py-3">
			<h1 className="m-0">
				When it comes to Pokemon... you gotta Sparak 'em all!
			</h1>
		</div>
	</header>
);
