/**
 *
 * Asynchronously loads the component for LayoutLogin
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
