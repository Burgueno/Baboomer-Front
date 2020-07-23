/**
 *
 * Asynchronously loads the component for CreateInfantDialog
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
