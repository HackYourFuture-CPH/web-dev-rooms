# Modals

Modals are container components that are shown when a button is clicked. A simple modal would be:

```tsx
import React from 'react';
import PropTypes from 'prop-types';

import { Modal } from '../../../components';

function SimpleModal(props) {
  // This is used to manually close the modal from within.
  const { onClose } = props;

  return (
    <Modal {...props}>
      <h1>Title</h1>

      <button type="button" onClick={onClose}>
        Close modal
      </button>
    </Modal>
  );
}

ViewEventModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
```

The modal is invoked by using the `modal` property on the `Button` component:

```tsx
<Button modal={(props) => <SimpleModal {...props} />}>Open modal</Button>
```

## Additional props

If the modal is serving a specific function, it probably requires additional props (e.g. `id`, `onDone`).
An example of how a modal might be used to delete an item from the list:

```tsx
<Button modal={(props) => <DeleteItemModal {...props} id={id} />}>
  Delete
</Button>
```

And the modal itself:

```tsx
function DeleteItemModal(props) {
  const { onClose, id } = props;
  const { fetch } = useAuthenticatedFetch();

  function delete(){
    fetch(`/api/item/${id}`, { method: 'DELETE' })
    onClose();
  }

  return (
    <Modal {...props}>
      <h1>Title</h1>

      <button type="button" onClick={delete}>
        Close modal
      </button>
    </Modal>
  );
}

DeleteItemModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
```
