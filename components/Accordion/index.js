import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

/**
 * It takes components as children with the required "label" prop.
 * Creates Accordion Content
 * Shows content based on the current active tab.
 */
class Accordion extends Component {
  constructor(props) {
    super(props);
    const { id, defaultOpen } = this.props;
    const activeTab = (defaultOpen || defaultOpen === 0)
      ? `body-${id}-${defaultOpen}`
      : false;
    this.state = {
      open: defaultOpen,
      activeTab,
    };
  }

  /**
   * If we pass in a new defaultOpen, we open that tab, and close others
   */
  shouldComponentUpdate(nextProps, nextState) {
    const { id, defaultOpen } = nextProps;
    const { open } = nextState;
    if (defaultOpen !== open) {
      this.setState({
        open: defaultOpen,
        activeTab: `body-${id}-${defaultOpen}`,
      });
    }

    return true;
  }


  onClickTabItem = (ev, tab) => {
    const { onTabClick } = this.props;
    const { activeTab } = this.state;
    onTabClick(ev, tab);
    // if the tab is already active, we can close that tab
    const newActive = (activeTab === tab) ? false : tab;
    this.setState({ activeTab: newActive });
  }

  render() {
    const {
      onClickTabItem,
      props: {
        showHeader,
        collapse,
        children,
        className,
        id,
        buttonId,
      },
      state: {
        activeTab,
      },
    } = this;
    // We may get just one child... That would break .map.
    const childrenArray = React.Children.toArray(children);
    return (
      <div
        className={className}
        key={`card-${id}`}
      >
        {childrenArray.map((child) => {
          const tabId = `body-${id}-${buttonId}`;
          const { label, className: childClass } = child.props;
          const isOpen = (tabId === activeTab);
          return (
            <div
              className={cx('card', childClass)}
              key={tabId}
            >
              <div id={`heading-${id}-${buttonId}`} className={cx({ 'card-header': showHeader })}>
                <button
                  id={buttonId}
                  className="btn btn-link"
                  type="button"
                  aria-controls={tabId}
                  aria-expanded={isOpen}
                  onClick={() => onClickTabItem(buttonId, tabId)}
                >
                  {label}
                </button>
              </div>
              <div
                className={cx({
                  collapse,
                  'card-body': true,
                  show: isOpen,
                })}
                id={tabId}
              >
                {child.props.children}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

Accordion.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onTabClick: PropTypes.func,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  defaultOpen: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  collapse: PropTypes.bool,
  showHeader: PropTypes.bool,
  buttonId: PropTypes.number,
};

Accordion.defaultProps = {
  buttonId: 0,
  className: '',
  onTabClick: () => null,
  defaultOpen: false,
  collapse: true,
  showHeader: true,
};

export default Accordion;
