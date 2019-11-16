import css from './style.scss';

/**
 * The Header for the default Layout
 */
export default () => (
  <header className={`bg-light ${css.pageHeader}`}>
    <div className="container py-3">
      <img
        alt="Modified Sparkbox Logo for the project"
        src="/pokebox.png"
        height="40"
      />
    </div>
  </header>
);
