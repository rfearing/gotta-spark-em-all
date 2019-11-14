import css from 'BASE/scss/base.scss';

const currentYear = new Date().getFullYear();

/**
 * The Footer for the default Layout
 */
export default () => (
  <footer className={`bg-light ${css.pageFooter}`}>
    <div className="container py-2">
      <div className="d-flex justify-content-between">
        <p className="m-0 text-dark">You should hire Ricardo in {currentYear}</p>
        <p className="m-0 text-dark">ricardofearing.com</p>
      </div>
    </div>
  </footer>
);
