import css from '../base/scss/base.scss';

/**
 * The Header for the default Layout
 */
export default () => (
	<header className={`bg-light ${css.pageHeader}`}>
		<div className="container py-3">
			<h1 className={`m-0 text-dark ${css.headerTitle}`}>
				When it comes to Pokemon... you gotta Spark 'em all!
			</h1>
		</div>
	</header>
);
