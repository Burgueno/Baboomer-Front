/**
 *
 * Asynchronously loads the component for NewReport
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
