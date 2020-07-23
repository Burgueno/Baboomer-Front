/**
 *
 * Asynchronously loads the component for NewRelease
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
