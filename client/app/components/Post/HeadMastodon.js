import React from 'react';
import PropTypes from 'prop-types';

import { getSourceIcon } from 'utils/misc';
import Head from './Head';


const HeadMastodon = (props) => {
  const { post, position } = props;
  let { content } = post;
  let repost = {};

  if (content.reblog) {
    const account = content.account;
    repost = {
      url: `${content.uri}`,
      icon: 'icon-twitter_retweet',
      label: ` ${account.display_name || account.username} (${account.acct}) Boosted`, // indicate domain
    };
    content = content.reblog;
  }

  return (
    <Head
      post={props.post}
      author={content.account.display_name || content.account.username}
      account={content.account.acct}
      picSrc={content.account.avatar_static}
      link={content.uri}
      repost={repost}
      iconClass={getSourceIcon('mastodon')}
      showLogo={props.showLogo}
      position={position}
    />
  );
};

HeadMastodon.propTypes = {
  post: PropTypes.object.isRequired,
  showLogo: PropTypes.bool.isRequired,
  position: PropTypes.number.isRequired,
};

export default HeadMastodon;
