import React from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/about';

const cx = classNames.bind(styles);

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
const About = () => {
  return (
    <div className={cx('about')}>
      <h1 className={cx('header')}>About</h1>
      <div className={cx('description')}>
        <p><strong>Device Hub </strong>is the result of collaborative effort of an awesome team fueled by the need for booking and managing various devices for testing. </p>
          <p>We hope our endeavour manages to streamline this process.</p>
      </div>
      <div>
        <h4>Collaborators</h4>
        <ul>
          <li>Nawaz Shaik</li>
          <li>Megha Vijay</li>
          <li>Pradhumna Mainali (Param)</li>
        </ul>
      </div>
      <br/><br/><br/>
      <div className={cx('contribute')}>
        <p>Want to contribute? Help us out!
          If you think the code on &nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/Device-Hub/DeviceHub">this repo</a>
        &nbsp;could be improved, please create an issue&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/Device-Hub/DeviceHub/issues">here</a>!
        </p>
      </div>
    </div>
  );
};

export default About;